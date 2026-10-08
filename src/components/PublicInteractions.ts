import { createProjectCard } from './ProjectCard';
import { getProjects, getPublishedBlogPosts } from '../services/contentServices';
import { calculateReadingTime } from '../utils/readingTime';
import type { BlogPost } from '../models/BlogPost';

function createInsightCard(post: BlogPost): string {
    const primaryTag = post.tags[0] ?? 'Insight';

    return `
        <article class="insight-card">
            <div class="insight-card__meta">
                <span class="insight-card__category">
                    ${primaryTag}
                </span>

                <span class="insight-card__reading-time">
                    ${calculateReadingTime(post.content)} min read
                </span>
            </div>

            <h3>${post.title}</h3>

            <p>${post.excerpt}</p>

            <div class="insight-card__tags">
                ${post.tags
                    .map(
                        tag => `
                            <span class="insight-card__tag">
                                ${tag}
                            </span>
                        `
                    )
                    .join('')}
            </div>

            <button
                class="insight-card__link"
                type="button"
                data-blog-slug="${post.slug}"
            >
                Read Insight
                <span aria-hidden="true">→</span>
            </button>
        </article>
    `;
}

function setActiveFilter(
    buttons: NodeListOf<HTMLButtonElement>,
    activeButton: HTMLButtonElement
): void {
    buttons.forEach(button => {
        const isActive = button === activeButton;

        button.classList.toggle(
            'content-filter--active',
            isActive
        );

        button.setAttribute(
            'aria-pressed',
            String(isActive)
        );
    });
}

export function initializePublicInteractions(): void {
    const projectGrid =
        document.querySelector<HTMLElement>('#project-grid');

    const projectFilterButtons =
        document.querySelectorAll<HTMLButtonElement>(
            '[data-project-filter]'
        );

    projectFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!projectGrid) {
                return;
            }

            const category =
                button.dataset.projectFilter ?? 'All';

            const filteredProjects =
                category === 'All'
                    ? getProjects()
                    : getProjects().filter(
                        project =>
                            project.category === category
                    );

            projectGrid.innerHTML =
                filteredProjects
                    .map(project => createProjectCard(project))
                    .join('');

            setActiveFilter(
                projectFilterButtons,
                button
            );
        });
    });

    const insightsGrid =
        document.querySelector<HTMLElement>('#insights-grid');

    const blogFilterButtons =
        document.querySelectorAll<HTMLButtonElement>(
            '[data-blog-filter]'
        );

    blogFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!insightsGrid) {
                return;
            }

            const tag =
                button.dataset.blogFilter ?? 'All';

            const filteredPosts =
                tag === 'All'
                    ? getPublishedBlogPosts()
                    : getPublishedBlogPosts().filter(
                        post => post.tags.includes(tag)
                    );

            insightsGrid.innerHTML =
                filteredPosts
                    .map(post => createInsightCard(post))
                    .join('');

            setActiveFilter(
                blogFilterButtons,
                button
            );
        });
    });
}
