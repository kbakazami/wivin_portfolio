import Link from "next/link";
import Card from "@/app/_components/Card";
import Image from "next/image";
import React from "react";

export default function Home() {
    return (
        <>
            <section
                className="relative h-[100vh] bg-cover bg-center flex items-center text-white"
                style={{backgroundImage: "url('/images/hero-bg.jpg')"}}
            >
                <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
                <div className="relative container mx-auto px-4">
                    <h1 className="text-4xl text-center md:text-6xl font-bold text-[#FDF5AA]">Wivin Struys</h1>
                    <div className="lg:w-80 w-40 h-1 mx-auto bg-[#FDF5AA] my-4 rounded-full"></div>
                    <p className="mt-4 text-2xl text-center">Développeur Web - Full Stack</p>
                    <div className="mt-8 gap-4 flex justify-center">
                        <Link
                            href="/projects"
                            className="bg-[#113F67] hover:bg-[#FDF5AA] hover:text-[#113F67] text-white font-semibold py-2 px-4 rounded transition duration-300"
                        >
                            Voir mes projets
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-[#FDF5AA] hover:bg-white text-[#113F67] font-semibold py-2 px-4 rounded transition duration-300"
                        >
                            Me contacter
                        </Link>
                    </div>
                </div>
            </section>
            <section className="lg:pt-22 lg:pb-30 py-16 bg-[#113F67] text-white">
                <div className="container mx-auto px-4 flex lg:flex-row flex-col">
                    <div className="lg:relative lg:w-1/3 lg:h-96 lg:mr-8">
                        <div className="lg:absolute hidden bg-[#FDF5AA] w-100 h-100 top-6 left-6 rounded"></div>
                        <Image src="/images/me.jpg" alt="Photo de Wivin Struys" width={400} height={400}
                               className="rounded mb-4 lg:relative mx-auto"/>
                    </div>
                    <div className="lg:w-2/3 lg:mt-0 mt-8">
                        <h2 className="lg:text-left text-center font-bold text-4xl md:text-6xl">Présentation</h2>
                        <div className="lg:w-80 w-40 h-1 mx-auto bg-[#FDF5AA] my-4 rounded-full"></div>
                        <div>
                            <p className="lg:text-left text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex sequi, suscipit! Ad autem
                                beatae debitis expedita explicabo facilis laboriosam natus neque quos repellat. Cumque
                                cupiditate, delectus doloremque enim esse eum, hic illum natus nisi porro repellendus
                                temporibus, totam voluptas! Ad aliquam animi at culpa dolore enim facere fugiat ipsum
                                perspiciatis.
                            </p>
                            <div className="border-2 border-[#FDF5AA] p-6 mt-8 rounded flex md:flex-row flex-col md:gap-32">
                                <div className="flex flex-col">
                                    <p><span className="font-bold">Nom :</span> Wivin Struys</p>
                                    <p><span className="font-bold">Age :</span> 32 Ans</p>
                                    <p><span className="font-bold">Localisation :</span> Belgique</p>
                                    <p><span className="font-bold">Email :</span> struys.wyvin@gmail.com</p>
                                </div>
                                <div className="flex flex-col">
                                    <p><span className="font-bold">Github :</span> <a href="https://github.com/kbakazami" target="_blank" className="hover:text-[#FDF5AA]">Kbakazami</a></p>
                                    <p><span className="font-bold">Linkedin :</span> <a href="https://www.linkedin.com/in/wivin-struys" target="_blank" className="hover:text-[#FDF5AA]">Wivin Struys</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#34699A] text-white py-12">
                <div className="container mx-auto px-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 place-items-center">
                    <Image src="/icons/javascript.svg" width={80} height={80} alt="JavaScript" />
                    <Image src="/icons/react.svg" width={80} height={80} alt="React"/>
                    <Image src="/icons/php.svg" width={80} height={80} alt="PHP"/>
                    <Image src="/icons/symfony.svg" width={80} height={80} alt="Symfony"/>
                    <Image src="/icons/nodedotjs.svg" width={80} height={80} alt="Node.js"/>
                    <Image src="/icons/express.svg" width={80} height={80} alt="Express"/>
                    <Image src="/icons/css.svg" width={80} height={80} alt="CSS"/>
                    <Image src="/icons/tailwindcss.svg" width={80} height={80} alt="TailwindCSS"/>
                    <Image src="/icons/docker.svg" width={80} height={80} alt="Docker"/>
                </div>
            </section>
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-center font-bold text-4xl md:text-6xl text-gray-700">Mes derniers projets</h2>
                <div className="lg:w-80 w-40 h-1 mx-auto bg-[#113F67] my-4 rounded-full"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                    <Card title={"Titre de la carte"}
                          description={"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
                          imageUrl={"https://placehold.co/600x400"} linkUrl={"/projects/1"}/>
                    <Card title={"Titre de la carte"}
                          description={"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
                          imageUrl={"https://placehold.co/600x400"} linkUrl={"/projects/1"}/>
                    <Card title={"Titre de la carte"}
                          description={"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
                          imageUrl={"https://placehold.co/600x400"} linkUrl={"/projects/1"}/>
                </div>
            </section>
        </>
    );
}
