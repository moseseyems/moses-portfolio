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

    menuButton.addEventListener('click', () => {
        const isOpen =
        menuButton.getAttribute('aria-expanded') === 'true';

        menuButton.setAttribute(
        'aria-expanded',
        String(!isOpen)
        );

        menuButton.setAttribute(
        'aria-label',
        isOpen
            ? 'Open navigation menu'
            : 'Close navigation menu'
        );

        mobileNavigation.hidden = isOpen;
    });

    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            mobileNavigation.hidden = true;

            menuButton.setAttribute(
                'aria-expanded',
                'false'
            );

            menuButton.setAttribute(
                'aria-label',
                'Open navigation menu'
            );
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            mobileNavigation.hidden = true;

            menuButton.setAttribute(
                'aria-expanded',
                'false'
            );

            menuButton.setAttribute(
                'aria-label',
                'Open navigation menu'
            );
        }
    });
}