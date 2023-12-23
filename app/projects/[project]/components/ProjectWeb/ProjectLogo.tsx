'use client'
import { useContext } from "react";
import { ProjectLogoProps } from "../../../../../types";
import Image from "next/image";
import { onMenuClickContext } from "../../../../context/MenuContext";

export default function ProjectLogo({projectIcon}:ProjectLogoProps){
    const menuClickContext = useContext(onMenuClickContext);
    return(
        <div className={`inline-flex pt-[68px] ${menuClickContext? "pl-[222px]":"pl-[142px]"} items-start gap-2`}>
            <Image src={projectIcon} width={64} height={64} alt={"projectLogo"} className=" rounded-lg flex-shrink-0"/>
        </div>
    )
}