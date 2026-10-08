export type MessageStatus =
    | 'unread'
    | 'read'
    | 'archived';

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    status: MessageStatus;
    createdAt: string;
}
