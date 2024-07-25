import { INewProjectNameParams } from "../../../types";
import { redirect } from "next/navigation";
import Coming_Soon_Web from "../components/ComingSoonWeb";
import { Metadata } from "next";
import Coming_Soon_Mobile from "../components/ComingSoonMobile";

export const metadata: Metadata = {
  title: "ZilWorld-Ecosystem of Zilliqa",
  description: "Ecosystem of Zilliqa",
  icons: {
    icon: "/ZilWorld Logo.png",
  },
};

async function getProjectData(projectName: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${projectName}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function Coming_Soon_Projects({ params }: Readonly<INewProjectNameParams>) {
  const projectData = await getProjectData(params.newproject);
  const project = projectData.data;
  if (project === "No projects found") {
    redirect("/coming-soon");
  }
  return (
    <>
        {/* Mobile View */}
        <div className="block xl:hidden z-20 ">
        <div className="flex flex-col w-full h-full overflow-y-auto">
          <Coming_Soon_Mobile NewProjectData={project}/>
          </div>
        </div>
        {/* web View */}
        <div className="hidden xl:flex flex-grow basis-0 flex-shrink-0 self-stretch ">
          <div className="flex flex-col w-full h-full overflow-y-auto">
            <Coming_Soon_Web NewProjectData={project} />
          </div>
        </div>
    </>
  );
}
