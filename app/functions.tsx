import Link from "next/link";
import { IProjects } from "../types";
import Image from "next/image";
export const mapProjects = (category: string, data: IProjects[]) => {
  //function to map the projects into category
  if (!data.some((p) => p.category.includes(category))) {
    return data.map((projects: IProjects, key: number) => {
      return (
        <Link key={projects.name} href={`/projects/${projects.name}`}>
          <div className="rounded-md bg-gradient-to-r to-[#0A7581] from-[#4DBBBA] p-1 hover:scale-110 w-fit m-auto">
            <div className="h-[280px] w-[280px] divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
              <div className="flex flex-1 flex-col p-8">
                <Image
                  className="mx-auto"
                  src={projects.icon}
                  width={32}
                  height={32}
                  alt="token icon"
                />
                <h3 className="mt-4 text-m font-medium text-center text-gray-900">
                  {projects.name}
                </h3>
                {projects.category.length === 1 ? (
                  <div className="flex flex-row justify-center mt-2">
                    {projects.category.map((value) => {
                      return (
                        <span
                          key={projects.name}
                          className="inline-flex justify-center items-center rounded-full bg-gray-300 px-3 py-0.5 text-xs text-center font-medium text-gray-800"
                        >
                          {value}
                        </span>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {projects.category.map((value) => {
                      return (
                        <span
                          key={projects.name}
                          className="inline-flex justify-center items-center rounded-full bg-gray-300 px-3 py-0.5 text-xs text-center font-medium text-gray-800"
                        >
                          {value}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
      );
    });
  }
  return data
    .filter((project) => project.category.includes(category))
    .map((projects: IProjects, key: number) => {
      return (
        <Link key={projects.name} href={`/projects/${projects.name}`}>
          <div className="rounded-md bg-gradient-to-r to-[#0A7581] from-[#4DBBBA] p-1 hover:scale-110 w-fit m-auto">
            <div className="h-[280px] w-[280px] divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
              <div className="flex flex-1 flex-col p-8">
                <Image
                  className="mx-auto h-24 w-24"
                  src={projects.icon}
                  width={24}
                  height={24}
                  alt="token icon"
                />
                <h3 className="mt-3 text-sm font-medium text-center text-gray-900">
                  {projects.name}
                </h3>
                {projects.category.length === 1 ? (
                  <div className="flex flex-row justify-center mt-2">
                    {projects.category.map((value) => {
                      return (
                        <span
                          key={projects.name}
                          className="inline-flex justify-center items-center rounded-full bg-gray-300 px-3 py-0.5 text-xs text-center font-medium text-gray-800"
                        >
                          {value}
                        </span>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {projects.category.map((value) => {
                      return (
                        <span
                          key={projects.name}
                          className="inline-flex justify-center items-center rounded-full bg-gray-300 px-3 py-0.5 text-xs text-center font-medium text-gray-800"
                        >
                          {value}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
      );
    });
};

export const mapComingSoonProjects = (data: IProjects[]) => {
  return data.map((newProjects, key) => {
    return (
      <>
        {newProjects.isNew === true ? (
          <Link
            key={newProjects.name}
            href={`/coming-soon/${newProjects.name}`}
          >
            <div className="rounded-md bg-gradient-to-r to-[#0A7581] from-[#4DBBBA] p-1 hover:scale-110 w-fit m-auto">
              <div className="h-[280px] w-[280px] divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                <div className="flex flex-1 flex-col p-8">
                  <Image
                    className="mx-auto h-32 w-32"
                    src={newProjects.icon}
                    alt="token icon"
                  />
                  <h3 className="mt-4 text-m font-medium text-center text-gray-900">
                    {newProjects.name}
                  </h3>
                  {newProjects.category.length === 1 ? (
                    <div className="flex flex-row justify-center mt-2">
                      {newProjects.category.map((value) => {
                        return (
                          <span
                            key={newProjects.name}
                            className="inline-flex justify-center items-center rounded-full bg-gray-300 px-3 py-0.5 text-xs text-center font-medium text-gray-800"
                          >
                            {value}
                          </span>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {newProjects.category.map((value) => {
                        return (
                          <span
                            key={newProjects.name}
                            className="inline-flex justify-center items-center rounded-full bg-gray-300 px-3 py-0.5 text-xs text-center font-medium text-gray-800"
                          >
                            {value}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ) : (
          false
        )}
      </>
    );
  });
};

export default async function getProjectsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
    cache: "no-store",
  });
  return res.json();
}
