import { createFeaturedProjects } from '../../components/FeaturedProjects';
import { createInsights } from '../../components/Insights';
import { createContactForm } from '../../components/ContactForm';

export function Home(): string {
    return `
        <section class="hero" id="home">
            <div class="container hero__container">

                <div class="hero__content">

                <p class="hero__eyebrow">
                    Business • Finance • Technology
                </p>

                <h1 class="hero__title">
                    Building businesses.
                    <span>Creating solutions.</span>
                </h1>

                <p class="hero__introduction">
                    I'm Moses Eyemonu — a business-focused professional working
                    across finance, entrepreneurship and technology, with a
                    practical approach to turning ideas into structured,
                    sustainable solutions.
                </p>

                <div class="hero__actions">
                    <a class="btn btn--primary" href="#ventures">
                    Explore My Work
                    </a>

                    <a class="btn btn--secondary" href="#contact">
                    Get in Touch
                    </a>
                </div>

                <div class="hero__areas" aria-label="Professional areas">
                    <div class="hero__area">
                    <span class="hero__area-number">01</span>
                    <span>Business</span>
                    </div>

                    <div class="hero__area">
                    <span class="hero__area-number">02</span>
                    <span>Finance</span>
                    </div>

                    <div class="hero__area">
                    <span class="hero__area-number">03</span>
                    <span>Technology</span>
                    </div>
                </div>

                </div>

                <div class="hero__visual">
                <div class="hero__image-frame">
                    <img
                    class="hero__image"
                    src="${import.meta.env.BASE_URL}images/moses-eyemonu.png"
                    alt="Moses Eyemonu"
                    />
                </div>

                <div class="hero__visual-card">
                    <span class="hero__visual-card-label">
                    Professional Focus
                    </span>

                    <strong>
                    Building value through business, finance & technology.
                    </strong>
                </div>
                </div>

            </div>
        </section>

        <section class="about section section--white" id="about">
            <div class="container about__container">

                <div class="about__heading">
                <p class="section-heading__eyebrow">
                    Professional Profile
                </p>

                <h2 class="about__title">
                    Business thinking backed by
                    <span>financial and technical capability.</span>
                </h2>
                </div>

                <div class="about__content">

                <div class="about__story">
                    <p class="about__lead">
                    I approach opportunities from a business perspective first:
                    understanding the problem, creating structure and building
                    practical solutions that can deliver long-term value.
                    </p>

                    <p>
                    My professional experience spans financial services,
                    business operations and entrepreneurship, while my continued
                    development in technology gives me another tool for turning
                    ideas into working products and systems.
                    </p>

                    <p>
                    This combination shapes how I work — commercially aware,
                    financially informed and increasingly technology-enabled.
                    </p>
                </div>

                <div class="about__pillars">

                    <article class="about-pillar">
                    <span class="about-pillar__number">01</span>

                    <h3>Business</h3>

                    <p>
                        Entrepreneurship, business development and building
                        structured services around real customer needs.
                    </p>
                    </article>

                    <article class="about-pillar">
                    <span class="about-pillar__number">02</span>

                    <h3>Finance</h3>

                    <p>
                        Professional financial-services experience supported by
                        postgraduate study in international finance.
                    </p>
                    </article>

                    <article class="about-pillar">
                    <span class="about-pillar__number">03</span>

                    <h3>Technology</h3>

                    <p>
                        Developing practical software and digital skills to build
                        products, improve processes and support business growth.
                    </p>
                    </article>

                </div>

                </div>

            </div>
        </section>

        <section
            class="experience section"
            id="experience"
            aria-labelledby="experience-title"
            >
            <div class="container">

                <div class="experience__header">
                <div>
                    <p class="section-heading__eyebrow">
                    Professional Experience
                    </p>

                    <h2 class="experience__title" id="experience-title">
                    Experience across finance,
                    <span>operations and project delivery.</span>
                    </h2>
                </div>

                <p class="experience__introduction">
                    My professional journey has developed across financial services,
                    project management, administration and people-focused environments,
                    building a practical understanding of customers, operations and
                    organisational responsibility.
                </p>
                </div>

                <div class="experience__list">

                <article class="experience-item experience-item--featured">

                    <div class="experience-item__meta">
                    <span class="experience-item__number">01</span>
                    <span class="experience-item__period">2025 — Present</span>
                    </div>

                    <div class="experience-item__main">

                    <div class="experience-item__heading">
                        <div>
                        <p class="experience-item__company">
                            Capquest Debt Recovery Ltd
                        </p>

                        <h3>Financial Assist Associate</h3>
                        </div>

                        <span class="experience-item__sector">
                        Financial Services
                        </span>
                    </div>

                    <p class="experience-item__description">
                        Working within a specialist vulnerable customer environment,
                        reviewing higher-risk customer accounts and determining
                        appropriate next steps based on individual circumstances.
                        Responsibilities include account review, customer communication
                        by telephone and written correspondence, and ensuring appropriate
                        support and actions are applied.
                    </p>

                    <p class="experience-item__development">
                        Since October 2025, my responsibilities have expanded within the
                        High Risk Vulnerable Care team. I have also been progressively
                        integrated into the support function for new colleagues
                        during training, alongside varied customer, administrative and
                        team-support responsibilities.
                    </p>

                    <div
                        class="experience-item__skills"
                        aria-label="Key areas of responsibility"
                    >
                        <span>Vulnerable Customer Support</span>
                        <span>Account Review</span>
                        <span>Customer Communication</span>
                        <span>Colleague Support</span>
                    </div>

                    </div>

                </article>

                <article class="experience-item">

                    <div class="experience-item__meta">
                    <span class="experience-item__number">02</span>
                    <span class="experience-item__period">2021 — 2023</span>
                    </div>

                    <div class="experience-item__main">

                    <div class="experience-item__heading">
                        <div>
                        <p class="experience-item__company">
                            Viral Computers Inc.
                        </p>

                        <h3>Project Manager</h3>
                        </div>

                        <span class="experience-item__sector">
                        Technology & Operations
                        </span>
                    </div>

                    <p class="experience-item__description">
                        Coordinated projects and operational activities within a
                        technology-focused business environment, helping organise
                        priorities, people and resources around project objectives
                        and day-to-day delivery.
                    </p>

                    <div
                        class="experience-item__skills"
                        aria-label="Key areas of experience"
                    >
                        <span>Project Coordination</span>
                        <span>Operations</span>
                        <span>Planning</span>
                    </div>

                    </div>

                </article>

                </div>

                <div class="experience__earlier">

                <div class="experience__earlier-heading">
                    <span>Earlier Experience</span>
                </div>

                <div class="earlier-role">
                    <span class="earlier-role__period">2019 — 2021</span>

                    <div>
                    <h3>Teaching Assistant</h3>
                    <p>City Light International School</p>
                    </div>

                    <span class="earlier-role__sector">Education</span>
                </div>

                <div class="earlier-role">
                    <span class="earlier-role__period">2018 — 2019</span>

                    <div>
                    <h3>Office Administrator</h3>
                    <p>Delta State Tourism Board</p>
                    </div>

                    <span class="earlier-role__sector">Administration</span>
                </div>

                </div>

            </div>
        </section>

        <section
            class="ventures section section--white"
            id="ventures"
            aria-labelledby="ventures-title"
            >
            <div class="container">

                <div class="ventures__header">

                <div>
                    <p class="section-heading__eyebrow">
                    Ventures & Entrepreneurship
                    </p>

                    <h2 class="ventures__title" id="ventures-title">
                    Turning business ideas
                    <span>into operating businesses.</span>
                    </h2>
                </div>

                <div class="ventures__introduction">
                    <p>
                    Entrepreneurship is a practical part of my professional work —
                    identifying opportunities, developing services and creating
                    systems that turn commercial ideas into functioning businesses.
                    </p>

                    <p>
                    My focus extends beyond launching an idea to continuously
                    improving how the business operates, serves customers and grows.
                    </p>
                </div>

                </div>

                <article class="venture-card">

                <div class="venture-card__top">

                    <div class="venture-card__identity">

                    <div class="venture-card__number">
                        01
                    </div>

                    <div>
                        <p class="venture-card__type">
                        Operating Company
                        </p>

                        <h3>EYMONK GROUP LTD</h3>

                        <p class="venture-card__role">
                        Founder & Director
                        </p>
                    </div>

                    </div>

                    <span class="venture-card__status">
                    Active
                    </span>

                </div>

                <div class="venture-card__body">

                    <div class="venture-card__statement">

                    <p class="venture-card__categories">
                        Print • Digital Solutions • Marketing
                    </p>

                    <h4>
                        Helping businesses strengthen how they
                        <span>present, operate and grow.</span>
                    </h4>

                    </div>

                    <div class="venture-card__details">

                    <p>
                        EYMONK GROUP LTD is a UK business providing integrated
                        services across print, digital solutions and marketing,
                        supporting businesses with both their physical and
                        digital presence.
                    </p>

                    <p>
                        As Founder & Director, my role spans business strategy,
                        service development, operations, digital systems and the
                        continued development of the company's growth model.
                    </p>

                    <div
                        class="venture-card__capabilities"
                        aria-label="Areas of involvement"
                    >
                        <span>Business Strategy</span>
                        <span>Service Development</span>
                        <span>Operations</span>
                        <span>Digital Systems</span>
                        <span>Growth</span>
                    </div>

                    </div>

                </div>

                <div class="venture-card__footer">

                    <div class="venture-card__principle">
                    <span>My approach</span>

                    <p>
                        Identify the need. Build the structure.
                        Deliver the service. Improve continuously.
                    </p>
                    </div>

                </div>

                </article>

            </div>
        </section>

        ${createFeaturedProjects()}

        ${createInsights()}
        
        <section class="contact section" id="contact">
            <div class="container">

                <div class="contact__header">
                    <div class="contact__content">
                        <p class="section-heading__eyebrow">
                            Get in Touch
                        </p>

                        <h2 class="contact__title">
                            Let's connect and
                            <span>create something valuable.</span>
                        </h2>

                        <p class="contact__introduction">
                            Whether it's a business opportunity, professional
                            collaboration or a conversation around finance,
                            entrepreneurship and technology, I'm open to connecting.
                        </p>
                    </div>

                    <div class="contact__action">
                        <span class="contact__label">
                            Direct contact
                        </span>

                        <a
                            class="contact__email"
                            href="mailto:moses@eymonkgroup.co.uk"
                        >
                            moses@eymonkgroup.co.uk
                            <span aria-hidden="true">↗</span>
                        </a>

                        <p class="contact__note">
                            Based in Scotland, United Kingdom.
                        </p>
                    </div>
                </div>

                <div class="contact__form-area">
                    <div>
                        <p class="contact__form-eyebrow">
                            Send a message
                        </p>

                        <h3 class="contact__form-title">
                            Tell me what you'd like to discuss.
                        </h3>

                        <p class="contact__form-introduction">
                            Complete the form and your message will be
                            added securely to the portfolio message inbox.
                        </p>
                    </div>

                    ${createContactForm()}
                </div>

            </div>
        </section>

    `;
}