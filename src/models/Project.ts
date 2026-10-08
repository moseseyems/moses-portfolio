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

    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;

    featured: boolean;

    caseStudy?: ProjectCaseStudy;

    year: number;
}