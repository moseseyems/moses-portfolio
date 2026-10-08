export function AdminLayout(
    content: string,
    activeSection: string
): string {
    const navigationItems = [
        {
            label: 'Dashboard',
            route: '#admin',
            section: 'dashboard',
        },
        {
            label: 'Projects',
            route: '#admin/projects',
            section: 'projects',
        },
        {
            label: 'Insights',
            route: '#admin/blog',
            section: 'blog',
        },
        {
            label: 'Inbox',
            route: '#admin/messages',
            section: 'messages',
        },
    ];

    return `
        <div class="admin-shell">
            <aside class="admin-sidebar">
                <div>
                    <a
                        href="#admin"
                        class="admin-sidebar__brand"
                    >
                        Moses Eyemonu
                    </a>

                    <p class="admin-sidebar__label">
                        Portfolio CMS
                    </p>
                </div>

                <nav
                    class="admin-navigation"
                    aria-label="CMS navigation"
                >
                    ${navigationItems
                        .map(
                            item => `
                                <a
                                    href="${item.route}"
                                    class="admin-navigation__link${
                                        activeSection === item.section
                                            ? ' admin-navigation__link--active'
                                            : ''
                                    }"
                                >
                                    ${item.label}
                                </a>
                            `
                        )
                        .join('')}
                </nav>

                <div class="admin-sidebar__footer">
                    <a href="#home">
                        View public portfolio
                    </a>

                    <button
                        type="button"
                        data-admin-logout
                    >
                        Sign out
                    </button>
                </div>
            </aside>

            <div class="admin-workspace">
                <header class="admin-topbar">
                    <div>
                        <p class="admin-topbar__eyebrow">
                            Content Management System
                        </p>

                        <p class="admin-topbar__user">
                            Administrator
                        </p>
                    </div>

                    <button
                        class="admin-mobile-menu"
                        type="button"
                        data-admin-menu
                        aria-label="Toggle CMS navigation"
                        aria-expanded="false"
                    >
                        Menu
                    </button>
                </header>

                <main class="admin-main">
                    ${content}
                </main>
            </div>
        </div>
    `;
}
