import type { BlogPost } from '../models/BlogPost';
import { getPublishedBlogPosts } from '../services/contentServices';
import { calculateReadingTime } from '../utils/readingTime';
import { escapeHtml, safeUrl } from '../utils/html';

function createInsightCard(post: BlogPost): string {
    const primaryTag = post.tags[0] ?? 'Insight';

    return `
        <article class="insight-card">
            ${post.imageUrl ? `
                <div class="insight-card__image">
                    <img
                        src="${safeUrl(post.imageUrl)}"
                        alt="${escapeHtml(post.title)}"
                        loading="lazy"
                    >
                </div>
            ` : ''}
            <div class="insight-card__meta">
                <span class="insight-card__category">
                    ${escapeHtml(primaryTag)}
                </span>

                <span class="insight-card__reading-time">
                    ${calculateReadingTime(post.content)} min read
                </span>
            </div>

            <h3>${escapeHtml(post.title)}</h3>

            <p>${escapeHtml(post.excerpt)}</p>

            <div class="insight-card__tags">
                ${post.tags
                    .map(
                        tag => `
                            <span class="insight-card__tag">
                                ${escapeHtml(tag)}
                            </span>
                        `
                    )
                    .join('')}
            </div>

            <button
                class="insight-card__link"
                type="button"
                data-blog-slug="${escapeHtml(post.slug)}"
            >
                Read Insight
                <span aria-hidden="true">→</span>
            </button>
        </article>
    `;
}

export function createInsights(): string {
    const posts = getPublishedBlogPosts();

    const tags = [
        'All',
        ...new Set(
            posts.flatMap(post => post.tags)
        ),
    ];

    return `
        <section class="insights section" id="insights">
            <div class="container">

                <div class="insights__header">
                    <p class="section-heading__eyebrow">
                        Insights
                    </p>

                    <h2 class="insights__title">
                        Ideas across business,
                        <span>finance and technology.</span>
                    </h2>

                    <p class="insights__introduction">
                        Practical perspectives shaped by experience in financial
                        services, entrepreneurship and building digital solutions.
                    </p>
                </div>

                <div
                    class="insight-filters"
                    aria-label="Filter insights by tag"
                >
                    ${tags
                        .map(
                            (tag, index) => `
                                <button
                                    class="content-filter${index === 0 ? ' content-filter--active' : ''}"
                                    type="button"
                                    data-blog-filter="${escapeHtml(tag)}"
                                    aria-pressed="${index === 0 ? 'true' : 'false'}"
                                >
                                    ${escapeHtml(tag)}
                                </button>
                            `
                        )
                        .join('')}
                </div>

                <div
                    class="insights__grid"
                    id="insights-grid"
                    aria-live="polite"
                >
                    ${posts
                        .map(post => createInsightCard(post))
                        .join('')}
                </div>

            </div>
        </section>
    `;
}
