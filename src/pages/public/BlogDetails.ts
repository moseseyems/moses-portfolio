import type { BlogPost } from '../../models/BlogPost';
import { calculateReadingTime } from '../../utils/readingTime';

function formatPublishedDate(date: string): string {
    return new Intl.DateTimeFormat(
        'en-GB',
        {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }
    ).format(new Date(date));
}

function createParagraphs(content: string): string {
    return content
        .split(/\n\s*\n/)
        .map(
            paragraph => `
                <p>${paragraph.trim()}</p>
            `
        )
        .join('');
}

export function BlogDetails(post: BlogPost): string {
    return `
        <article class="blog-details">
            <header class="blog-details__hero">
                <div class="container blog-details__hero-inner">
                    <a
                        href="#insights"
                        class="blog-details__back"
                    >
                        ← Back to Insights
                    </a>

                    <div class="blog-details__meta">
                        <span>
                            ${formatPublishedDate(post.publishedAt)}
                        </span>

                        <span>
                            ${calculateReadingTime(post.content)} min read
                        </span>
                    </div>

                    <h1 class="blog-details__title">
                        ${post.title}
                    </h1>

                    <p class="blog-details__excerpt">
                        ${post.excerpt}
                    </p>

                    <div class="blog-details__tags">
                        ${post.tags
                            .map(
                                tag => `
                                    <span>${tag}</span>
                                `
                            )
                            .join('')}
                    </div>
                </div>
            </header>

            <section class="blog-details__content">
                <div class="container blog-details__body">
                    ${createParagraphs(post.content)}
                </div>
            </section>
        </article>
    `;
}
