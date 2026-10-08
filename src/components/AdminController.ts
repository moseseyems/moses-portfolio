import { authService } from '../services/AuthService';

export function initializeAdminLogin(
    onAuthenticated: () => void
): void {
    const form =
        document.querySelector<HTMLFormElement>(
            '#admin-login-form'
        );

    if (!form) {
        return;
    }

    const password =
        form.querySelector<HTMLInputElement>(
            '#admin-password'
        );

    const error =
        form.querySelector<HTMLElement>(
            '#admin-password-error'
        );

    const status =
        form.querySelector<HTMLElement>(
            '#admin-login-status'
        );

    if (
        !password ||
        !error ||
        !status
    ) {
        return;
    }

    const passwordField: HTMLInputElement =
        password;

    const errorElement: HTMLElement =
        error;

    const statusElement: HTMLElement =
        status;

    form.addEventListener(
        'submit',
        event => {
            event.preventDefault();

            errorElement.textContent = '';
            statusElement.textContent = '';

            const value =
                passwordField.value.trim();

            if (!value) {
                errorElement.textContent =
                    'Please enter the admin password.';

                passwordField.setAttribute(
                    'aria-invalid',
                    'true'
                );

                passwordField.focus();

                return;
            }

            const authenticated =
                authService.login(value);

            if (!authenticated) {
                errorElement.textContent =
                    'The password is incorrect.';

                passwordField.setAttribute(
                    'aria-invalid',
                    'true'
                );

                passwordField.select();

                return;
            }

            passwordField.setAttribute(
                'aria-invalid',
                'false'
            );

            statusElement.textContent =
                'Sign in successful.';

            onAuthenticated();
        }
    );
}

export function initializeAdminControls(): void {
    const logoutButton =
        document.querySelector<HTMLButtonElement>(
            '[data-admin-logout]'
        );

    logoutButton?.addEventListener(
        'click',
        () => {
            authService.logout();
            window.location.hash = 'admin';
        }
    );

    const menuButton =
        document.querySelector<HTMLButtonElement>(
            '[data-admin-menu]'
        );

    const sidebar =
        document.querySelector<HTMLElement>(
            '.admin-sidebar'
        );

    if (
        !menuButton ||
        !sidebar
    ) {
        return;
    }

    menuButton.addEventListener(
        'click',
        () => {
            const isOpen =
                sidebar.classList.toggle(
                    'admin-sidebar--open'
                );

            menuButton.setAttribute(
                'aria-expanded',
                String(isOpen)
            );
        }
    );

    sidebar
        .querySelectorAll<HTMLAnchorElement>(
            'a'
        )
        .forEach(link => {
            link.addEventListener(
                'click',
                () => {
                    sidebar.classList.remove(
                        'admin-sidebar--open'
                    );

                    menuButton.setAttribute(
                        'aria-expanded',
                        'false'
                    );
                }
            );
        });
}
