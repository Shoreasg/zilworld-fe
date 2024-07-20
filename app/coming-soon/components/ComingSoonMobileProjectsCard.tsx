"use client";

import { ComingSoonMobileCardProps } from "../../../types";
import { mapMobileComingSoonProjects, mapProjects } from "../../functions";


export default function ComingSoonMobileProjectsCard({
  projectsData,
}: ComingSoonMobileCardProps) {
  return <>{mapMobileComingSoonProjects(projectsData)}</>;
}
