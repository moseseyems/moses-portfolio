import type {
    AdminContentFormData,
} from '../../models/AdminContentForm';

import type {
    Project,
    ProjectCategory,
} from '../../models/Project';

import type {
    BlogPost,
} from '../../models/BlogPost';

import {
    escapeHtml,
} from '../../utils/html';

const projectCategories: ProjectCategory[] = [
    'Business Systems',
    'Frontend',
    'Fullstack',
    'Web Development',
];

function projectForm(
    project?: Project
): string {
    return `
        <form
            class="admin-content-form"
            id="admin-content-form"
            data-content-type="project"
            data-content-id="${escapeHtml(project?.id ?? '')}"
            novalidate
        >
            <div class="admin-form-grid">
                <div class="admin-form-field admin-form-field--wide">
                    <label for="content-title">
                        Title
                    </label>

                    <input
                        id="content-title"
                        name="title"
                        type="text"
                        value="${escapeHtml(project?.title ?? '')}"
                        required
                    >
                </div>

                <div class="admin-form-field">
                    <label for="content-slug">
                        Slug
                    </label>

                    <input
                        id="content-slug"
                        name="slug"
                        type="text"
                        value="${escapeHtml(project?.slug ?? '')}"
                        required
                    >
                </div>

                <div class="admin-form-field">
                    <label for="project-year">
                        Year
                    </label>

                    <input
                        id="project-year"
                        name="year"
                        type="number"
                        min="2000"
                        max="2100"
                        value="${project?.year ?? new Date().getFullYear()}"
                        required
                    >
                </div>

                <div class="admin-form-field admin-form-field--wide">
                    <label for="project-short-description">
                        Short description
                    </label>

                    <textarea
                        id="project-short-description"
                        name="shortDescription"
                        rows="3"
                        required
                    >${escapeHtml(project?.shortDescription ?? '')}</textarea>
                </div>

                <div class="admin-form-field admin-form-field--wide">
                    <label for="project-description">
                        Full description
                    </label>

                    <textarea
                        id="project-description"
                        name="description"
                        rows="5"
                        required
                    >${escapeHtml(project?.description ?? '')}</textarea>
                </div>

                <div class="admin-form-field">
                    <label for="project-category">
                        Category
                    </label>

                    <select
                        id="project-category"
                        name="category"
                        required
                    >
                        ${projectCategories
                            .map(
                                category => `
                                    <option
                                        value="${category}"
                                        ${
                                            project?.category === category
                                                ? 'selected'
                                                : ''
                                        }
                                    >
                                        ${category}
                                    </option>
                                `
                            )
                            .join('')}
                    </select>
                </div>

                <div class="admin-form-field">
                    <label for="project-technologies">
                        Technologies
                    </label>

                    <input
                        id="project-technologies"
                        name="technologies"
                        type="text"
                        value="${escapeHtml(project?.technologies.join(', ') ?? '')}"
                        placeholder="TypeScript, HTML, CSS"
                        required
                    >

                    <small>
                        Separate technologies with commas.
                    </small>
                </div>

                <div class="admin-form-field">
                    <label for="project-github">
                        GitHub URL
                    </label>

                    <input
                        id="project-github"
                        name="githubUrl"
                        type="url"
                        value="${escapeHtml(project?.githubUrl ?? '')}"
                        placeholder="https://github.com/..."
                    >
                </div>

                <div class="admin-form-field">
                    <label for="project-live">
                        Live URL
                    </label>

                    <input
                        id="project-live"
                        name="liveUrl"
                        type="url"
                        value="${escapeHtml(project?.liveUrl ?? '')}"
                        placeholder="https://..."
                    >
                </div>

                <div class="admin-form-field admin-form-field--wide">
                    <label for="project-image">
                        Image URL
                    </label>

                    <input
                        id="project-image"
                        name="imageUrl"
                        type="url"
                        value="${escapeHtml(project?.imageUrl ?? '')}"
                        placeholder="https://example.com/project-image.jpg"
                    >

                    <small>
                        Optional image displayed with this project.
                    </small>
                </div>

                <label class="admin-checkbox admin-form-field--wide">
                    <input
                        id="project-featured"
                        name="featured"
                        type="checkbox"
                        ${project?.featured ? 'checked' : ''}
                    >

                    <span>
                        Feature this project
                    </span>
                </label>
            </div>

            <div
                class="admin-form-status"
                id="admin-form-status"
                role="status"
                aria-live="polite"
            ></div>

            <div class="admin-form-actions">
                <button
                    class="admin-primary-button"
                    type="submit"
                >
                    ${
                        project
                            ? 'Save Project'
                            : 'Create Project'
                    }
                </button>

                <a
                    class="admin-secondary-button"
                    href="#admin/projects"
                >
                    Cancel
                </a>
            </div>
        </form>
    `;
}

function blogForm(
    post?: BlogPost
): string {
    return `
        <form
            class="admin-content-form"
            id="admin-content-form"
            data-content-type="blog"
            data-content-id="${escapeHtml(post?.id ?? '')}"
            novalidate
        >
            <div class="admin-form-grid">
                <div class="admin-form-field admin-form-field--wide">
                    <label for="content-title">
                        Title
                    </label>

                    <input
                        id="content-title"
                        name="title"
                        type="text"
                        value="${escapeHtml(post?.title ?? '')}"
                        required
                    >
                </div>

                <div class="admin-form-field admin-form-field--wide">
                    <label for="content-slug">
                        Slug
                    </label>

                    <input
                        id="content-slug"
                        name="slug"
                        type="text"
                        value="${escapeHtml(post?.slug ?? '')}"
                        required
                    >

                    <small>
                        Example: financial-clarity-beyond-sales
                    </small>
                </div>

                <div class="admin-form-field admin-form-field--wide">
                    <label for="blog-excerpt">
                        Excerpt
                    </label>

                    <textarea
                        id="blog-excerpt"
                        name="excerpt"
                        rows="3"
                        required
                    >${escapeHtml(post?.excerpt ?? '')}</textarea>
                </div>

                <div class="admin-form-field admin-form-field--wide">
                    <label for="blog-content">
                        Article content
                    </label>

                    <textarea
                        id="blog-content"
                        name="content"
                        rows="14"
                        required
                    >${escapeHtml(post?.content ?? '')}</textarea>
                </div>

                <div class="admin-form-field admin-form-field--wide">
                    <label for="blog-tags">
                        Tags
                    </label>

                    <input
                        id="blog-tags"
                        name="tags"
                        type="text"
                        value="${escapeHtml(post?.tags.join(', ') ?? '')}"
                        placeholder="Business, Finance"
                        required
                    >

                    <small>
                        Separate tags with commas.
                    </small>
                </div>

                <div class="admin-form-field admin-form-field--wide">
                    <label for="blog-image">
                        Image URL
                    </label>

                    <input
                        id="blog-image"
                        name="imageUrl"
                        type="url"
                        value="${escapeHtml(post?.imageUrl ?? '')}"
                        placeholder="https://example.com/article-image.jpg"
                    >

                    <small>
                        Optional image displayed with this insight.
                    </small>
                </div>

                <label class="admin-checkbox admin-form-field--wide">
                    <input
                        id="blog-published"
                        name="published"
                        type="checkbox"
                        ${post?.published ? 'checked' : ''}
                    >

                    <span>
                        Publish this insight
                    </span>
                </label>
            </div>

            <div
                class="admin-form-status"
                id="admin-form-status"
                role="status"
                aria-live="polite"
            ></div>

            <div class="admin-form-actions">
                <button
                    class="admin-primary-button"
                    type="submit"
                >
                    ${
                        post
                            ? 'Save Insight'
                            : 'Create Insight'
                    }
                </button>

                <a
                    class="admin-secondary-button"
                    href="#admin/blog"
                >
                    Cancel
                </a>
            </div>
        </form>
    `;
}

export function AdminContentForm(
    data: AdminContentFormData | null,
    mode: 'create' | 'edit'
): string {
    const isProject =
        data?.type === 'project';

    const isBlog =
        data?.type === 'blog';

    const contentType =
        isProject
            ? 'Project'
            : isBlog
                ? 'Insight'
                : 'Content';

    return `
        <section class="admin-page">
            <div class="admin-page__heading">
                <div>
                    <p class="admin-eyebrow">
                        ${
                            mode === 'create'
                                ? 'Create'
                                : 'Update'
                        }
                    </p>

                    <h1>
                        ${
                            mode === 'create'
                                ? `New ${contentType}`
                                : `Edit ${contentType}`
                        }
                    </h1>

                    <p>
                        ${
                            isProject
                                ? 'Manage the information displayed for this portfolio project.'
                                : 'Manage the article displayed in the public Insights feed.'
                        }
                    </p>
                </div>
            </div>

            <div class="admin-panel">
                ${
                    isProject
                        ? projectForm()
                        : isBlog
                            ? blogForm()
                            : ''
                }
            </div>
        </section>
    `;
}

export function AdminProjectEditor(
    project?: Project
): string {
    return `
        <section class="admin-page">
            <div class="admin-page__heading">
                <div>
                    <p class="admin-eyebrow">
                        ${project ? 'Update' : 'Create'}
                    </p>

                    <h1>
                        ${project ? 'Edit Project' : 'New Project'}
                    </h1>

                    <p>
                        Manage the information displayed
                        for this portfolio project.
                    </p>
                </div>
            </div>

            <div class="admin-panel">
                ${projectForm(project)}
            </div>
        </section>
    `;
}

export function AdminBlogEditor(
    post?: BlogPost
): string {
    return `
        <section class="admin-page">
            <div class="admin-page__heading">
                <div>
                    <p class="admin-eyebrow">
                        ${post ? 'Update' : 'Create'}
                    </p>

                    <h1>
                        ${post ? 'Edit Insight' : 'New Insight'}
                    </h1>

                    <p>
                        Manage the article displayed
                        in the public Insights feed.
                    </p>
                </div>
            </div>

            <div class="admin-panel">
                ${blogForm(post)}
            </div>
        </section>
    `;
}
