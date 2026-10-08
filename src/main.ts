import './styles/variables.css';
import './styles/main.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/admin.css';
import './styles/responsive.css';

import { PublicLayout } from './components/PublicLayout';
import { initializeMobileNavigation } from './components/MobileNavigation';
import { initializePublicInteractions } from './components/PublicInteractions';
import { Home } from './pages/public/Home';
import { ProjectDetails } from './pages/public/ProjectDetails';
import { BlogDetails } from './pages/public/BlogDetails';

import {
    getCurrentRoute,
    getProjectSlug,
    getBlogSlug,
    initializeRouter,
} from './router/router';

import {
    getProjectBySlug,
    getBlogPostBySlug,
    initializeContentStorage,
} from './services/contentServices';

const appElement =
    document.querySelector<HTMLDivElement>('#app');

if (!appElement) {
    throw new Error(
        'Application root element #app was not found.'
    );
}

const app: HTMLDivElement = appElement;

document.addEventListener('click', event => {
    const target = event.target;

    if (!(target instanceof Element)) {
        return;
    }

    const projectButton =
        target.closest<HTMLButtonElement>(
            '[data-project-slug]'
        );

    if (projectButton) {
        const projectSlug =
            projectButton.dataset.projectSlug;

        if (projectSlug) {
            window.location.hash =
                `project/${projectSlug}`;
        }

        return;
    }

    const blogButton =
        target.closest<HTMLButtonElement>(
            '[data-blog-slug]'
        );

    if (blogButton) {
        const blogSlug =
            blogButton.dataset.blogSlug;

        if (blogSlug) {
            window.location.hash =
                `blog/${blogSlug}`;
        }
    }
});

function initializePublicPage(): void {
    initializeMobileNavigation();
    initializePublicInteractions();
}

function scrollToRouteSection(route: string): void {
    if (
        route.startsWith('#project/') ||
        route.startsWith('#blog/')
    ) {
        return;
    }

    if (!route || route === '#home') {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        });

        return;
    }

    requestAnimationFrame(() => {
        const sectionId = route.slice(1);

        const section =
            document.getElementById(sectionId);

        section?.scrollIntoView({
            behavior: 'instant',
            block: 'start',
        });
    });
}

function renderPage(route: string): void {
    const projectSlug =
        getProjectSlug(route);

    if (projectSlug) {
        const project =
            getProjectBySlug(projectSlug);

        if (project) {
            app.innerHTML =
                PublicLayout(
                    ProjectDetails(project)
                );

            initializePublicPage();

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant',
            });

            return;
        }
    }

    const blogSlug =
        getBlogSlug(route);

    if (blogSlug) {
        const post =
            getBlogPostBySlug(blogSlug);

        if (post) {
            app.innerHTML =
                PublicLayout(
                    BlogDetails(post)
                );

            initializePublicPage();

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant',
            });

            return;
        }
    }

    app.innerHTML =
        PublicLayout(Home());

    initializePublicPage();
    scrollToRouteSection(route);
}

initializeContentStorage();

initializeRouter(route => {
    renderPage(route);
});

renderPage(getCurrentRoute());
