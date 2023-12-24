"use client";
import CarousellBanners from "../../../../components/CarousellBanners";
import BackButton from "../../../../components/BackButton";
import { ProjectDetailsCardProps } from "../../../../../types";
import ProjectLogo from "./ProjectLogo";
import ProjectDetailsCard from "../ProjectDetailsCard";
import ProjectAnnouncement from "../ProjectAnnouncement";
import ProjectTwitterWidget from "../ProjectTwitterWidget";
import ProjectDetails from "../../../../components/ProjectDetails";

export default function ProjectWeb({
  projectData,
}: Readonly<ProjectDetailsCardProps>) {
  return (
    <>
      <CarousellBanners />
      <div className="flex flex-col">
        <BackButton text={"Projects"} />
        <div className="flex flex-row items-center">
        <ProjectLogo projectIcon={projectData.icon} />
        <ProjectDetails projectData={projectData}/>
        </div>
        {/* <ProjectDetailsCard projectData={projectData}/>
        <ProjectAnnouncement projectData={projectData} />
        <ProjectTwitterWidget projectData={projectData} /> */}
      </div>
    </>
  );
}
