import {
    blogService,
} from '../../services/contentServices';

import {
    escapeHtml,
} from '../../utils/html';

function formatDate(date: string): string {
    return new Intl.DateTimeFormat(
        'en-GB',
        {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }
    ).format(new Date(date));
}

export function AdminBlog(): string {
    const posts =
        blogService
            .getAll()
            .sort(
                (a, b) =>
                    new Date(b.updatedAt).getTime() -
                    new Date(a.updatedAt).getTime()
            );

    return `
        <section class="admin-page">
            <div class="admin-page__heading">
                <div>
                    <p class="admin-eyebrow">
                        Content
                    </p>

                    <h1>Insights</h1>

                    <p>
                        Create, edit and publish articles
                        for the public Insights feed.
                    </p>
                </div>

                <button
                    class="admin-primary-button"
                    type="button"
                    data-create-blog
                >
                    + New Insight
                </button>
            </div>

            <div class="admin-table-card">
                ${
                    posts.length
                        ? `
                            <div class="admin-table-wrapper">
                                <table class="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Article</th>
                                            <th>Tags</th>
                                            <th>Status</th>
                                            <th>Updated</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        ${posts
                                            .map(
                                                post => `
                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                ${escapeHtml(post.title)}
                                                            </strong>

                                                            <span>
                                                                ${escapeHtml(post.slug)}
                                                            </span>
                                                        </td>

                                                        <td>
                                                            ${escapeHtml(post.tags.join(', '))}
                                                        </td>

                                                        <td>
                                                            <span
                                                                class="admin-badge ${
                                                                    post.published
                                                                        ? 'admin-badge--published'
                                                                        : ''
                                                                }"
                                                            >
                                                                ${
                                                                    post.published
                                                                        ? 'Published'
                                                                        : 'Draft'
                                                                }
                                                            </span>
                                                        </td>

                                                        <td>
                                                            ${formatDate(post.updatedAt)}
                                                        </td>

                                                        <td>
                                                            <div class="admin-table__actions">
                                                                <button
                                                                    type="button"
                                                                    data-edit-blog="${post.id}"
                                                                >
                                                                    Edit
                                                                </button>

                                                                <button
                                                                    class="admin-table__delete"
                                                                    type="button"
                                                                    data-delete-blog="${post.id}"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                `
                                            )
                                            .join('')}
                                    </tbody>
                                </table>
                            </div>
                        `
                        : `
                            <div class="admin-empty-state">
                                <h2>No insights yet</h2>

                                <p>
                                    Create your first article.
                                </p>
                            </div>
                        `
                }
            </div>
        </section>
    `;
}
