import './styles/variables.css';
import './styles/main.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/admin.css';
import './styles/responsive.css';
import { PublicLayout } from './components/PublicLayout';
import { initializeMobileNavigation } from './components/MobileNavigation';
import { Home } from './pages/public/Home';
import {
    getCurrentRoute,
    getProjectSlug,
    initializeRouter,
} from './router/router';
import { getProjectBySlug } from './data/projects';
import { ProjectDetails } from './pages/public/ProjectDetails';
import { initializeContentStorage } from './services/contentServices';

const appElement = document.querySelector<HTMLDivElement>('#app');

if (!appElement) {
    throw new Error('Application root element #app was not found.');
}

const app: HTMLDivElement = appElement;

document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    const projectButton = target.closest<HTMLButtonElement>(
        '[data-project-slug]'
    );

    if (!projectButton) {
        return;
    }

    const projectSlug = projectButton.dataset.projectSlug;

    if (!projectSlug) {
        return;
    }

    window.location.hash = `project/${projectSlug}`;
});

function renderPage(route: string): void {
    const projectSlug = getProjectSlug(route);

    if (projectSlug) {
      const project = getProjectBySlug(projectSlug);

      if (project) {
        app.innerHTML = PublicLayout(ProjectDetails(project));
        initializeMobileNavigation();

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        });

        return;
      }
    }

    app.innerHTML = PublicLayout(Home());
    initializeMobileNavigation();
}

initializeRouter((route) => {
    renderPage(route);
});

initializeContentStorage();

renderPage(getCurrentRoute());


