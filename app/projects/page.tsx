import React from "react";
import ProjectCard from "@/app/_components/ProjectCard";

const projects = [
    {
        title: "Site e-commerce",
        description: "Boutique en ligne réalisée avec Next.js et Stripe pour le paiement.",
        imageUrl: "https://placehold.co/600x400",
        technologies: ["Next.js", "Stripe", "Tailwind"],
    },
    {
        title: "Application de tâches",
        description: "Gestionnaire de tâches avec React et une API Node.js.",
        imageUrl: "https://placehold.co/600x400",
        technologies: ["React", "Node.js", "MongoDB"],
    },
    {
        title: "Site vitrine",
        description: "Présentation d\u2019entreprise développée sous Symfony.",
        imageUrl: "https://placehold.co/600x400",
        technologies: ["Symfony", "PHP", "MySQL"],
    },
    {
        title: "Site vitrine",
        description: "Présentation d\u2019entreprise développée sous Symfony.",
        imageUrl: "https://placehold.co/600x400",
        technologies: ["Symfony", "PHP", "MySQL"],
    },
    {
        title: "Site vitrine",
        description: "Présentation d\u2019entreprise développée sous Symfony.",
        imageUrl: "https://placehold.co/600x400",
        technologies: ["Symfony", "PHP", "MySQL"],
    },
    {
        title: "Site vitrine",
        description: "Présentation d\u2019entreprise développée sous Symfony.",
        imageUrl: "https://placehold.co/600x400",
        technologies: ["Symfony", "PHP", "MySQL"],
    },
];

const Projects: React.FC = () => {
    return (
        <section className="container mx-auto px-4 pb-16 pt-32">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800">Mes Projets</h1>
            <div className="lg:w-80 w-40 h-1 mx-auto bg-[#30475E] my-4 rounded-full"></div>
            <p className="text-lg md:text-xl text-center mb-8">
                Découvrez quelques-uns de mes projets récents, réalisés avec passion et expertise.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
