import { IProjects } from "../../types";
import CarousellBanners from "../components/CarousellBanners";
import getProjectsData from "../functions";
import ProjectsCard from "./components/ProjectsCard";

export default async function Projects() {
  const projectsData = await getProjectsData();
  const projects: IProjects[] = projectsData.data;
  return (
    <>
      <div className="flex flex-1 flex-col md:pl-64">
        <CarousellBanners />
        <div className="border-t"></div>
        <div className="mx-auto py-6 max-w-7xl px-4 sm:px-6 md:px-8 flex justify-center">
          <ProjectsCard projectsData={projects} />
        </div>
      </div>
    </>
  );
}
