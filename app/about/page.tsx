import React from "react";

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">À propos</h1>
            <p className="text-lg">Cette page est dédiée à la présentation de mon parcours et de mes compétences.</p>
        </div>
    );
}

export default About;