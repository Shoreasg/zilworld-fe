import * as _ from "lodash";
import { Metadata } from "next";
import { getProjectsCategoriesData, getProjectsData } from "../functions";
import MainProjectWeb from "./components/Web/MainProjectWeb";
import MainProjectMobile from "./components/Mobile/MainProjectMobile";

export const metadata: Metadata = {
  title: "ZilWorld-Ecosystem of Zilliqa",
  description: "Ecosystem of Zilliqa",
  icons: {
    icon: "/ZilWorld Logo.png",
  },
};

export default async function Projects() {
  const projectsData = await getProjectsData();
  const projectCategoriesData = await getProjectsCategoriesData();
  const totalProjects:number = projectsData.data.length;
  return (
    <>
      <div className="block lg:hidden z-20 ">
        <div className="flex flex-col w-full h-full">
          <MainProjectMobile categories={projectCategoriesData.data} numProjects={totalProjects} projectsData={projectsData.data}/>
        </div>
      </div>
      <div className="hidden lg:flex flex-grow basis-0 flex-shrink-0 self-stretch ">
        <div className="flex flex-col w-full h-full overflow-y-auto">
          <MainProjectWeb categories={projectCategoriesData.data} numProjects={totalProjects} projectsData={projectsData.data}/>
        </div>
      </div>
    </>
  );
}
