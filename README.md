# Moses Eyemonu — Personal Portfolio & CMS

A self-hosted personal portfolio and content management system built from scratch with TypeScript, HTML and CSS, using Vite for development and production builds.

The application combines a public professional portfolio with a private client-side CMS for managing projects, Insights articles and contact-form enquiries.

## Live Website

https://moseseyems.github.io/moses-portfolio/

## Repository

https://github.com/moseseyems/moses-portfolio

## Project Overview

This portfolio demonstrates a framework-free TypeScript application with both public-facing functionality and content-management features.

### Public Portfolio

- Professional portfolio homepage
- Dynamic project showcase
- Project category filtering
- Project detail and case-study pages
- Insights/blog feed
- Tag-based article filtering
- Automatic reading-time calculation
- Article detail pages
- Optional project and article images
- Validated contact form

### CMS / Admin Dashboard

- Authentication guard
- Dashboard statistics
- Project CRUD management
- Insight/blog CRUD management
- Publish and unpublish controls
- Contact-message inbox
- Read and unread message states
- Archive and restore functionality
- Message deletion

## Technology Stack

- TypeScript
- HTML5
- CSS3
- Vite
- Browser localStorage
- Browser sessionStorage
- Git
- GitHub
- GitHub Pages

No frontend framework such as React or Vue is used.

## Project Management

The CMS supports Create, Read, Update and Delete operations for portfolio projects.

Project fields include:

- Title
- Slug
- Short description
- Full description
- Category
- Technologies
- GitHub URL
- Live URL
- Image URL
- Featured status
- Year

## Insight Management

The CMS supports Create, Read, Update and Delete operations for Insights articles.

Insight fields include:

- Title
- Slug
- Excerpt
- Article content
- Tags
- Image URL
- Publication status

Only published articles are displayed on the public portfolio.

## Contact System

The public contact form validates the visitor name, email address, subject and message.

Valid submissions are converted into typed ContactMessage objects and stored in localStorage.

The CMS inbox allows messages to be:

- Viewed
- Marked as read
- Marked as unread
- Archived
- Restored
- Deleted

## TypeScript Architecture

### Generic Local Storage Service

Browser persistence is managed through a reusable generic LocalStorageService<T> class.

The service provides:

- getAll()
- getById()
- create()
- update()
- delete()
- replaceAll()

Separate typed service instances manage projects, blog posts and contact messages.

### Discriminated Unions

CMS form data uses the AdminContentFormData discriminated union, consisting of ProjectFormData and BlogFormData.

Each form contains a type property with either project or blog as its value.

The CRUD controller uses switch statements on this property so TypeScript can narrow the correct data type before accessing project- or blog-specific fields.

### Strict DOM Typing

DOM elements are queried with explicit TypeScript element types such as HTMLFormElement, HTMLInputElement and HTMLButtonElement.

The source code avoids unsafe TypeScript escape hatches such as as-any, ts-ignore and ts-nocheck.

### Client-Side Router

The application includes a custom hash-based router supporting public pages, project details, article details and CMS routes.

## Data Persistence

The project simulates database persistence using browser localStorage.

Storage keys include:

- moses-portfolio-projects
- moses-portfolio-blog-posts
- moses-portfolio-contact-messages

Initial content is seeded only when its storage area does not already exist. This prevents CMS changes from being overwritten when the application reloads.

localStorage is specific to each browser origin, so localhost data is separate from data stored on the deployed GitHub Pages website.

## Authentication

The CMS includes an authentication guard using browser sessionStorage.

This is intentionally a client-side coursework demonstration of authentication state, protected routing and logout behaviour. It is not production-grade authentication.

A production application would use secure server-side authentication and authorization rather than relying on credentials and access logic contained entirely in client-side JavaScript.

## Content Rendering Safety

User- and CMS-generated text is escaped before being inserted into dynamically generated HTML.

External content URLs are validated before rendering and are restricted to HTTP or HTTPS resources.

## Running Locally

Clone the repository:

    git clone https://github.com/moseseyems/moses-portfolio.git

Enter the project:

    cd moses-portfolio

Install dependencies:

    npm install

Start the development server:

    npm run dev

## Production Build

Create a production build:

    npm run build

The command runs the TypeScript compiler followed by the Vite production build.

Production files are generated in the dist directory.

Preview the production build with:

    npm run preview

## Project Structure

    src/
    ├── components/
    ├── data/
    ├── models/
    ├── pages/
    │   ├── admin/
    │   └── public/
    ├── router/
    ├── services/
    ├── styles/
    ├── utils/
    └── main.ts

Key architectural files include:

- src/services/LocalStorageService.ts
- src/services/contentServices.ts
- src/services/AuthService.ts
- src/router/router.ts
- src/models/AdminContentForm.ts
- src/components/AdminCrudController.ts
- src/components/AdminMessageController.ts
- src/utils/readingTime.ts
- src/utils/html.ts

## Key Learning Outcomes

The project demonstrates practical understanding of:

- TypeScript interfaces
- Union types and type narrowing
- Generics
- Classes
- Reusable service architecture
- CRUD operations
- Browser storage
- DOM manipulation
- Form validation
- Event handling
- Client-side routing
- Dynamic rendering
- Content filtering
- Authentication-state management
- Responsive interface development
- Git and GitHub workflow
- Static-site deployment

## Author

Moses Eyemonu

Business • Finance • Technology

GitHub: https://github.com/moseseyems

LinkedIn: https://www.linkedin.com/in/moses-nkem-eyemonu-b225813a1/
