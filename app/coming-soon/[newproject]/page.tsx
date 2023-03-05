import { INewProjectNameParams } from "../../../types";
import { redirect } from "next/navigation";
import NewProjectDetailsCard from "./NewProjectDetailsCard";
import NewProjectAnnouncement from "./NewProjectAnnouncement";
import NewProjectTwitterWidget from "./NewProjectTwitterWidget";

async function getProjectData(projectName: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${projectName}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function NewProject({ params }: INewProjectNameParams) {
  const projectData = await getProjectData(params.newproject);
  const project = projectData.data;
  if (project === "No projects found") {
    redirect("/projects");
  }
  return (
    <>
      <NewProjectDetailsCard NewProjectData={project} />
      <NewProjectAnnouncement NewProjectData={project} />
      <NewProjectTwitterWidget NewProjectData={project} />
    </>
  );
}
