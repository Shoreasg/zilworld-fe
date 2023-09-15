"use client";
import { CardProps } from "../../../../types";
import { mapMobileProjects } from "../../../functions";

export default function MobileProjectsCard({
  projectsData,
  selected,
  setSelected,
  search,
}: CardProps) {
  return <>{mapMobileProjects(selected, projectsData, search,setSelected)}</>;
}
