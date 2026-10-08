import type { Project } from '../models/Project';
import { escapeHtml, safeUrl } from '../utils/html';

export function createProjectCard(project: Project): string {
    const isFeatured = project.slug === 'eymonk-website-audit-system';

    const cardClass = isFeatured
        ? 'project-card project-card--featured'
        : 'project-card';

    return `
        <article class="${cardClass}">

            ${project.imageUrl ? `
                <div class="project-card__image">
                    <img
                        src="${safeUrl(project.imageUrl)}"
                        alt="${escapeHtml(project.title)}"
                        loading="lazy"
                    >
                </div>
            ` : ''}

            <div class="project-card__content">

                <div class="project-card__meta">
                    <span class="project-card__category">
                        ${escapeHtml(project.category)}
                    </span>

                    <span class="project-card__year">
                        ${project.year}
                    </span>
                </div>

                <h3 class="project-card__title">
                    ${escapeHtml(project.title)}
                </h3>

                <p class="project-card__description">
                    ${escapeHtml(project.shortDescription)}
                </p>

                <div class="project-card__technologies">
                    ${project.technologies
                        .map(
                            technology =>
                                `<span class="project-card__technology">${escapeHtml(technology)}</span>`
                        )
                        .join('')}
                </div>

                <button
                    class="project-card__link"
                    type="button"
                    data-project-slug="${escapeHtml(project.slug)}"
                >
                    View Project
                    <span aria-hidden="true">→</span>
                </button>

            </div>

        </article>
    `;
}