"use client";
import CarousellBanners from "../../../../components/CarousellBanners";
import BackButton from "../../../../components/BackButton";
import { ProjectDetailsCardProps } from "../../../../../types";
import ProjectLogo from "./ProjectLogo";
import ProjectDetails from "../../../../components/ProjectDetails";

export default function ProjectWeb({
  projectData,
}: Readonly<ProjectDetailsCardProps>) {
  return (
    <>
      <CarousellBanners />
      <div className="flex flex-col w-full h-full pr-[213px]">
        <BackButton text={"Projects"} />
        <div className="flex flex-row w-full">
        <ProjectLogo projectIcon={projectData.icon} />
        <ProjectDetails projectData={projectData}/>
        </div>
      </div>
      
    </>
  );
}
