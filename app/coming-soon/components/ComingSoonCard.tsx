"use client";
import { CardProps } from "../../../types";
import { mapComingSoonProjects } from "../../functions";

export default function ComingSoonCard({ projectsData }: CardProps) {
  return (
    <div className="ml-6 flex flex-col justify-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapComingSoonProjects(projectsData)}
      </div>
    </div>
  );
}
