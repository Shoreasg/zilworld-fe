"use client";
import ProjectDetails from "../../components/ProjectDetails";
import ProjectLogo from "../../projects/[project]/components/ProjectWeb/ProjectLogo";
import { NewProjectDetailsCardProps, ProjectDetailsCardProps } from "../../../types";
import BackButton from "../../components/BackButton";
import CarousellBanners from "../../components/CarousellBanners";


export default function Coming_Soon_Web({
  NewProjectData,
}: Readonly<NewProjectDetailsCardProps>) {
  return (
    <>
      <CarousellBanners />
      <div className="flex flex-col w-full h-full pr-[213px]">
        <BackButton text={"Coming Soon"} />
        <div className="flex flex-row w-full">
          <ProjectLogo projectIcon={NewProjectData.icon} />
          <ProjectDetails projectData={NewProjectData} />
        </div>
      </div>
    </>
  );
}
