import { IProjects } from "../../types";
import getProjectsData from "../functions";
import ProjectsCard from "./components/ProjectsCard";
import * as _ from "lodash";
import MobileCarousellBanners from "../components/MobileCarousellBanners";
import CarousellBanners from "../components/CarousellBanners";
import Hero from "./components/Hero";
import MobileHero from "./components/MobileHero";
import SearchBar from "./components/SearchBar";
import { Metadata } from "next";
import MobileSearchBar from "./components/MobileSearchBar";

export const metadata: Metadata = {
  title: "ZilWorld-Ecosystem of Zilliqa",
  description: "Ecosystem of Zilliqa",
  icons: {
    icon: "/ZilWorld Logo.png",
  },
};

export default async function Projects() {
  const projectsData = await getProjectsData();
  const projects: IProjects[] = _.shuffle(projectsData.data);
  return (
    <>
      <div className="block lg:hidden pt-[54px] z-20">
        <div className="flex flex-col w-full h-full">
          <MobileCarousellBanners />
          <MobileHero />
          <MobileSearchBar />
        </div>

        {/* old code */}
        {/* <div className="pt-[3.5rem] pr-[3.5rem] pb-0 pl-[3.5rem] m-0 w-screen h-screen overflow-y-auto flex flex-col">
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
        <div className="flex flex-row justify-center">
          <ProjectsCard projectsData={projects} />
        </div>
      </div> */}
      </div>
      <div className="hidden lg:flex flex-grow basis-0 flex-shrink-0 self-stretch overflow-y-auto">
        <div className="flex flex-col w-full h-full">
          <CarousellBanners />
          <Hero />
          <div className="sticky top-0 flex w-full py-6 items-end gap-2 px-14">
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
}
