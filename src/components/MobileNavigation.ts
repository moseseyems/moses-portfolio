export function initializeMobileNavigation(): void {
    const menuButton =
        document.querySelector<HTMLButtonElement>('.mobile-menu-button');

    const mobileNavigation =
        document.querySelector<HTMLElement>('#mobile-navigation');

    const mobileLinks =
        document.querySelectorAll<HTMLAnchorElement>('.mobile-nav__link');

    if (!menuButton || !mobileNavigation) {
        return;
    }

    const closeMenu = (returnFocus = false): void => {
        mobileNavigation.hidden = true;

        menuButton.setAttribute(
            'aria-expanded',
            'false'
        );

        menuButton.setAttribute(
            'aria-label',
            'Open navigation menu'
        );

        if (returnFocus) {
            menuButton.focus();
        }
    };

    menuButton.addEventListener('click', () => {
        const isOpen =
            menuButton.getAttribute('aria-expanded') === 'true';

        if (isOpen) {
            closeMenu();
            return;
        }

        mobileNavigation.hidden = false;

        menuButton.setAttribute(
            'aria-expanded',
            'true'
        );

        menuButton.setAttribute(
            'aria-label',
            'Close navigation menu'
        );
    });

    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    document.addEventListener('keydown', (event) => {
        if (
            event.key === 'Escape' &&
            menuButton.getAttribute('aria-expanded') === 'true'
        ) {
            closeMenu(true);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });
}
