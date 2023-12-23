"use client";
import CarousellBanners from "../../../../components/CarousellBanners";
import BackButton from "../../../../components/BackButton";
import { ProjectDetailsCardProps } from "../../../../../types";
import ProjectLogo from "./ProjectLogo";

export default function ProjectWeb({projectData}:ProjectDetailsCardProps) {
  return (
    <>
      <CarousellBanners />
      <div className="flex flex-col">
      <BackButton text={"Projects"}/>
      <ProjectLogo projectIcon={projectData.icon}/>
      </div>
    </>
  );
}
