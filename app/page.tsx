import Link from "next/link";
import Card from "@/app/_components/Card";

export default function Home() {
  return (
      <>
        <section
            className="h-[80vh] bg-cover bg-center flex items-center text-white"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold">Développeur Full-stack</h1>
            <p className="mt-4 text-lg">Symfony, Node.js, React, Tailwind</p>
            <div className="mt-8">
                <Link
                href="/projects"
                className="bg-[#113F67] hover:bg-[#FDF5AA] hover:text-[#113F67] text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                Voir mes projets
                </Link>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-center font-bold pb-16 text-4xl md:text-6xl">Mes derniers projets</h2>
            <div className="flex gap-8 justify-center">
                <Card title={"Titre de la carte"} description={"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."} imageUrl={"https://placehold.co/600x400"} linkUrl={"/projects/1"} />
                <Card title={"Titre de la carte"} description={"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."} imageUrl={"https://placehold.co/600x400"} linkUrl={"/projects/1"} />
                <Card title={"Titre de la carte"} description={"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."} imageUrl={"https://placehold.co/600x400"} linkUrl={"/projects/1"} />
                <Card title={"Titre de la carte"} description={"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."} imageUrl={"https://placehold.co/600x400"} linkUrl={"/projects/1"} />
            </div>
        </section>
          <section className="bg-[#34699A] text-white py-16">
              <div className="flex flex-wrap gap-8 mt-8 items-center justify-center">
                  <img src="/icons/react.svg" alt="React" className="h-20" />
                  <img src="/icons/nodedotjs.svg" alt="Node.js" className="h-20" />
                  <img src="/icons/symfony.svg" alt="Symfony" className="h-20" />
                  <img src="/icons/php.svg" alt="PHP" className="h-20" />
                  <img src="/icons/tailwindcss.svg" alt="TailwindCSS" className="h-20" />
                  <img src="/icons/javascript.svg" alt="JavaScript" className="h-20" />
              </div>
          </section>
      </>
  );
}
