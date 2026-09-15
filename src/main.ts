import './styles/variables.css';
import './styles/main.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/admin.css';
import './styles/responsive.css';
import { PublicLayout } from './components/PublicLayout';
import { initializeMobileNavigation } from './components/MobileNavigation';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Application root element #app was not found.');
}

const temporaryContent = `
  <section class="section section--light">
    <div class="container">
      <div class="section-heading">

        <p class="section-heading__eyebrow">
          Business • Finance • Technology
        </p>

        <h1 class="section-heading__title">
          Moses Eyemonu
        </h1>

        <p class="section-heading__description">
          Professional portfolio and content management system.
        </p>

      </div>
    </div>
  </section>
`;

app.innerHTML = PublicLayout(temporaryContent);
initializeMobileNavigation();
