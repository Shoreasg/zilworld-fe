import { IProjectNameParams, IProjects } from "../../../types";
import ProjectDetailsCard from "./components/projectDetailsCard";
import ProjectTwitterWidget from "./components/projectTwitterWidget";

async function getProjectData(projectName: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${projectName}`
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
