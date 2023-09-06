"use client";
import { useState } from "react";
import { CardProps } from "../../../types";
import { mapProjects } from "../../functions";
import FilterMenu from "./FilterMenu";

export default function ProjectsCard({ projectsData }: CardProps) {
  const [selected, setSelected] = useState<string>("All Projects");

  return (

      <div className="">
        {mapProjects(selected, projectsData)}
      </div>
   
  );
}
