"use client";

import { useRef } from "react";
import MobileCarousellBanners from "../../../components/MobileCarousellBanners";
import MobileHero from "./MobileHero";
import { MainProjectMobileProps } from "../../../../types";
import MobileProjectsWithFilter from "./MobileProjectsWithFilter";

export default function MainProjectMobile({
  categories,
  numProjects,
  projectsData,
}: MainProjectMobileProps) {
  const projectsRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <MobileCarousellBanners />
      <MobileHero projectsRef={projectsRef}/>
      <MobileProjectsWithFilter
        categories={categories}
        numProjects={numProjects}
        projectsData={projectsData}
        projectsRef={projectsRef}
      />
      {/* <CarousellBanners />
        <Hero projectsRef={projectsRef}/>
      <ProjectsWithFilter
        categories={categories}
        numProjects={numProjects}
        projectsData={projectsData}
        projectsRef={projectsRef}
      /> */}
    </>
  );
}
