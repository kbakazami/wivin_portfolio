import React from "react";
import Image from "next/image";

interface Props {
    icon: string;
    title: string;
    description: string;
}

const SkillCard: React.FC<Props> = ({icon, title, description}) => {
    return (
        <div className="flex flex-1 gap-3 rounded bg-[#30475E] p-4 flex-col">
            <div className="text-white" data-icon="Database" data-size="24px" data-weight="regular">
                <Image src={icon} alt="logo bdd" width={24} height={24} />
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="text-white text-base font-bold leading-tight">{title}</h2>
                <p className="text-[#7E8A97] text-sm font-normal leading-normal">{description}</p>
            </div>
        </div>
    )
}

export default SkillCard;