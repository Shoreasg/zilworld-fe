"use client";
import { useState } from "react";
import {ProjectWithFilterProps } from "../../../types";
import PopularFilter from "./PopularFilter";
import SearchBar from "./SearchBar";
import ProjectsCard from "./ProjectsCard";

export default function ProjectsWithFilter({categories,numProjects,projectsData}:ProjectWithFilterProps) {
  const [selected, setSelected] = useState<string>("");
  const [search, setSearch] = useState("");


  
  return (
    <div className="flex flex-col">
      <div className="sticky border-b-[1px] bg-[#F5F5F5] border-[#D5DEE0]  top-0 flex w-full py-6 items-end gap-2 px-14">
        <SearchBar categories={categories} numProjects={numProjects} setSelected={setSelected} selected={selected} setSearch={setSearch}/>
      </div>
      <PopularFilter categories={categories} setSelected={setSelected} />
      <div className="flex w-full p-8 flex-col px-[88px] items-start gap-6">
       <ProjectsCard projectsData={projectsData} selected={selected} setSelected={setSelected} search={search}/>
      </div>
    </div>
  );
}
