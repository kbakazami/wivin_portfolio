import React from "react";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
}

const Card: React.FC<CardProps> = ({ title, linkUrl, imageUrl, description }) => {
    return (
        <div className="bg-[#30475E] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto flex flex-col h-full">
            <img src={imageUrl} alt="photo de projet" className="w-full h-48 object-cover rounded" />

            <div className="flex flex-col flex-grow mt-4">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-300 flex-grow">{description}</p>

                <Link
                    href={linkUrl}
                    className="mt-4 hover:bg-[#7E8A97] bg-white text-[#30475E] hover:text-white font-semibold py-2 px-4 rounded transition duration-300 text-center"
                >
                    En savoir plus
                </Link>
            </div>
        </div>
    );
};

export default Card;
