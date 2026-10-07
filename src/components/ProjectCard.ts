import type { Project } from '../models/Project';

export function createProjectCard(project: Project): string {
    const isFeatured = project.slug === 'eymonk-website-audit-system';

    const cardClass = isFeatured
        ? 'project-card project-card--featured'
        : 'project-card';

    return `
        <article class="${cardClass}">

            <div class="project-card__content">

                <div class="project-card__meta">
                    <span class="project-card__category">
                        ${project.category}
                    </span>

                    <span class="project-card__year">
                        ${project.year}
                    </span>
                </div>

                <h3 class="project-card__title">
                    ${project.title}
                </h3>

                <p class="project-card__description">
                    ${project.shortDescription}
                </p>

                <div class="project-card__technologies">
                    ${project.technologies
                        .map(
                            technology =>
                                `<span class="project-card__technology">${technology}</span>`
                        )
                        .join('')}
                </div>

                <button
                    class="project-card__link"
                    type="button"
                    data-project-slug="${project.slug}"
                >
                    View Project
                    <span aria-hidden="true">→</span>
                </button>

            </div>

        </article>
    `;
}