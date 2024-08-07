"use client";

import { useRef } from "react";
import { MainProjectWebProps } from "../../../../types";
import CarousellBanners from "../../../components/CarousellBanners";
import Hero from "./Hero";
import ProjectsWithFilter from "./ProjectsWithFilter";

export default function MainProjectWeb({categories,numProjects,projectsData}:Readonly<MainProjectWebProps>) {
    const projectsRef = useRef<HTMLDivElement>(null); 
  return (
    <>
      <CarousellBanners />
        <Hero projectsRef={projectsRef}/>
      <ProjectsWithFilter
        categories={categories}
        numProjects={numProjects}
        projectsData={projectsData}
        projectsRef={projectsRef}
      />
    </>
  );
}
