export function escapeHtml(
    value: string
): string {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

export function safeUrl(
    value: string
): string {
    try {
        const url = new URL(
            value,
            window.location.origin
        );

        if (
            url.protocol !== 'http:' &&
            url.protocol !== 'https:'
        ) {
            return '#';
        }

        return escapeHtml(value);
    } catch {
        return '#';
    }
}
