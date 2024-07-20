"use client";
import { ProjectDetailsCardProps } from "../../../../../types";
import MobileBackButton from "../../../../components/MobileBackButton";
import ProjectDetailsMobile from "../../../../components/ProjectsDetailsMobile";
import MobileProjectLogo from "./MobileProjectLogo";


export default function ProjectMobile({
  projectData,
}: Readonly<ProjectDetailsCardProps>) {
  return (
    <div>
      <MobileBackButton text={"Projects"}/>
      <div className="flex flex-col w-full h-full pl-4 pr-4 ">
      <MobileProjectLogo projectIcon={projectData.icon}/>
      <ProjectDetailsMobile projectData={projectData} />
      </div>
    </div>
  );
}
