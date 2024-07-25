"use client";
import { NewMobileProjectDetailsCardProps } from "../../../types";
import MobileBackButton from "../../components/MobileBackButton";
import ProjectDetailsMobile from "../../components/ProjectsDetailsMobile";
import MobileProjectLogo from "../../projects/[project]/components/ProjectMobile/MobileProjectLogo";



export default function Coming_Soon_Mobile({
    NewProjectData,
}: Readonly<NewMobileProjectDetailsCardProps>) {
  return (
    <div>
      <MobileBackButton text={"Coming Soon"}/>
      <div className="flex flex-col w-full h-full pl-4 pr-4 ">
      <MobileProjectLogo projectIcon={NewProjectData.icon}/>
      <ProjectDetailsMobile projectData={NewProjectData} />
      </div>
    </div>
  );
}
