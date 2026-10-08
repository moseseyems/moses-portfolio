import type { ProjectCategory } from './Project';

interface SharedContentForm {
    title: string;
    slug: string;
}

export interface ProjectFormData
    extends SharedContentForm {
    type: 'project';
    shortDescription: string;
    description: string;
    category: ProjectCategory;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    year: number;
}

export interface BlogFormData
    extends SharedContentForm {
    type: 'blog';
    excerpt: string;
    content: string;
    tags: string[];
    published: boolean;
}

export type AdminContentFormData =
    | ProjectFormData
    | BlogFormData;
