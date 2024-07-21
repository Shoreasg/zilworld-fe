"use client";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { MainComingSoonMobileProps } from "../../../types";
import MobileCarousellBanners from "../../components/MobileCarousellBanners";
import { plusJakartaSans } from "../../components/font";
import { useState } from "react";
import ComingSoonMobileProjectsCard from "../components/ComingSoonMobileProjectsCard";

export default function MainComingSoonMobile({
  projectsData,
}: MainComingSoonMobileProps) {
  const [isShownPopUp, setIsShownPopUp] = useState(false);
  return (
    <>
      <MobileCarousellBanners />
      <div className="flex flex-row self-stretch justify-center items-center gap-2 pt-10 pb-6 py-2 pl-4">
        <div className="flex flex-col justify-start items-start gap-2 p-0 w-full">
          <div className=" font-plusjakartasans font-bold text-center text-base text-[#06242E]">
            Discover
          </div>
          <div className="font-plusjakartasans text-xl font-extrabold leading-[1.4] text-[#06242e]">
            Upcoming Projects joining the Zilliqa Ecosystem
            <div className=" inline-flex relative">
              <InformationCircleIcon
                className=" w-[14px] h-[14px] cursor-pointer "
                onMouseEnter={() => setIsShownPopUp(true)}
                onMouseLeave={() => setIsShownPopUp(false)}
              />
              {isShownPopUp && (
                <div className=" absolute w-[278px] -left-[110px] top-6 inline-flex px-6 py-4 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-[0_4px_16px_0_rgba(36,87,102,0.15)] z-20">
                  <p
                    className={`w- ${plusJakartaSans.className} font-semibold text-base leading-[26px] text-[#06242E]`}
                  >
                    Disclaimer{" "}
                  </p>
                  <p
                    className={` ${plusJakartaSans.className} font-normal text-sm leading-[21px] text-[#143E4A]`}
                  >
                    Please note that listing entities and applications on this
                    site does not imply an endorsement by ZilWorld or Zilliqa in
                    any way, nor does it constitute an official statement or
                    affiliation with either organization.
                  </p>
                  <p
                    className={` ${plusJakartaSans.className} font-normal text-sm leading-[21px] text-[#143E4A]`}
                  >
                    It is important to conduct independent due diligence before
                    engaging with or using any Dapps listed on this site and to
                    not rely solely on the information provided. ZilWorld and
                    Zilliqa take no responsibility for the accuracy of the
                    information provided by the entities, projects, or
                    applications listed on this site.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col p-8 items-start gap-6">
        <ComingSoonMobileProjectsCard projectsData={projectsData} />
      </div>
    </>
  );
}
