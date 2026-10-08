export function getCurrentRoute(): string {
    return window.location.hash;
}

export function initializeRouter(
    onRouteChange: (route: string) => void
): void {
    window.addEventListener('hashchange', () => {
        onRouteChange(getCurrentRoute());
    });
}

function getRouteSegment(
    route: string,
    prefix: string
): string | null {
    if (!route.startsWith(prefix)) {
        return null;
    }

    const segment = route
        .slice(prefix.length)
        .split('/')[0]
        ?.trim();

    return segment || null;
}

export function getProjectSlug(
    route: string
): string | null {
    return getRouteSegment(
        route,
        '#project/'
    );
}

export function getBlogSlug(
    route: string
): string | null {
    return getRouteSegment(
        route,
        '#blog/'
    );
}

export function isAdminRoute(
    route: string
): boolean {
    return route === '#admin' ||
        route.startsWith('#admin/');
}

export function getAdminSection(
    route: string
): string | null {
    if (route === '#admin') {
        return 'dashboard';
    }

    return getRouteSegment(
        route,
        '#admin/'
    );
}
