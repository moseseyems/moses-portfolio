import { Footer } from './Footer';
import { Header } from './Header';

export function PublicLayout(content: string): string {
    return `
        ${Header()}

        <main id="main-content">
        ${content}
        </main>

        ${Footer()}
    `;
}