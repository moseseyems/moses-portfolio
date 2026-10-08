import {
    blogService,
    messageService,
    projectService,
} from '../../services/contentServices';

export function AdminDashboard(): string {
    const projects =
        projectService.getAll();

    const posts =
        blogService.getAll();

    const messages =
        messageService.getAll();

    const publishedPosts =
        posts.filter(
            post => post.published
        );

    const unreadMessages =
        messages.filter(
            message => message.status === 'unread'
        );

    return `
        <section class="admin-page">
            <div class="admin-page__heading">
                <div>
                    <p class="admin-eyebrow">
                        Overview
                    </p>

                    <h1>
                        Dashboard
                    </h1>

                    <p>
                        Manage the content displayed across
                        your personal portfolio.
                    </p>
                </div>
            </div>

            <div class="admin-stats">
                <article class="admin-stat-card">
                    <span>Projects</span>

                    <strong>
                        ${projects.length}
                    </strong>

                    <a href="#admin/projects">
                        Manage projects →
                    </a>
                </article>

                <article class="admin-stat-card">
                    <span>Published insights</span>

                    <strong>
                        ${publishedPosts.length}
                    </strong>

                    <a href="#admin/blog">
                        Manage insights →
                    </a>
                </article>

                <article class="admin-stat-card">
                    <span>Inbox messages</span>

                    <strong>
                        ${messages.length}
                    </strong>

                    <a href="#admin/messages">
                        Open inbox →
                    </a>
                </article>

                <article class="admin-stat-card">
                    <span>Unread</span>

                    <strong>
                        ${unreadMessages.length}
                    </strong>

                    <a href="#admin/messages">
                        Review messages →
                    </a>
                </article>
            </div>

            <div class="admin-dashboard__panels">
                <article class="admin-panel">
                    <div class="admin-panel__heading">
                        <div>
                            <p class="admin-eyebrow">
                                Content
                            </p>

                            <h2>
                                Portfolio status
                            </h2>
                        </div>
                    </div>

                    <div class="admin-status-list">
                        <div>
                            <span>
                                Total projects
                            </span>

                            <strong>
                                ${projects.length}
                            </strong>
                        </div>

                        <div>
                            <span>
                                Total insights
                            </span>

                            <strong>
                                ${posts.length}
                            </strong>
                        </div>

                        <div>
                            <span>
                                Published
                            </span>

                            <strong>
                                ${publishedPosts.length}
                            </strong>
                        </div>

                        <div>
                            <span>
                                Draft insights
                            </span>

                            <strong>
                                ${
                                    posts.length -
                                    publishedPosts.length
                                }
                            </strong>
                        </div>
                    </div>
                </article>

                <article class="admin-panel">
                    <div class="admin-panel__heading">
                        <div>
                            <p class="admin-eyebrow">
                                Inbox
                            </p>

                            <h2>
                                Message status
                            </h2>
                        </div>
                    </div>

                    <div class="admin-status-list">
                        <div>
                            <span>
                                Unread
                            </span>

                            <strong>
                                ${unreadMessages.length}
                            </strong>
                        </div>

                        <div>
                            <span>
                                Read
                            </span>

                            <strong>
                                ${
                                    messages.filter(
                                        message =>
                                            message.status === 'read'
                                    ).length
                                }
                            </strong>
                        </div>

                        <div>
                            <span>
                                Archived
                            </span>

                            <strong>
                                ${
                                    messages.filter(
                                        message =>
                                            message.status === 'archived'
                                    ).length
                                }
                            </strong>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    `;
}
