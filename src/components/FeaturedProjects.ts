import { getProjects } from '../services/contentServices';
import { createProjectCard } from './ProjectCard';

export function createFeaturedProjects(): string {
    const projects = getProjects();

    const categories = [
        'All',
        ...new Set(
            projects.map(project => project.category)
        ),
    ];

    return `
        <section class="featured-projects" id="projects">
            <div class="container">

                <div class="featured-projects__header">
                    <div>
                        <p class="section-label">
                            SELECTED PROJECTS
                        </p>

                        <h2 class="featured-projects__title">
                            Building practical
                            <span>digital solutions.</span>
                        </h2>
                    </div>

                    <p class="featured-projects__intro">
                        A selection of projects developed through practical learning,
                        business problem-solving and the continued development of my
                        technical capability.
                    </p>
                </div>

                <div
                    class="project-filters"
                    aria-label="Filter projects by category"
                >
                    ${categories
                        .map(
                            (category, index) => `
                                <button
                                    class="content-filter${index === 0 ? ' content-filter--active' : ''}"
                                    type="button"
                                    data-project-filter="${category}"
                                    aria-pressed="${index === 0 ? 'true' : 'false'}"
                                >
                                    ${category}
                                </button>
                            `
                        )
                        .join('')}
                </div>

                <div
                    class="featured-projects__grid"
                    id="project-grid"
                    aria-live="polite"
                >
                    ${projects
                        .map(project => createProjectCard(project))
                        .join('')}
                </div>

            </div>
        </section>
    `;
}
