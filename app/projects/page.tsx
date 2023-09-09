import * as _ from "lodash";
import MobileCarousellBanners from "../components/MobileCarousellBanners";
import CarousellBanners from "../components/CarousellBanners";
import Hero from "./components/Hero";
import MobileHero from "./components/MobileHero";
import { Metadata } from "next";
import MobileSearchBar from "./components/MobileSearchBar";
import ProjectsWithFilter from "./components/ProjectsWithFilter";
import { getProjectsCategoriesData, getProjectsData } from "../functions";

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
      <div className="block lg:hidden pt-[54px] z-20">
        <div className="flex flex-col w-full h-full">
          <MobileCarousellBanners />
          <MobileHero />
          <MobileSearchBar />
        </div>
      </div>
      <div className="hidden lg:flex flex-grow basis-0 flex-shrink-0 self-stretch overflow-y-auto">
        <div className="flex flex-col w-full h-full">
          <CarousellBanners />
          <Hero />
          <ProjectsWithFilter categories={projectCategoriesData.data} numProjects={totalProjects} projectsData={projectsData.data}/>
        </div>
      </div>
    </>
  );
}
