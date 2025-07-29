import React from "react";
import Link from "next/link";

const About: React.FC = () => {
    return (
        <section className="max-w-3xl mx-auto px-4 py-12 text-white bg-[#113F67] rounded">
            <h1 className="text-4xl font-bold mb-6 text-primary text-[#FDF5AA]">À propos de moi</h1>
            <div className="lg:w-80 w-40 h-1 bg-[#FDF5AA] my-4 rounded-full"></div>
            <p className="text-lg leading-relaxed mb-4">
                Je suis développeur full-stack, diplômé d’un Mastère en Ingénierie du Web à l’ESGI de Lyon.
                Passionné par la création de solutions web performantes, maintenables et utiles, je développe aussi bien des interfaces modernes que des architectures backend robustes.
            </p>

            <p className="text-lg leading-relaxed mb-4">
                Au cours de mes projets, j’ai travaillé sur des applications web complexes, des sites vitrines, des plateformes e-commerce (Magento 2), ainsi que des APIs REST sur mesure.
                Ma stack principale comprend <strong>PHP (Symfony)</strong>, <strong>Node.js (Express)</strong>, <strong>React</strong>, <strong>TailwindCSS</strong> et <strong>Python</strong>.
                J’utilise également <strong>Git</strong>, <strong>Docker</strong> et les bonnes pratiques DevOps au quotidien.
            </p>

            <p className="text-lg leading-relaxed mb-4">
                J’accorde une grande importance à la qualité du code, à la clarté des interfaces, et à la collaboration technique.
                J’aime comprendre les besoins métier, proposer des solutions adaptées, et rester en veille sur les technologies web.
            </p>

            <p className="text-lg leading-relaxed mb-4">
                Je suis actuellement à la recherche d’un poste en <strong>CDI</strong> dans une entreprise où je pourrai continuer à apprendre,
                relever des défis techniques, et évoluer au sein d’une équipe passionnée.
            </p>

            <p className="text-lg leading-relaxed">
                En dehors du code, je m’intéresse à l’UX, aux méthodologies agiles, et à la transmission des connaissances.
                N’hésitez pas à consulter mes{" "}
                <Link href="/projects" className="text-tertiary hover:text-[#FDF5AA] font-semibold">
                    projets
                </Link>{" "}
                ou à me{" "}
                <Link href="/contact" className="text-tertiary hover:text-[#FDF5AA] font-semibold">
                    contacter
                </Link>{" "}
                pour discuter.
            </p>

            <div className="mt-8">
                <a
                    href="/cv.pdf"
                    className="inline-block px-6 py-3 bg-primary text-white rounded hover:bg-hover transition"
                    download
                >
                    Télécharger mon CV
                </a>
            </div>
        </section>
    );
}

export default About;