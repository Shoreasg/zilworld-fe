"use client";
import { ComingSoonCardProps } from "../../../types";
import { mapComingSoonProjects } from "../../functions";


export default function ComingSoonProjectsCard({
  projectsData,
}: ComingSoonCardProps) {
  return <>{mapComingSoonProjects(projectsData)}</>;
}
