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

export function getProjectSlug(route: string): string | null {
    const projectPrefix = '#project/';

    if (!route.startsWith(projectPrefix)) {
        return null;
    }

    return route.replace(projectPrefix, '');
}