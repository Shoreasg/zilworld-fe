import { Metadata } from "next";
import { getProjectsData } from "../functions";
import MainComingSoonWeb from "./Web/MainComingSoonWeb";
import MainComingSoonMobile from "./Mobile/MainComingSoonMobile";

export const metadata: Metadata = {
  title: "ZilWorld-Ecosystem of Zilliqa",
  description: "Ecosystem of Zilliqa",
  icons: {
    icon: "/ZilWorld Logo.png",
  },
};

export default async function ComingSoon() {
  const projectsData = await getProjectsData();
  return (
    <>
      <div className="block lg:hidden z-20 ">
        <div className="flex flex-col w-full h-full">
          <MainComingSoonMobile projectsData={projectsData.data} />
        </div>
      </div>
      <div className="hidden lg:flex flex-grow basis-0 flex-shrink-0 self-stretch ">
        <div className="flex flex-col w-full h-full overflow-y-auto">
          <MainComingSoonWeb projectsData={projectsData.data} />
        </div>
      </div>
    </>
  );
}
