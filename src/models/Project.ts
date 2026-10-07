export type ProjectCategory =
    | 'Business Systems'
    | 'Frontend'
    | 'Fullstack'
    | 'Web Development';

export interface ProjectCaseStudy {
    overview: string;
    problem: string;
    solution: string;
    role: string;
    keyFeatures: string[];
    challenges: string[];
    outcomes: string[];
    screenshots?: string[];
}

export interface Project {
    id: string;

    title: string;
    slug: string;

    shortDescription: string;
    description: string;

    category: ProjectCategory;
    technologies: string[];

    image: string;

    githubUrl?: string;
    liveUrl?: string;

    featured: boolean;

    caseStudy?: ProjectCaseStudy;

    year: number;
}