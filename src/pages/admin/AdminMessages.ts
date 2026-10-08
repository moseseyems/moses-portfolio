import type {
    ContactMessage,
} from '../../models/ContactMessage';

import {
    messageService,
} from '../../services/contentServices';

function formatMessageDate(
    value: string
): string {
    return new Intl.DateTimeFormat(
        'en-GB',
        {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }
    ).format(new Date(value));
}

function statusLabel(
    message: ContactMessage
): string {
    switch (message.status) {
        case 'unread':
            return 'Unread';

        case 'read':
            return 'Read';

        case 'archived':
            return 'Archived';
    }
}

function messageRow(
    message: ContactMessage
): string {
    return `
        <tr
            class="${
                message.status === 'unread'
                    ? 'admin-message-row--unread'
                    : ''
            }"
        >
            <td>
                <strong>
                    ${message.name}
                </strong>

                <span>
                    ${message.email}
                </span>
            </td>

            <td>
                <strong>
                    ${message.subject}
                </strong>

                <span>
                    ${message.message.length > 70
                        ? `${message.message.slice(0, 70)}…`
                        : message.message
                    }
                </span>
            </td>

            <td>
                <span
                    class="admin-badge admin-badge--${message.status}"
                >
                    ${statusLabel(message)}
                </span>
            </td>

            <td>
                ${formatMessageDate(
                    message.createdAt
                )}
            </td>

            <td>
                <div class="admin-table__actions">
                    <button
                        type="button"
                        data-view-message="${message.id}"
                    >
                        View
                    </button>

                    ${
                        message.status === 'unread'
                            ? `
                                <button
                                    type="button"
                                    data-read-message="${message.id}"
                                >
                                    Mark read
                                </button>
                            `
                            : message.status === 'read'
                                ? `
                                    <button
                                        type="button"
                                        data-unread-message="${message.id}"
                                    >
                                        Mark unread
                                    </button>
                                `
                                : ''
                    }

                    ${
                        message.status !== 'archived'
                            ? `
                                <button
                                    type="button"
                                    data-archive-message="${message.id}"
                                >
                                    Archive
                                </button>
                            `
                            : `
                                <button
                                    type="button"
                                    data-restore-message="${message.id}"
                                >
                                    Restore
                                </button>
                            `
                    }

                    <button
                        class="admin-table__delete"
                        type="button"
                        data-delete-message="${message.id}"
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    `;
}

export function AdminMessages(): string {
    const messages =
        messageService
            .getAll()
            .sort(
                (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
            );

    const activeMessages =
        messages.filter(
            message =>
                message.status !== 'archived'
        );

    const archivedMessages =
        messages.filter(
            message =>
                message.status === 'archived'
        );

    const unreadCount =
        activeMessages.filter(
            message =>
                message.status === 'unread'
        ).length;

    return `
        <section class="admin-page">
            <div class="admin-page__heading">
                <div>
                    <p class="admin-eyebrow">
                        Communication
                    </p>

                    <h1>Message Inbox</h1>

                    <p>
                        Review and manage enquiries
                        submitted through the public
                        portfolio contact form.
                    </p>
                </div>

                <div class="admin-inbox-summary">
                    <strong>
                        ${unreadCount}
                    </strong>

                    <span>
                        unread
                    </span>
                </div>
            </div>

            <div class="admin-inbox-section">
                <div class="admin-inbox-section__heading">
                    <h2>Inbox</h2>

                    <span>
                        ${activeMessages.length}
                        ${
                            activeMessages.length === 1
                                ? 'message'
                                : 'messages'
                        }
                    </span>
                </div>

                <div class="admin-table-card">
                    ${
                        activeMessages.length
                            ? `
                                <div class="admin-table-wrapper">
                                    <table class="admin-table admin-message-table">
                                        <thead>
                                            <tr>
                                                <th>Sender</th>
                                                <th>Message</th>
                                                <th>Status</th>
                                                <th>Received</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            ${activeMessages
                                                .map(messageRow)
                                                .join('')}
                                        </tbody>
                                    </table>
                                </div>
                            `
                            : `
                                <div class="admin-empty-state">
                                    <h2>Your inbox is clear</h2>

                                    <p>
                                        New contact form submissions
                                        will appear here.
                                    </p>
                                </div>
                            `
                    }
                </div>
            </div>

            <div class="admin-inbox-section">
                <div class="admin-inbox-section__heading">
                    <h2>Archived</h2>

                    <span>
                        ${archivedMessages.length}
                    </span>
                </div>

                <div class="admin-table-card">
                    ${
                        archivedMessages.length
                            ? `
                                <div class="admin-table-wrapper">
                                    <table class="admin-table admin-message-table">
                                        <thead>
                                            <tr>
                                                <th>Sender</th>
                                                <th>Message</th>
                                                <th>Status</th>
                                                <th>Received</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            ${archivedMessages
                                                .map(messageRow)
                                                .join('')}
                                        </tbody>
                                    </table>
                                </div>
                            `
                            : `
                                <div class="admin-empty-state admin-empty-state--compact">
                                    <p>
                                        No archived messages.
                                    </p>
                                </div>
                            `
                    }
                </div>
            </div>
        </section>
    `;
}

export function AdminMessageDetails(
    message: ContactMessage
): string {
    return `
        <section class="admin-page">
            <div class="admin-message-detail__top">
                <a
                    class="admin-back-link"
                    href="#admin/messages"
                >
                    ← Back to Inbox
                </a>

                <span
                    class="admin-badge admin-badge--${message.status}"
                >
                    ${statusLabel(message)}
                </span>
            </div>

            <article class="admin-message-detail">
                <header class="admin-message-detail__header">
                    <p class="admin-eyebrow">
                        Message
                    </p>

                    <h1>
                        ${message.subject}
                    </h1>

                    <div class="admin-message-detail__meta">
                        <div>
                            <span>From</span>

                            <strong>
                                ${message.name}
                            </strong>

                            <a
                                href="mailto:${message.email}"
                            >
                                ${message.email}
                            </a>
                        </div>

                        <div>
                            <span>Received</span>

                            <strong>
                                ${formatMessageDate(
                                    message.createdAt
                                )}
                            </strong>
                        </div>
                    </div>
                </header>

                <div class="admin-message-detail__body">
                    ${message.message
                        .split(/\n+/)
                        .filter(Boolean)
                        .map(
                            paragraph =>
                                `<p>${paragraph}</p>`
                        )
                        .join('')}
                </div>

                <div class="admin-message-detail__actions">
                    ${
                        message.status === 'unread'
                            ? `
                                <button
                                    class="admin-secondary-button"
                                    type="button"
                                    data-read-message="${message.id}"
                                >
                                    Mark as read
                                </button>
                            `
                            : message.status === 'read'
                                ? `
                                    <button
                                        class="admin-secondary-button"
                                        type="button"
                                        data-unread-message="${message.id}"
                                    >
                                        Mark as unread
                                    </button>
                                `
                                : ''
                    }

                    ${
                        message.status !== 'archived'
                            ? `
                                <button
                                    class="admin-secondary-button"
                                    type="button"
                                    data-archive-message="${message.id}"
                                >
                                    Archive
                                </button>
                            `
                            : `
                                <button
                                    class="admin-secondary-button"
                                    type="button"
                                    data-restore-message="${message.id}"
                                >
                                    Restore to Inbox
                                </button>
                            `
                    }

                    <button
                        class="admin-danger-button"
                        type="button"
                        data-delete-message="${message.id}"
                    >
                        Delete Message
                    </button>
                </div>
            </article>
        </section>
    `;
}
