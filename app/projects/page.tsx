import React from "react";
import ProjectCard from "@/app/_components/ProjectCard";
import {getProjects} from "@/app/_lib/getProjects";
import {IProject} from "@/app/_types/project";
import AnimatedReveal from "@/app/_components/AnimatedReveal";

const Projects: React.FC = async () =>  {

    const projects = await getProjects();

    return (
        <section className="container mx-auto px-4 pb-16 pt-32 min-h-screen">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800">Mes Projets</h1>
            <div className="lg:w-80 w-40 h-1 mx-auto bg-[#30475E] my-4 rounded-full"></div>
            <p className="text-lg md:text-xl text-center mb-8">
                Découvrez quelques-uns de mes projets récents, réalisés avec passion et expertise.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project: IProject, index: number) => (
                    <AnimatedReveal key={index} delay={index * 0.2}>
                        <ProjectCard key={project.slug}
                                     title={project.title}
                                     summary={project.summary ?? "Pas de descirption"}
                                     imageUrl={project.image?.url ?? "https://placehold.co/600x400"}
                                     technologies={
                                            project.stack.map((tech) => tech.techno)
                                     }
                                     href={`/projects/${project.slug}`}
                        />
                    </AnimatedReveal>
                ))}
            </div>
        </section>
    );
};

export default Projects;
