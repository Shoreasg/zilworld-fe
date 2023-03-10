import { IProjects } from "../../types";
import CarousellBanners from "../components/CarousellBanners";
import getProjectsData from "../functions";
import ProjectsCard from "./components/ProjectsCard";
import * as _ from "lodash";
import Note from "../components/Note";

export default async function Projects() {
  const projectsData = await getProjectsData();
  const projects: IProjects[] = _.shuffle(projectsData.data);
  return (
    <>
      <div className="flex flex-1 flex-col md:pl-64">
        <CarousellBanners />
        <div className="border-t"></div>
        <div className="flex flex-row justify-center mt-6">
          <div className="flex flex-col w-fit lg:w-1/2  justify-center">
            <p className="text-center text-xl">
              This page highlights some of the entities and applications within
              the Zilliqa ecosystem, but it may not encompass all of them.
              Additionally, due to the rapid growth of the ecosystem, some
              information presented here may be outdated. Nonetheless, this list
              serves as a helpful introduction to exploring the Zilliqa
              ecosystem.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className=" w-fit lg:w-[700px] rounded-md p-4">
            <Note />
          </div>
        </div>
        <div className="mx-auto py-6 max-w-7xl px-4 sm:px-6 md:px-8 flex flex-row justify-center">
          <ProjectsCard projectsData={projects} />
        </div>
      </div>
    </>
  );
}
