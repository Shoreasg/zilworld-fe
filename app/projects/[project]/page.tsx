import { IProjectNameParams, IProjects } from "../../../types";
import ProjectDetailsCard from "./components/ProjectDetailsCard";
import ProjectTwitterWidget from "./components/ProjectTwitterWidget";

async function getProjectData(projectName: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${projectName}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function Project({ params }: IProjectNameParams) {
  const projectData = await getProjectData(params.project);
  const project: IProjects = projectData.data;
  return (
    <>
      <ProjectDetailsCard projectData={project} />
      <ProjectTwitterWidget projectData={project} />
    </>
  );
}
