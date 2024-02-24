import { IProjectNameParams } from "../../../types";
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
        <div className="block xl:hidden z-20 ">
          <div className="flex flex-col w-full h-full">
          </div>
        </div>
        {/* web View */}
        <div className="hidden xl:flex flex-grow basis-0 flex-shrink-0 self-stretch ">
          <div className="flex flex-col w-full h-full overflow-y-auto">
            <ProjectWeb projectData={project} />
          </div>
        </div>
    </>
  );
}
