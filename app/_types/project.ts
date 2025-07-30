export interface IProject {
    id: number;
    title: string;
    slug: string;
    description: RichBlock[]; // voir type plus bas
    githubUrl?: string;
    liveUrl?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    summary: string;

    image?: MediaFile;
    gallery?: MediaFile[];

    stack: {
        id: number;
        techno: string;
    }[];
}

export interface MediaFile {
    id: number;
    url: string;
    name: string;
    alternativeText: string | null;
    caption?: string | null;
    width: number;
    height: number;
    formats?: {
        thumbnail?: { url: string };
        small?: { url: string };
        medium?: { url: string };
        large?: { url: string };
    };
}

export interface RichBlock {
    type: string;
    level?: number;
    format?: string;
    children: Array<{ text: string }>;
}