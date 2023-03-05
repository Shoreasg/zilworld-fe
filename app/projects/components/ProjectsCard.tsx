"use client";
import { useState } from "react";
import { CardProps } from "../../../types";
import { mapProjects } from "../../functions";
import FilterMenu from "./FilterMenu";

export default function ProjectsCard({ projectsData }: CardProps) {
  const [selected, setSelected] = useState<string>("All Projects");

  return (
    <div className="flex flex-col justify-center">
      <FilterMenu selected={selected} setCategories={setSelected} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects(selected, projectsData)}
      </div>
    </div>
  );
}
