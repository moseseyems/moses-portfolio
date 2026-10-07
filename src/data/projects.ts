import type { Project } from '../models/Project';

export const projects: Project[] = [
    {
        id: 'project-001',

        title: 'EYMONK Website Audit System',

        slug: 'eymonk-website-audit-system',

        shortDescription:
        'A structured website auditing and reporting platform for managing professional client audits.',

        description:
        'A business-focused web application developed to support structured website audits, including audit workspaces, scoring, findings, evidence management and professional report generation.',

        category: 'Fullstack',

        technologies: [
        'TypeScript',
        'Next.js',
        'Fastify',
        'Prisma'
        ],

        image: `${import.meta.env.BASE_URL}images/projects/eymonk-audit-system.webp`,

        featured: true,

        caseStudy: {
            overview:
                'A structured website auditing and reporting platform developed to support professional website audits from initial assessment through findings, evidence, scoring and client reporting.',

            problem:
                'Professional website audits can involve large numbers of checks, findings, evidence and recommendations. Managing this information manually can make the process difficult to standardise, track and convert into consistent client reports.',

            solution:
                'The system brings the audit workflow into one structured application, allowing websites and audits to be managed through dedicated workspaces while connecting audit checks, findings, evidence, scoring and reporting.',

            role:
                'I developed the system as a practical business and technical project for EYMONK GROUP LTD, working across product planning, application structure, frontend development, backend integration, data modelling, testing and deployment.',

            keyFeatures: [
                'Client and website management',
                'Structured audit workspaces',
                'Audit pillars and master checks',
                'Check status and result management',
                'Findings management',
                'Recommendations management',
                'Audit and pillar scoring',
                'Report workspace and report generation',
                'Draft and finalised report management',
                'Production audit initialization',
            ],

            challenges: [
                'Designing a data structure capable of connecting audits, pillars, checks, findings and evidence.',
                'Keeping frontend and backend behaviour consistent as the system expanded across multiple workspaces.',
                'Ensuring newly created production audits are initialized with the required pillars and check results.',
                'Testing the complete workflow from audit creation through scoring and reporting.',
            ],

            outcomes: [
                'Built a working full-stack audit management platform around a structured professional audit workflow.',
                'Created reusable workflows for managing checks, findings, recommendations, scoring and reports.',
                'Deployed the application to a production environment for continued testing and development.',
                'Strengthened practical experience with TypeScript, Next.js, Fastify, Prisma and full-stack application architecture.',
            ],

            screenshots: [
                `${import.meta.env.BASE_URL}images/projects/eymonk-audit/dashboard.png`,
                `${import.meta.env.BASE_URL}images/projects/eymonk-audit/audit-workspace.png`,
                `${import.meta.env.BASE_URL}images/projects/eymonk-audit/findings.png`,
                `${import.meta.env.BASE_URL}images/projects/eymonk-audit/recommendation.png`,
                `${import.meta.env.BASE_URL}images/projects/eymonk-audit/report-workspace.png`,
            ],
        },

        year: 2026
    },

    {
        id: 'project-002',

        title: 'Beauty Brand E-commerce',

        slug: 'beauty-brand-ecommerce',

        shortDescription:
        'A responsive beauty and hair e-commerce experience built with TypeScript.',

        description:
        'A frontend e-commerce project featuring product categories, interactive filtering, persistent cart functionality, quantity controls and responsive layouts.',

        category: 'Frontend',

        technologies: [
        'TypeScript',
        'HTML',
        'CSS'
        ],

        image: `${import.meta.env.BASE_URL}images/projects/beauty-brand.webp`,

        githubUrl:
        'https://github.com/moseseyems/beautyBrand',
        liveUrl: 'https://moseseyems.github.io/beautyBrand/',
        featured: true,

        caseStudy: {
            overview:
                'A responsive front-end e-commerce experience created for a premium hair and beauty brand, designed to present products clearly and provide an intuitive shopping experience across desktop and mobile devices.',

            problem:
                'The project required turning a beauty retail concept into a functional e-commerce interface while organising multiple product categories, maintaining a premium visual identity and ensuring the shopping experience remained usable on smaller screens.',

            solution:
                'I developed a TypeScript-based single-page storefront with structured product data, category filtering, product presentation and an interactive shopping cart. The interface was designed around a full-screen visual hero followed by product discovery and collection sections.',

            role:
                'I developed the front-end experience from planning through implementation, working on the page structure, TypeScript functionality, responsive styling, product organisation, category filtering and shopping-cart interactions.',

            keyFeatures: [
                'Full-screen visual hero section',
                'Shop by Category navigation',
                'Product collection display',
                'Category-based product filtering',
                'Interactive slide-out shopping cart',
                'Cart quantity controls',
                'Persistent cart data',
                'Responsive desktop and mobile layouts',
            ],

            challenges: [
                'Structuring product and category data so the interface could update dynamically.',
                'Managing shopping-cart state and preserving cart contents between browser sessions.',
                'Creating a responsive product experience that remained practical on smaller screens.',
                'Combining visual presentation with interactive TypeScript functionality without using a front-end framework.',
            ],

            outcomes: [
                'Built a complete responsive front-end e-commerce experience using TypeScript, HTML and CSS.',
                'Implemented reusable product filtering and shopping-cart behaviour.',
                'Applied browser storage to maintain cart state across sessions.',
                'Strengthened practical understanding of DOM manipulation, application state, event handling and responsive interface development.',
            ],

            screenshots: [
                `${import.meta.env.BASE_URL}images/projects/beauty-brand/homepage.png`,
                `${import.meta.env.BASE_URL}images/projects/beauty-brand/products.png`,
                `${import.meta.env.BASE_URL}images/projects/beauty-brand/cart.png`,
            ],
        },

        year: 2026
    },

    {
        id: 'project-003',

        title: 'Personal Blog CRUD Application',

        slug: 'personal-blog-crud',

        shortDescription:
        'A browser-based blog application demonstrating content management and CRUD operations.',

        description:
        'A practical web application developed to explore creating, reading, updating and deleting structured blog content while strengthening JavaScript and DOM manipulation skills.',

        category: 'Web Development',

        technologies: [
        'JavaScript',
        'HTML',
        'CSS'
        ],

        image: `${import.meta.env.BASE_URL}images/projects/personal-blog.webp`,
        githubUrl: 'https://github.com/moseseyems/personal-blog-app',
        liveUrl: 'https://moseseyems.github.io/personal-blog-app/',
        featured: true,

        caseStudy: {
            overview:
                'A browser-based personal blog application developed to practise building an interactive content-management experience with JavaScript, HTML and CSS.',

            problem:
                'The project required moving beyond a static website and creating an application where blog content could be managed dynamically through user interactions in the browser.',

            solution:
                'I developed a blog interface that uses JavaScript to manage posts and update the page dynamically. The project applies CRUD principles so content can be created, displayed, updated and removed through the application interface.',

            role:
                'I developed the application as a practical web development project, working on the page structure, blog data, JavaScript logic, DOM manipulation, user interactions and interface styling.',

            keyFeatures: [
                'Dynamic blog post rendering',
                'Create blog posts',
                'Read and display post content',
                'Edit existing posts',
                'Delete posts',
                'Structured blog data',
                'Category and post information',
                'Interactive browser-based interface',
            ],

            challenges: [
                'Connecting JavaScript data with dynamically generated page content.',
                'Keeping the interface updated when blog data changed.',
                'Structuring CRUD operations clearly while maintaining readable application code.',
                'Managing user interactions through DOM events.',
            ],

            outcomes: [
                'Built a working browser-based CRUD application around a practical blogging use case.',
                'Applied create, read, update and delete operations in a front-end project.',
                'Improved practical understanding of JavaScript objects, arrays, functions and DOM manipulation.',
                'Developed stronger understanding of how application data and user interfaces interact.',
            ],

            screenshots: [
                `${import.meta.env.BASE_URL}images/projects/personal-blog/homepage.png`,
                `${import.meta.env.BASE_URL}images/projects/personal-blog/create-post.png`,
                `${import.meta.env.BASE_URL}images/projects/personal-blog/edit-post.png`,
            ],
        },

        year: 2026
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}