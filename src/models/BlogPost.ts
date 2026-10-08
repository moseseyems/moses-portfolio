export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    tags: string[];
    imageUrl?: string;
    published: boolean;
    publishedAt: string;
    updatedAt: string;
}
