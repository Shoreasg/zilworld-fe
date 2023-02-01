import { IProjects } from "../../types";
import ProjectsCard from "./components/ProjectsCard";

async function getProjectsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
    cache: "no-store",
  });
  return res.json();
}
export default async function Projects() {
  const projectsData = await getProjectsData();
  const projects: IProjects[] = projectsData.data;
  return (
    <>
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
          </div>
          <div className="mx-auto py-6 max-w-7xl px-4 sm:px-6 md:px-8 flex justify-center">
            <ProjectsCard projectsData={projects} />
          </div>
        </div>
      </div>
    </>
  );
}
