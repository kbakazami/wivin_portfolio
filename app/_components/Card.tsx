import React from "react";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
}

const Card: React.FC<CardProps> = ({title, linkUrl, imageUrl, description}) => {
    return (
        <div className="bg-[#113F67] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto">
            <img src={imageUrl} alt="photo de projet" />
            <h2 className="text-2xl font-bold my-4">{title}</h2>
            <p className="text-gray-300 mb-4">
                {description}
            </p>
            <Link href={linkUrl} className="bg-[#FDF5AA] hover:bg-white text-[#113F67] font-semibold py-2 px-4 rounded transition duration-300">
                En savoir plus
            </Link>
        </div>
    )
}

export default Card;