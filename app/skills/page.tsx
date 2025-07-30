import React from "react";
import SkillCard from "@/app/_components/SkillCard";

const skills: React.FC = () => {
    return (
        <section className="container mx-auto px-4 pb-16 pt-32">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800">Mes Compétences</h1>
            <div className="lg:w-80 w-40 h-1 mx-auto bg-[#30475E] my-4 rounded-full"></div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <SkillCard icon="/icons/front.svg" title="Développement Front-end"
                           description="HTML, CSS, JavaScript, React, Tailwind"/>
                <SkillCard icon="/icons/bdd.svg" title="Gestion de Bases de Données"
                           description="MySQL, PostgreSQL, MongoDB"/>
                <SkillCard icon="/icons/bdd.svg" title="Développement Back-end"
                           description="PHP, Syfmony, Node.js, Express, Python"/>
                <SkillCard icon="/icons/tools.svg" title="Outils de Développement"
                           description="Git, Docker, Github actions"/>
                <SkillCard icon="/icons/design.svg" title="Design d'Interfaces" description="Figma"/>
            </div>
            <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Expérience
                Professionnelle</h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                <div className="flex flex-col items-center gap-1 pt-3">
                    <div className="text-[#0e141b]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                             viewBox="0 0 256 256">
                            <path
                                d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                            ></path>
                        </svg>
                    </div>
                    <div className="w-[1.5px] bg-[#d0dbe7] h-2 grow"></div>
                </div>
                <div className="flex flex-1 flex-col py-3">
                    <p className="text-[#30475E] text-base font-medium leading-normal">Développeur Javascript (React/NodeJS)</p>
                    <p className="text-[#7E8A97] text-base font-normal leading-normal">Ikattan (2021 - 2022)</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-[1.5px] bg-[#d0dbe7] h-2"></div>
                    <div className="text-[#0e141b]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                             viewBox="0 0 256 256">
                            <path
                                d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div className="flex flex-1 flex-col py-3">
                    <p className="text-[#30475E] text-base font-medium leading-normal">Développeur PHP (Symfony/Magento)</p>
                    <p className="text-[#7E8A97] text-base font-normal leading-normal">Magentizy (2022 - 2025)</p>
                </div>
            </div>
            <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
                <strong>Ikattan</strong> voulait créer une application destinée aux ingénieurs en électricité, permettant
                de concevoir et de simuler des réseaux électriques de manière simple et visuelle.
                L'application devait être développée grâce à la méthode <strong>TDD</strong> et aux technologies <strong>React</strong>
                pour la partie client et <strong>NodeJs</strong> pour la partie serveur. J'ai donc pu, lors de mon année
                d'alternance, concevoir et développer la première version de cette application en
                respectant et en intégrant pour l'équipe une gestion de projet agile, afin de veiller à la
                bonne évolution de l'application.

            </p>
            <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
                <strong>Magentizy</strong> est une entreprise spécialisée dans le développement et le référencement
                de sites e-commerce sur <strong>Magento 2</strong>. <strong>Magentizy</strong> ayant plusieurs clients et besoins
                d'entreprise, j'ai pu travailler sur plusieurs projets et tâches différentes :
                - Participation à la création d'un thème <strong>Magento 2</strong>.
                - Élaboration de fonctionnalités et plugins <strong>Magento 2</strong>.
                - Gestion de projet et développement en Symfony des différents sites vitrine de
                l'entreprise (<strong>Magentizy</strong> et <strong>Shopizy</strong>).
                - Conception et développement d'un outil interne en <strong>Symfony</strong> permettant la
                création de rapports de TMA destinés aux clients et l'envoi automatique de ces
                rapports par mail.
                - Création et gestion de <strong>CI/CD</strong> grâce à <strong>Deployer</strong> et <strong>Docker</strong>.
                J'ai donc pu, au cours de ces deux années, accroître mon niveau d'expertise en
                travaillant sur des projets variés, toujours basés sur <strong>PHP</strong>, et en collaborant avec de
                nombreux clients.
            </p>
        </section>
    )
        ;
}

export default skills;