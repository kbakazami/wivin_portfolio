import Link  from "next/link";
import React from "react";

interface ProjectCardProps {
    title: string;
    summary: string;
    imageUrl: string;
    technologies: string[];
    href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, summary, imageUrl, technologies, href }) => {
    return (
        <Link href={href} className="block hover:shadow-xl transition-shadow duration-200">
            <div className="bg-[#30475E] text-white rounded-lg shadow-lg overflow-hidden">
                <img src={`${process.env.STRAPI_API_URL}${imageUrl}`} alt="image du projet" className="w-full h-48 object-cover" />
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-300 mb-4">{summary}</p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span key={tech} className="bg-[#7E8A97] text-white text-xs font-semibold px-2 py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
