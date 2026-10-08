export function AdminLogin(): string {
    return `
        <main class="admin-login">
            <section class="admin-login__card">
                <a
                    class="admin-login__brand"
                    href="#home"
                >
                    Moses Eyemonu
                </a>

                <div class="admin-login__heading">
                    <p class="admin-eyebrow">
                        Private CMS
                    </p>

                    <h1>
                        Admin sign in
                    </h1>

                    <p>
                        Sign in to manage portfolio projects,
                        insights and contact messages.
                    </p>
                </div>

                <form
                    class="admin-login__form"
                    id="admin-login-form"
                    novalidate
                >
                    <div class="admin-login__field">
                        <label for="admin-password">
                            Password
                        </label>

                        <input
                            id="admin-password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required
                            aria-describedby="admin-password-error"
                        >

                        <span
                            class="admin-login__error"
                            id="admin-password-error"
                        ></span>
                    </div>

                    <button type="submit">
                        Sign in
                        <span aria-hidden="true">→</span>
                    </button>

                    <div
                        class="admin-login__status"
                        id="admin-login-status"
                        role="status"
                        aria-live="polite"
                    ></div>
                </form>

                <div class="admin-login__demo">
                    <strong>Coursework demo access</strong>

                    <p>
                        Password:
                        <code>PortfolioAdmin2026!</code>
                    </p>

                    <p>
                        This portfolio uses client-side authentication
                        to demonstrate the assignment's CMS login and
                        route-guard requirements.
                    </p>
                </div>

                <a
                    class="admin-login__back"
                    href="#home"
                >
                    ← Return to portfolio
                </a>
            </section>
        </main>
    `;
}
