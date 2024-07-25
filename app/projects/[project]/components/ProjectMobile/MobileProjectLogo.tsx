import { ProjectLogoProps } from "../../../../../types";
import Image from "next/image";

export default function MobileProjectLogo({projectIcon}:Readonly<ProjectLogoProps>){
    return(
        <div className="relative w-full h-[100px] mt-0 mx-0 mb-6">
            <Image src={projectIcon} alt={"projectLogo"} layout="fill" objectFit="cover" className="rounded-lg"/>
        </div>
    )
}