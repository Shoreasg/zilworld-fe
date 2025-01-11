import { Metadata } from "next";
import {getTwitterList } from "../functions";
import MainLatestNewsWeb from "./Web/MainLatestNewsWeb";
import MainLatestNewsMobile from "./Mobile/MainLatestNewsMobile";


export const metadata: Metadata = {
  title: "ZilWorld-Ecosystem of Zilliqa",
  description: "Ecosystem of Zilliqa",
  icons: {
    icon: "/ZilWorld Logo.png",
  },
};

export default async function LatestNews() {
  // const latestNews =await getTwitterList();
  return (
    <>
      <div className="block lg:hidden z-20 ">
        <div className="flex flex-col w-full h-full">
          <MainLatestNewsMobile/>
        </div>
      </div>
      <div className="hidden lg:flex flex-grow basis-0 flex-shrink-0 self-stretch ">
        <div className="flex flex-col w-full h-full overflow-y-auto">
          {/* <MainLatestNewsWeb twitterList={latestNews.data}/> */}
          <MainLatestNewsWeb />
        </div>
      </div>
    </>
  );
}
