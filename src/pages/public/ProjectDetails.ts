import type { Project } from '../../models/Project';

export function ProjectDetails(project: Project): string {
    return `
        <div class="project-details">
            <section class="project-details__hero">
                <div class="container">
                    <a href="#projects" class="project-details__back">
                        ← Back to Projects
                    </a>

                    <div class="project-details__meta">
                        <span>${project.category}</span>
                        <span>${project.year}</span>
                    </div>

                    <h1 class="project-details__title">
                        ${project.title}
                    </h1>

                    <p class="project-details__description">
                        ${project.shortDescription}
                    </p>

                    <div class="project-details__technologies">
                        ${project.technologies
                            .map(
                                (technology) =>
                                    `<span class="project-details__technology">${technology}</span>`
                            )
                            .join('')}
                    </div>

                    ${project.githubUrl || project.liveUrl ? `
                        <div class="project-details__actions">
                            ${project.liveUrl ? `
                                <a
                                    href="${project.liveUrl}"
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
                                    href="${project.githubUrl}"
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
                            <p>${project.caseStudy.overview}</p>
                        </div>

                        <div class="project-details__section">
                            <span class="project-details__eyebrow">The Problem</span>
                            <p>${project.caseStudy.problem}</p>
                        </div>

                        <div class="project-details__section">
                            <span class="project-details__eyebrow">The Solution</span>
                            <p>${project.caseStudy.solution}</p>
                        </div>

                        <div class="project-details__section">
                            <span class="project-details__eyebrow">My Role</span>
                            <p>${project.caseStudy.role}</p>
                        </div>

                        <div class="project-details__section">
                            <span class="project-details__eyebrow">Key Features</span>

                            <ul class="project-details__list">
                                ${project.caseStudy.keyFeatures
                                    .map((feature) => `<li>${feature}</li>`)
                                    .join('')}
                            </ul>
                        </div>

                        <div class="project-details__section">
                            <span class="project-details__eyebrow">Development Challenges</span>

                            <ul class="project-details__list">
                                ${project.caseStudy.challenges
                                    .map((challenge) => `<li>${challenge}</li>`)
                                    .join('')}
                            </ul>
                        </div>

                        <div class="project-details__section">
                            <span class="project-details__eyebrow">Outcomes & Learning</span>

                            <ul class="project-details__list">
                                ${project.caseStudy.outcomes
                                    .map((outcome) => `<li>${outcome}</li>`)
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
                                                        src="${screenshot}"
                                                        alt="${project.title} screenshot ${index + 1}"
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