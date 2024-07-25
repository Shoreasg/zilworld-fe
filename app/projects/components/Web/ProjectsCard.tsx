"use client";
import { CardProps } from "../../../../types";
import { mapProjects } from "../../../functions";

export default function ProjectsCard({
  projectsData,
  selected,
  setSelected,
  search,
}: CardProps) {
  return <>{mapProjects(selected, projectsData, search,setSelected)}</>;
}
