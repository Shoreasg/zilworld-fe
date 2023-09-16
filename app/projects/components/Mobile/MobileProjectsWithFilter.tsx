"use client";
import { useState } from "react";
import { ProjectWithFilterProps } from "../../../../types";
import MobileSearchBar from "./MobileSearchBar";
import MobilePopularFilter from "./MobilePopularFilter";
import MobileProjectsCard from "./MobileProjectsCard";

export default function MobileProjectsWithFilter({
  categories,
  numProjects,
  projectsData,
  projectsRef,
}: ProjectWithFilterProps) {
  const [selected, setSelected] = useState<string>("");
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col">
      <div ref={projectsRef}>
      <MobileSearchBar
        categories={categories}
        numProjects={numProjects}
        setSelected={setSelected}
        selected={selected}
        setSearch={setSearch}
      />
      </div>
      <div className="border-t-[1px] border-[#D5DEE0] mx-4" />
      <MobilePopularFilter categories={categories} setSelected={setSelected} />
      <div className="flex w-full flex-col p-8 items-start gap-6">
          <MobileProjectsCard
            projectsData={projectsData}
            selected={selected}
            setSelected={setSelected}
            search={search}
          />
        </div>
    </div>
  );
}
