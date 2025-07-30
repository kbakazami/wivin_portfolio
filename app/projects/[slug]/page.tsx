import { getProjectBySlug } from '@/app/_lib/getProjectBySlug';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import ProjectGallery from "@/app/_components/ProjectGallery";
import React from "react";
import {notFound} from "next/navigation";
import {IProject} from "@/app/_types/project";
export const dynamic = 'force-dynamic';

interface ITech {
    id: number;
    techno: string;
}

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project: IProject = await getProjectBySlug(slug);
    if (!project) return notFound();

    return (
        <section className="project_page container mx-auto px-4 pb-16 pt-32">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800">{project.title}</h1>
            <div className="lg:w-80 w-40 h-1 mx-auto bg-[#30475E] my-4 rounded-full"></div>

            {project.gallery && project.gallery.length > 0 && (
                <ProjectGallery
                    images={project.gallery.map((img: {url: string}) => `${process.env.STRAPI_API_URL}${img.url}`)}
                />
            )}

            <div className="prose prose-invert max-w-none">
                <BlocksRenderer content={project.description as any} />
            </div>

            <div className="mt-6 flex flex-wrap gap-2 px-4">
                {project.stack.map((tech: ITech) => (
                    <span key={tech.id} className="bg-gray-200 text-sm px-3 py-1 rounded">
            {tech.techno}
          </span>
                ))}
            </div>
        </section>
    );
}
