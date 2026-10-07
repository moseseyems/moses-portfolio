import { projects } from '../data/projects';
import { createProjectCard } from './ProjectCard';

export function createFeaturedProjects(): string {
    const featuredProjects = projects.filter(
        project => project.featured
    );

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

            <div class="featured-projects__grid">
            ${featuredProjects
                .map(project => createProjectCard(project))
                .join('')}
            </div>

        </div>
        </section>
    `;
}