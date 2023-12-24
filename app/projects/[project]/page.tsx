import { IProjectNameParams } from "../../../types";
import ProjectDetailsCard from "./components/ProjectDetailsCard";
import ProjectTwitterWidget from "./components/ProjectTwitterWidget";
import { redirect } from "next/navigation";
import ProjectAnnouncement from "./components/ProjectAnnouncement";
import ProjectWeb from "./components/ProjectWeb/ProjectWeb";

async function getProjectData(projectName: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${projectName}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function Project({ params }: Readonly<IProjectNameParams>) {
  const projectData = await getProjectData(params.project);
  const project = projectData.data;
  if (project === "No projects found") {
    redirect("/projects");
  }
  return (
    <>
        {/* Mobile View */}
        <div className="block lg:hidden z-20 ">
          <div className="flex flex-col w-full h-full">
            <ProjectDetailsCard projectData={project} />
            <ProjectAnnouncement projectData={project} />
            <ProjectTwitterWidget projectData={project} />
          </div>
        </div>
        {/* web View */}
        <div className="hidden lg:flex flex-grow basis-0 flex-shrink-0 self-stretch ">
          <div className="flex flex-col w-full h-full overflow-y-auto">
            <ProjectWeb projectData={project} />
          </div>
        </div>
    </>
  );
}
