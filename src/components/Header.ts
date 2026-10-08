export function Header(): string {
    return `
        <header class="site-header">
            <div class="container site-header__inner">

                <a
                class="site-header__brand"
                href="#home"
                aria-label="Moses Eyemonu — Home"
                >
                Moses Eyemonu
                </a>

                <nav
                class="site-nav"
                aria-label="Primary navigation"
                >
                <a class="site-nav__link" href="#about">About</a>
                <a class="site-nav__link" href="#experience">Experience</a>
                <a class="site-nav__link" href="#ventures">Ventures</a>
                <a class="site-nav__link" href="#projects">Projects</a>
                <a class="site-nav__link" href="#insights">Insights</a>
                <a class="site-nav__link" href="#contact">Contact</a>
                </nav>

                <button
                class="mobile-menu-button"
                type="button"
                aria-label="Open navigation menu"
                aria-expanded="false"
                aria-controls="mobile-navigation"
                >
                <span></span>
                <span></span>
                <span></span>
                </button>

            </div>

            <nav
                class="mobile-nav"
                id="mobile-navigation"
                aria-label="Mobile navigation"
                hidden
            >
                <div class="container mobile-nav__inner">
                <a class="mobile-nav__link" href="#about">About</a>
                <a class="mobile-nav__link" href="#experience">Experience</a>
                <a class="mobile-nav__link" href="#ventures">Ventures</a>
                <a class="mobile-nav__link" href="#projects">Projects</a>
                <a class="mobile-nav__link" href="#insights">Insights</a>
                <a class="mobile-nav__link" href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    `;
}