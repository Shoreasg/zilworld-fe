import { IProjects } from "../../types";
import getProjectsData from "../functions";
import WalletsCard from "./components/WalletsCard";

export default async function Wallets() {
  const projectsData = await getProjectsData()
  const projects: IProjects[] = projectsData.data;
  return (
    <>
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="mx-auto py-6 max-w-7xl px-4 sm:px-6 md:px-8 flex justify-center">
          <WalletsCard projectsData={projects} />
        </div>
      </div>
    </>
  )
}