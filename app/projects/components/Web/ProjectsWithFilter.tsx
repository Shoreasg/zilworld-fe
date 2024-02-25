"use client";
import { useState } from "react";
import {ProjectWithFilterProps } from "../../../../types";
import PopularFilter from "./PopularFilter";
import SearchBar from "./SearchBar";
import ProjectsCard from "./ProjectsCard";

export default function ProjectsWithFilter({categories,numProjects,projectsData, projectsRef}:Readonly<ProjectWithFilterProps>) {
  const [selected, setSelected] = useState<string>("");
  const [search, setSearch] = useState("");


  
  return (
    <div className="flex flex-col">
      <div className="sticky bg-[#F5F5F5] top-0 flex w-full py-6 items-end gap-2 px-14 z-20 " ref={projectsRef} >   
        <SearchBar categories={categories} numProjects={numProjects} setSelected={setSelected} selected={selected} setSearch={setSearch}/>
      </div>
      <div className="border-t-[1px] border-[#D5DEE0] mx-14"/>
      <PopularFilter categories={categories} setSelected={setSelected} />
      <div className="flex w-full p-8 flex-col px-[88px] items-start gap-6">
      <div className="grid grid-cols-3 gap-6 items-stretch">
       <ProjectsCard projectsData={projectsData} selected={selected} setSelected={setSelected} search={search}/>
       </div>
      </div>
    </div>
  );
}
