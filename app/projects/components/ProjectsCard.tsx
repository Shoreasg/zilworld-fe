"use client";
import { useContext, useState } from "react";
import { CardProps } from "../../../types";
import { mapProjects } from "../../functions";
import FilterMenu from "./FilterMenu";
import { onMenuClickContext } from "../../context/MenuContext";

export default function ProjectsCard({
  projectsData,
  selected,
  setSelected,
  search,
}: CardProps) {

  const menuClickContext = useContext(onMenuClickContext);
  return <>{mapProjects(selected, projectsData, search,setSelected, menuClickContext)}</>;
}
