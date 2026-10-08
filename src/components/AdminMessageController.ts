import {
    messageService,
} from '../services/contentServices';

type RerenderAdmin =
    (route: string) => void;

export function initializeAdminMessages(
    rerenderAdmin: RerenderAdmin
): void {
    document
        .querySelectorAll<HTMLButtonElement>(
            '[data-view-message]'
        )
        .forEach(button => {
            button.addEventListener(
                'click',
                () => {
                    const id =
                        button.dataset.viewMessage;

                    if (!id) {
                        return;
                    }

                    const message =
                        messageService.getById(id);

                    if (!message) {
                        return;
                    }

                    if (
                        message.status === 'unread'
                    ) {
                        messageService.update(
                            id,
                            {
                                status: 'read',
                            }
                        );
                    }

                    window.location.hash =
                        `admin/messages/${id}`;
                }
            );
        });

    document
        .querySelectorAll<HTMLButtonElement>(
            '[data-read-message]'
        )
        .forEach(button => {
            button.addEventListener(
                'click',
                () => {
                    const id =
                        button.dataset.readMessage;

                    if (!id) {
                        return;
                    }

                    messageService.update(
                        id,
                        {
                            status: 'read',
                        }
                    );

                    rerenderAdmin(
                        window.location.hash
                    );
                }
            );
        });

    document
        .querySelectorAll<HTMLButtonElement>(
            '[data-unread-message]'
        )
        .forEach(button => {
            button.addEventListener(
                'click',
                () => {
                    const id =
                        button.dataset.unreadMessage;

                    if (!id) {
                        return;
                    }

                    messageService.update(
                        id,
                        {
                            status: 'unread',
                        }
                    );

                    rerenderAdmin(
                        window.location.hash
                    );
                }
            );
        });

    document
        .querySelectorAll<HTMLButtonElement>(
            '[data-archive-message]'
        )
        .forEach(button => {
            button.addEventListener(
                'click',
                () => {
                    const id =
                        button.dataset.archiveMessage;

                    if (!id) {
                        return;
                    }

                    messageService.update(
                        id,
                        {
                            status: 'archived',
                        }
                    );

                    window.location.hash =
                        'admin/messages';

                    rerenderAdmin(
                        '#admin/messages'
                    );
                }
            );
        });

    document
        .querySelectorAll<HTMLButtonElement>(
            '[data-restore-message]'
        )
        .forEach(button => {
            button.addEventListener(
                'click',
                () => {
                    const id =
                        button.dataset.restoreMessage;

                    if (!id) {
                        return;
                    }

                    messageService.update(
                        id,
                        {
                            status: 'read',
                        }
                    );

                    window.location.hash =
                        'admin/messages';

                    rerenderAdmin(
                        '#admin/messages'
                    );
                }
            );
        });

    document
        .querySelectorAll<HTMLButtonElement>(
            '[data-delete-message]'
        )
        .forEach(button => {
            button.addEventListener(
                'click',
                () => {
                    const id =
                        button.dataset.deleteMessage;

                    if (!id) {
                        return;
                    }

                    const message =
                        messageService.getById(id);

                    if (!message) {
                        return;
                    }

                    const confirmed =
                        window.confirm(
                            `Delete the message from ${message.name}? This action cannot be undone.`
                        );

                    if (!confirmed) {
                        return;
                    }

                    messageService.delete(id);

                    window.location.hash =
                        'admin/messages';

                    rerenderAdmin(
                        '#admin/messages'
                    );
                }
            );
        });
}
