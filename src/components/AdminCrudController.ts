import type {
    AdminContentFormData,
    BlogFormData,
    ProjectFormData,
} from '../models/AdminContentForm';

import type {
    ProjectCategory,
} from '../models/Project';

import {
    blogService,
    projectService,
} from '../services/contentServices';

type RerenderAdmin =
    (route: string) => void;

function createId(prefix: string): string {
    if (
        typeof crypto !== 'undefined' &&
        typeof crypto.randomUUID === 'function'
    ) {
        return `${prefix}-${crypto.randomUUID()}`;
    }

    return `${prefix}-${Date.now()}`;
}

function parseCommaSeparated(
    value: string
): string[] {
    return value
        .split(',')
        .map(item => item.trim())
        .filter(Boolean);
}

function normalizeSlug(
    value: string
): string {
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function getInput(
    form: HTMLFormElement,
    selector: string
): HTMLInputElement | null {
    return form.querySelector<HTMLInputElement>(
        selector
    );
}

function getTextarea(
    form: HTMLFormElement,
    selector: string
): HTMLTextAreaElement | null {
    return form.querySelector<HTMLTextAreaElement>(
        selector
    );
}

function getSelect(
    form: HTMLFormElement,
    selector: string
): HTMLSelectElement | null {
    return form.querySelector<HTMLSelectElement>(
        selector
    );
}

function buildProjectFormData(
    form: HTMLFormElement
): ProjectFormData | null {
    const title =
        getInput(form, '#content-title');

    const slug =
        getInput(form, '#content-slug');

    const year =
        getInput(form, '#project-year');

    const shortDescription =
        getTextarea(
            form,
            '#project-short-description'
        );

    const description =
        getTextarea(
            form,
            '#project-description'
        );

    const category =
        getSelect(
            form,
            '#project-category'
        );

    const technologies =
        getInput(
            form,
            '#project-technologies'
        );

    const githubUrl =
        getInput(
            form,
            '#project-github'
        );

    const liveUrl =
        getInput(
            form,
            '#project-live'
        );

    const featured =
        getInput(
            form,
            '#project-featured'
        );

    if (
        !title ||
        !slug ||
        !year ||
        !shortDescription ||
        !description ||
        !category ||
        !technologies ||
        !githubUrl ||
        !liveUrl ||
        !featured
    ) {
        return null;
    }

    const projectYear =
        Number(year.value);

    if (
        !title.value.trim() ||
        !slug.value.trim() ||
        !shortDescription.value.trim() ||
        !description.value.trim() ||
        !technologies.value.trim() ||
        !Number.isInteger(projectYear)
    ) {
        return null;
    }

    return {
        type: 'project',
        title: title.value.trim(),
        slug: normalizeSlug(slug.value),
        shortDescription:
            shortDescription.value.trim(),
        description:
            description.value.trim(),
        category:
            category.value as ProjectCategory,
        technologies:
            parseCommaSeparated(
                technologies.value
            ),
        githubUrl:
            githubUrl.value.trim() || undefined,
        liveUrl:
            liveUrl.value.trim() || undefined,
        featured: featured.checked,
        year: projectYear,
    };
}

function buildBlogFormData(
    form: HTMLFormElement
): BlogFormData | null {
    const title =
        getInput(form, '#content-title');

    const slug =
        getInput(form, '#content-slug');

    const excerpt =
        getTextarea(form, '#blog-excerpt');

    const content =
        getTextarea(form, '#blog-content');

    const tags =
        getInput(form, '#blog-tags');

    const published =
        getInput(form, '#blog-published');

    if (
        !title ||
        !slug ||
        !excerpt ||
        !content ||
        !tags ||
        !published
    ) {
        return null;
    }

    if (
        !title.value.trim() ||
        !slug.value.trim() ||
        !excerpt.value.trim() ||
        !content.value.trim() ||
        !tags.value.trim()
    ) {
        return null;
    }

    return {
        type: 'blog',
        title: title.value.trim(),
        slug: normalizeSlug(slug.value),
        excerpt: excerpt.value.trim(),
        content: content.value.trim(),
        tags: parseCommaSeparated(
            tags.value
        ),
        published: published.checked,
    };
}

function saveContent(
    data: AdminContentFormData,
    contentId: string
): boolean {
    switch (data.type) {
        case 'project': {
            if (contentId) {
                const existingProject =
                    projectService.getById(
                        contentId
                    );

                if (!existingProject) {
                    return false;
                }

                projectService.update(
                    contentId,
                    {
                        title: data.title,
                        slug: data.slug,
                        shortDescription:
                            data.shortDescription,
                        description:
                            data.description,
                        category: data.category,
                        technologies:
                            data.technologies,
                        githubUrl:
                            data.githubUrl,
                        liveUrl:
                            data.liveUrl,
                        featured:
                            data.featured,
                        year: data.year,
                    }
                );

                return true;
            }

            projectService.create({
                id: createId('project'),
                title: data.title,
                slug: data.slug,
                shortDescription:
                    data.shortDescription,
                description:
                    data.description,
                category: data.category,
                technologies:
                    data.technologies,
                githubUrl:
                    data.githubUrl,
                liveUrl:
                    data.liveUrl,
                featured:
                    data.featured,
                year: data.year,
            });

            return true;
        }

        case 'blog': {
            const now =
                new Date().toISOString();

            if (contentId) {
                const existingPost =
                    blogService.getById(
                        contentId
                    );

                if (!existingPost) {
                    return false;
                }

                blogService.update(
                    contentId,
                    {
                        title: data.title,
                        slug: data.slug,
                        excerpt: data.excerpt,
                        content: data.content,
                        tags: data.tags,
                        published:
                            data.published,
                        publishedAt:
                            existingPost.publishedAt ||
                            now,
                        updatedAt: now,
                    }
                );

                return true;
            }

            blogService.create({
                id: createId('blog'),
                title: data.title,
                slug: data.slug,
                excerpt: data.excerpt,
                content: data.content,
                tags: data.tags,
                published: data.published,
                publishedAt: now,
                updatedAt: now,
            });

            return true;
        }
    }
}

function slugExists(
    data: AdminContentFormData,
    currentId: string
): boolean {
    switch (data.type) {
        case 'project':
            return projectService
                .getAll()
                .some(
                    project =>
                        project.slug === data.slug &&
                        project.id !== currentId
                );

        case 'blog':
            return blogService
                .getAll()
                .some(
                    post =>
                        post.slug === data.slug &&
                        post.id !== currentId
                );
    }
}

export function initializeAdminCrud(
    rerenderAdmin: RerenderAdmin
): void {
    const createProjectButton =
        document.querySelector<HTMLButtonElement>(
            '[data-create-project]'
        );

    createProjectButton?.addEventListener(
        'click',
        () => {
            window.location.hash =
                'admin/projects/new';
        }
    );

    const createBlogButton =
        document.querySelector<HTMLButtonElement>(
            '[data-create-blog]'
        );

    createBlogButton?.addEventListener(
        'click',
        () => {
            window.location.hash =
                'admin/blog/new';
        }
    );

    document
        .querySelectorAll<HTMLButtonElement>(
            '[data-edit-project]'
        )
        .forEach(button => {
            button.addEventListener(
                'click',
                () => {
                    const id =
                        button.dataset.editProject;

                    if (!id) {
                        return;
                    }

                    window.location.hash =
                        `admin/projects/edit/${id}`;
                }
            );
        });

    document
        .querySelectorAll<HTMLButtonElement>(
            '[data-edit-blog]'
        )
        .forEach(button => {
            button.addEventListener(
                'click',
                () => {
                    const id =
                        button.dataset.editBlog;

                    if (!id) {
                        return;
                    }

                    window.location.hash =
                        `admin/blog/edit/${id}`;
                }
            );
        });

    document
        .querySelectorAll<HTMLButtonElement>(
            '[data-delete-project]'
        )
        .forEach(button => {
            button.addEventListener(
                'click',
                () => {
                    const id =
                        button.dataset.deleteProject;

                    if (!id) {
                        return;
                    }

                    const project =
                        projectService.getById(id);

                    if (!project) {
                        return;
                    }

                    const confirmed =
                        window.confirm(
                            `Delete "${project.title}"? This action cannot be undone.`
                        );

                    if (!confirmed) {
                        return;
                    }

                    projectService.delete(id);

                    rerenderAdmin(
                        '#admin/projects'
                    );
                }
            );
        });

    document
        .querySelectorAll<HTMLButtonElement>(
            '[data-delete-blog]'
        )
        .forEach(button => {
            button.addEventListener(
                'click',
                () => {
                    const id =
                        button.dataset.deleteBlog;

                    if (!id) {
                        return;
                    }

                    const post =
                        blogService.getById(id);

                    if (!post) {
                        return;
                    }

                    const confirmed =
                        window.confirm(
                            `Delete "${post.title}"? This action cannot be undone.`
                        );

                    if (!confirmed) {
                        return;
                    }

                    blogService.delete(id);

                    rerenderAdmin(
                        '#admin/blog'
                    );
                }
            );
        });

    const form =
        document.querySelector<HTMLFormElement>(
            '#admin-content-form'
        );

    if (!form) {
        return;
    }

    const status =
        form.querySelector<HTMLElement>(
            '#admin-form-status'
        );

    if (!status) {
        return;
    }

    const statusElement: HTMLElement =
        status;

    form.addEventListener(
        'submit',
        event => {
            event.preventDefault();

            statusElement.textContent = '';
            statusElement.className =
                'admin-form-status';

            const contentType =
                form.dataset.contentType;

            const contentId =
                form.dataset.contentId ?? '';

            let formData:
                AdminContentFormData | null =
                null;

            if (contentType === 'project') {
                formData =
                    buildProjectFormData(form);
            }

            if (contentType === 'blog') {
                formData =
                    buildBlogFormData(form);
            }

            if (!formData) {
                statusElement.textContent =
                    'Please complete all required fields correctly.';

                statusElement.classList.add(
                    'admin-form-status--error'
                );

                return;
            }

            if (
                slugExists(
                    formData,
                    contentId
                )
            ) {
                statusElement.textContent =
                    'That slug is already being used. Please choose another.';

                statusElement.classList.add(
                    'admin-form-status--error'
                );

                return;
            }

            try {
                const saved =
                    saveContent(
                        formData,
                        contentId
                    );

                if (!saved) {
                    throw new Error(
                        'Content could not be saved.'
                    );
                }

                statusElement.textContent =
                    'Saved successfully.';

                statusElement.classList.add(
                    'admin-form-status--success'
                );

                window.location.hash =
                    formData.type === 'project'
                        ? 'admin/projects'
                        : 'admin/blog';
            } catch {
                statusElement.textContent =
                    'The content could not be saved. Please try again.';

                statusElement.classList.add(
                    'admin-form-status--error'
                );
            }
        }
    );
}
