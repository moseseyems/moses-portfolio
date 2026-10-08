import type { Project } from '../../models/Project';
import { escapeHtml, safeUrl } from '../../utils/html';

export function ProjectDetails(project: Project): string {
    return `
        <div class="project-details">
            <section class="project-details__hero">
                <div class="container">
                    <a href="#projects" class="project-details__back">
                        ← Back to Projects
                    </a>

                    <div class="project-details__meta">
                        <span>${escapeHtml(project.category)}</span>
                        <span>${project.year}</span>
                    </div>

                    <h1 class="project-details__title">
                        ${escapeHtml(project.title)}
                    </h1>

                    <p class="project-details__description">
                        ${escapeHtml(project.shortDescription)}
                    </p>

                    <div class="project-details__technologies">
                        ${project.technologies
                            .map(
                                (technology) =>
                                    `<span class="project-details__technology">${escapeHtml(technology)}</span>`
                            )
                            .join('')}
                    </div>

                    ${project.imageUrl ? `
                        <figure class="project-details__featured-image">
                            <img
                                src="${safeUrl(project.imageUrl)}"
                                alt="${escapeHtml(project.title)}"
                            >
                        </figure>
                    ` : ''}

                    ${project.githubUrl || project.liveUrl ? `
                        <div class="project-details__actions">
                            ${project.liveUrl ? `
                                <a
                                    href="${safeUrl(project.liveUrl)}"
                                    class="project-details__action project-details__action--primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Live Project
                                    <span aria-hidden="true">↗</span>
                                </a>
                            ` : ''}

                            ${project.githubUrl ? `
                                <a
                                    href="${safeUrl(project.githubUrl)}"
                                    class="project-details__action project-details__action--secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Source Code
                                    <span aria-hidden="true">↗</span>
                                </a>
                            ` : ''}
                        </div>
                    ` : ''}
                </div>
            </section>

            ${project.caseStudy ? `
                <section class="project-details__case-study">
                    <div class="container">

                        <div class="project-details__section">
                            <span class="project-details__eyebrow">Project Overview</span>
                            <p>${escapeHtml(project.caseStudy.overview)}</p>
                        </div>

                        <div class="project-details__section">
                            <span class="project-details__eyebrow">The Problem</span>
                            <p>${escapeHtml(project.caseStudy.problem)}</p>
                        </div>

                        <div class="project-details__section">
                            <span class="project-details__eyebrow">The Solution</span>
                            <p>${escapeHtml(project.caseStudy.solution)}</p>
                        </div>

                        <div class="project-details__section">
                            <span class="project-details__eyebrow">My Role</span>
                            <p>${escapeHtml(project.caseStudy.role)}</p>
                        </div>

                        <div class="project-details__section">
                            <span class="project-details__eyebrow">Key Features</span>

                            <ul class="project-details__list">
                                ${project.caseStudy.keyFeatures
                                    .map((feature) => `<li>${escapeHtml(feature)}</li>`)
                                    .join('')}
                            </ul>
                        </div>

                        <div class="project-details__section">
                            <span class="project-details__eyebrow">Development Challenges</span>

                            <ul class="project-details__list">
                                ${project.caseStudy.challenges
                                    .map((challenge) => `<li>${escapeHtml(challenge)}</li>`)
                                    .join('')}
                            </ul>
                        </div>

                        <div class="project-details__section">
                            <span class="project-details__eyebrow">Outcomes & Learning</span>

                            <ul class="project-details__list">
                                ${project.caseStudy.outcomes
                                    .map((outcome) => `<li>${escapeHtml(outcome)}</li>`)
                                    .join('')}
                            </ul>
                        </div>

                        ${project.caseStudy.screenshots?.length ? `
                            <div class="project-details__section project-details__section--gallery">
                                <span class="project-details__eyebrow">Project Screens</span>

                                <div class="project-details__gallery">
                                    ${project.caseStudy.screenshots
                                        .map(
                                            (screenshot, index) => `
                                                <figure class="project-details__screenshot">
                                                    <img
                                                        src="${safeUrl(screenshot)}"
                                                        alt="${escapeHtml(project.title)} screenshot ${index + 1}"
                                                        loading="lazy"
                                                    >
                                                </figure>
                                            `
                                        )
                                        .join('')}
                                </div>
                            </div>
                        ` : ''}

                    </div>
                </section>
            ` : ''}
        </div>
    `;
}