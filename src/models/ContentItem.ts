import type { BlogPost } from './BlogPost';
import type { Project } from './Project';

export type ContentItem =
    | {
        type: 'project';
        data: Project;
    }
    | {
        type: 'blog';
        data: BlogPost;
    };

export function getContentTitle(item: ContentItem): string {
    switch (item.type) {
        case 'project':
            return item.data.title;

        case 'blog':
            return item.data.title;
    }
}
