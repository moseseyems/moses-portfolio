const AUTH_STORAGE_KEY =
    'moses-portfolio-admin-session';

const DEMO_PASSWORD =
    'PortfolioAdmin2026!';

export class AuthService {
    isAuthenticated(): boolean {
        return sessionStorage.getItem(
            AUTH_STORAGE_KEY
        ) === 'authenticated';
    }

    login(password: string): boolean {
        if (password !== DEMO_PASSWORD) {
            return false;
        }

        sessionStorage.setItem(
            AUTH_STORAGE_KEY,
            'authenticated'
        );

        return true;
    }

    logout(): void {
        sessionStorage.removeItem(
            AUTH_STORAGE_KEY
        );
    }
}

export const authService =
    new AuthService();
