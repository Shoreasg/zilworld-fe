import _ from "lodash";
import { IProjects } from "../../types";
import CarousellBanners from "../components/MobileCarousellBanners";
import Note from "../components/Note";
import ComingSoonCard from "./components/ComingSoonCard";
import { getProjectsData } from "../functions";

export default async function Coming_Soon() {
  const projectsData = await getProjectsData();
  const projects: IProjects[] = _.shuffle(projectsData.data);
  return (
    <>
      <div className="pt-[3.5rem] pr-[3.5rem] pb-0 pl-[3.5rem] m-0 w-full overflow-y-auto flex flex-col">
        <CarousellBanners />
        <div className="border-t"></div>
        <div className="flex flex-row justify-center mt-6">
          <div className="flex flex-col items-center w-fit lg:w-1/2  justify-center">
            <p className="text-center text-xl">
              This page highlights some of the entities and applications
              currently building within the Zilliqa ecosystem, but it may not
              encompass all of them. Additionally, due to the rapid growth of
              the ecosystem, some information presented here may be outdated.
              Nonetheless, this list serves as a helpful introduction to
              exploring the Zilliqa ecosystem and the exciting projects
              currently being built on the platform.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className=" w-fit lg:w-[700px] rounded-md p-4">
            <Note />
          </div>
        </div>

        <div className="mx-auto py-6 max-w-7xl px-4 sm:px-6 md:px-8 flex justify-center">
          {/* <ComingSoonCard projectsData={projects} /> */}
        </div>
      </div>
    </>
  );
}
