import './styles/variables.css';
import './styles/main.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/admin.css';
import './styles/responsive.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Application root element #app was not found.');
}

app.innerHTML = `
  <main>
    <section class="section section--light">
      <div class="container">

        <div class="section-heading">
          <p class="section-heading__eyebrow">
            Business • Finance • Technology
          </p>

          <h1 class="section-heading__title">
            Building ideas into practical solutions.
          </h1>

          <p class="section-heading__description">
            A professional identity combining business thinking,
            financial experience and growing technology capability.
          </p>
        </div>

        <a class="btn btn--primary" href="#">
          Primary Button
        </a>

        <a class="btn btn--secondary" href="#">
          Secondary Button
        </a>

      </div>
    </section>
  </main>
`;
