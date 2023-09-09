"use client";
import { useState } from "react";
import { CardProps } from "../../../types";
import { mapProjects } from "../../functions";
import FilterMenu from "./FilterMenu";

export default function ProjectsCard({
  projectsData,
  selected,
  setSelected,
  search,
}: CardProps) {
  return <>{mapProjects(selected, projectsData, search)}</>;
}
