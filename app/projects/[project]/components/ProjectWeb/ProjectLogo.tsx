"use client";
import { useContext } from "react";
import { ProjectLogoProps } from "../../../../../types";
import Image from "next/image";
import { onMenuClickContext } from "../../../../context/MenuContext";

export default function ProjectLogo({
  projectIcon,
}: Readonly<ProjectLogoProps>) {
  const menuClickContext = useContext(onMenuClickContext);
  return (
    <div
      className={`sticky top-[68px] flex w-16 h-16 mt-[22px]  ${
        menuClickContext ? "ml-[222px]" : "ml-[142px]"
      }  `}
    >
      <div
        className={`inline-flex  
      items-start gap-2`}
      >
        <Image
          src={projectIcon}
          fill={true}
          alt={"projectLogo"}
          className=" rounded-lg flex-shrink-0"
        />
      </div>
    </div>
  );
}
