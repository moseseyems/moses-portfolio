import { blogPosts } from '../data/blogPosts';
import { projects } from '../data/projects';
import type { BlogPost } from '../models/BlogPost';
import type { ContactMessage } from '../models/ContactMessage';
import type { Project } from '../models/Project';
import { LocalStorageService } from './LocalStorageService';

export const projectService =
    new LocalStorageService<Project>(
        'moses-portfolio-projects',
        projects
    );

export const blogService =
    new LocalStorageService<BlogPost>(
        'moses-portfolio-blog-posts',
        blogPosts
    );

export const messageService =
    new LocalStorageService<ContactMessage>(
        'moses-portfolio-contact-messages'
    );

export function initializeContentStorage(): void {
    projectService.initialize();
    blogService.initialize();
    messageService.initialize();
}

export function getProjects(): Project[] {
    return projectService.getAll();
}

export function getFeaturedProjects(): Project[] {
    return getProjects().filter(
        project => project.featured
    );
}

export function getProjectBySlug(
    slug: string
): Project | undefined {
    return getProjects().find(
        project => project.slug === slug
    );
}

export function getPublishedBlogPosts(): BlogPost[] {
    return blogService
        .getAll()
        .filter(post => post.published)
        .sort(
            (a, b) =>
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
        );
}

export function getBlogPostBySlug(
    slug: string
): BlogPost | undefined {
    return getPublishedBlogPosts().find(
        post => post.slug === slug
    );
}
