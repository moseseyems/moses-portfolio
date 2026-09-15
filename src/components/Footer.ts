export function Footer(): string {
    const currentYear = new Date().getFullYear();

    return `
        <footer class="site-footer">
            <div class="container">

                <div class="site-footer__main">

                <div class="site-footer__brand">
                    <a href="#home" class="site-footer__name">
                    Moses Eyemonu
                    </a>

                    <p class="site-footer__tagline">
                    Business • Finance • Technology
                    </p>
                </div>

                <div class="site-footer__navigation">
                    <div>
                    <p class="site-footer__heading">Navigation</p>

                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#insights">Insights</a>
                    <a href="#contact">Contact</a>
                    </div>

                    <div>
                    <p class="site-footer__heading">Connect</p>

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    </div>
                </div>

                </div>

                <div class="site-footer__bottom">
                <p>
                    &copy; ${currentYear} Moses Eyemonu.
                    All rights reserved.
                </p>

                <p>Built with TypeScript.</p>
                </div>

            </div>
        </footer>
    `;
}