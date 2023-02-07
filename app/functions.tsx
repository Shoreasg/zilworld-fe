import Link from "next/link";
import { IProjects } from "../types";
export const mapProjects = (category: string, data: IProjects[]) => {
  //function to map the projects into category
  if (!data.some(p => p.category === category)) {
    return data.map((projects: IProjects, key: number) => {
      return (
        <Link key={projects.name} href={`/projects/${projects.name}`}>
          <div className="rounded-md bg-gradient-to-r to-[#0A7581] from-[#4DBBBA] p-1 hover:scale-110 w-fit m-auto">
            <div className="h-[250px] w-[250px] divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
              <div className="flex flex-1 flex-col p-8">
                <img
                  className="mx-auto h-32 w-32"
                  src={projects.icon}
                  alt="token icon"
                />
                <h3 className="mt-4 text-m font-medium text-center text-gray-900">
                  {projects.name}
                </h3>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  }
  return data
    .filter((project) => project.category === category)
    .map((projects: IProjects, key: number) => {
      return (
        <Link key={projects.name} href={`/projects/${projects.name}`}>
          <div className="rounded-md bg-gradient-to-r to-[#0A7581] from-[#4DBBBA] p-1 hover:scale-110 w-fit m-auto">
            <div className="h-[250px] w-[250px] divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
              <div className="flex flex-1 flex-col p-8">
                <img
                  className="mx-auto h-32 w-32"
                  src={projects.icon}
                  alt="token icon"
                />
                <h3 className="mt-4 text-m font-medium text-center text-gray-900">
                  {projects.name}
                </h3>
              </div>
            </div>
          </div>
        </Link>
      );
    });
};

export default async function getProjectsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
    cache: "no-store",
  });
  return res.json();
}
