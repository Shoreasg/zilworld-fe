import Link from "next/link";
import { IProjects } from "../types";
import Image from "next/image";
import { lato, plusJakartaSans } from "./components/font";
import { Dispatch, SetStateAction } from "react";
export const mapProjects = (
  category: string,
  data: IProjects[],
  search: string,
  setSelected: Dispatch<SetStateAction<string>>
) => {
  //function to map the projects into category
  const projectGroups: JSX.Element[] = [];
  let currentGroups: JSX.Element[] = [];

  const onClickSelectedTab = async (catName:string)=>{
    setSelected(catName);
    await updateProjectCategoriesClicks(catName);
  }

  data.forEach((project, index) => {
    const matchSearch = project.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      category === "All Projects" ||
      category === "" ||
      project.category.includes(category);
    if (matchesCategory && (matchSearch || search === "")) {
      currentGroups.push(
        <div className="flex p-6 flex-col items-start gap-4 flex-grow flex-shrink-0 basis-0 rounded-lg border border-[#36788C54] bg-[#ECF0F1]">
          <div className="flex flex-col justify-center items-start gap-1 self-stretch">
            <div className="flex items-center gap-2">
              <div className="flex justify-center w-8 h-8 items-center rounded">
                <Image
                  width={32}
                  height={32}
                  className="flex-shrink-0 rounded-md"
                  src={project.icon}
                  alt={project.name}
                />
              </div>
              <p
                className={`${lato.className} font-extrabold text-base tracking-[1px] capitalize`}
              >
                {project.name}
              </p>
            </div>
            <div className="flex pt-2 pr-2 pb-2 items-start gap-2 self-stretch">
              <p
                className={`${plusJakartaSans.className} text-xs leading-[18px] font-normal text-[#3B4242]`}
              >
                {project.description}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 self-stretch">
            {project.category.map((name, key) => {
              return (
                <button
                  className="flex h-5 px-2 py-[6px] justify-center items-center gap-1 rounded bg-[#D5DEE0]"
                  key={key}
                  onClick={()=>onClickSelectedTab(name)}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>
      );
    }
    if (currentGroups.length === 3 || index === data.length - 1) {
      projectGroups.push(
        <div className="flex items-start gap-6 self-stretch">
          {currentGroups}
        </div>
      );
      currentGroups = [];
    }
  });

  return projectGroups;
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

export async function getProjectsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getProjectsCategoriesData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/ProjectCategories`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export async function updateProjectCategoriesClicks(catName: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/ProjectCategories/update`,
    {
      method: "PUT",
      headers: {
        authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: catName }),
      cache: "no-store",
    }
  );
  return res.json();
}
