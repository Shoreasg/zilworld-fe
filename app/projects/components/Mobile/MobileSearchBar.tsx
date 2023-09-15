"use client";
import { Listbox } from "@headlessui/react";
import {
  FunnelIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { plusJakartaSans } from "../../../components/font";
import { MobileSearchBarProps } from "../../../../types";
import { updateProjectCategoriesClicks } from "../../../functions";

export default function MobileSearchBar({
  categories,
  numProjects,
  setSelected,
  selected,
  setSearch,
}: MobileSearchBarProps) {
  const [isShownPopUp, setIsShownPopUp] = useState(false);

  const onFilterChange = async (selectedValue: string) => {
    setSelected(selectedValue);
    await updateProjectCategoriesClicks(selectedValue);
  };

  return (
    <>
      <div
        className={`flex items-start gap-1 pt-6 pr-4 pb-0 pl-4  ${plusJakartaSans.className} relative z-30`}
      >
        <p className="font-bold text-center text-lg text-[#06242E]">Projects</p>
        <InformationCircleIcon
          className=" w-[14px] h-[14px] cursor-pointer "
          onClick={() => setIsShownPopUp(!isShownPopUp)}
        />
        {isShownPopUp && (
          <div className=" absolute w-[278px] top-[46px] left-[96px]  inline-flex px-6 py-4 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-[0_4px_16px_0_rgba(36,87,102,0.15)]">
            <p
              className={`${plusJakartaSans.className} font-semibold text-base leading-[26px] text-[#06242E] self-stretch`}
            >
              Disclaimer{" "}
            </p>
            <p
              className={` ${plusJakartaSans.className} font-normal text-sm leading-[21px] text-[#143E4A] self-stretch`}
            >
              Please note that listing entities and applications on this site
              does not imply an endorsement by ZilWorld or Zilliqa in any way,
              nor does it constitute an official statement or affiliation with
              either organization.
            </p>
            <p
              className={`${plusJakartaSans.className} font-normal text-sm leading-[21px] text-[#143E4A]  self-stretch`}
            >
              It is important to conduct independent due diligence before
              engaging with or using any Dapps listed on this site and to not
              rely solely on the information provided. ZilWorld and Zilliqa take
              no responsibility for the accuracy of the information provided by
              the entities, projects, or applications listed on this site.
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-end w-full gap-4 p-4 flex-col">
        <div className="flex w-full h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#ECF0F1]">
          <input
            type="text"
            placeholder="Search projects"
            className={`${plusJakartaSans.className} text-base leading-[26px] font-normal bg-[#ECF0F1] text-left focus:outline-none`}
            onChange={(e) => setSearch(e.target.value)}
          />
          <MagnifyingGlassIcon className=" w-5 h-5" />
        </div>
        <Listbox
          value={selected ? selected : "All Projects"}
          onChange={onFilterChange}
        >
          <Listbox.Button className={"relative"}>
            <div className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#ECF0F1]">
              {selected ? (
                selected
              ) : (
                <div className="text-[#8e8e8e]">Filter</div>
              )}
              <FunnelIcon className="w-5 h-5" />
            </div>
            <Listbox.Options className=" absolute w-full top-16 self-stretch h-[272px] flex pt-[10px] pb-6 flex-col items-start gap-[2px] overflow-auto no-scrollbar rounded-lg border-[#D5DEE0] bg-[#ECF0F1] shadow-[0_6px_20px_0_rgba(13,50,62,0.05)] z-30">
              <Listbox.Option
                key={0}
                value={"All Projects"}
                className="flex py-2 px-4 justify-between items-center self-stretch border-t-0 border-r-0 border-l-0 border-b border-solid border-[#E6EAEB]"
              >
                {({ active, selected }) => (
                  <>
                    <div
                      className={`flex items-center gap-2 cursor-pointer ${
                        active || selected
                          ? `${plusJakartaSans.className} text-sm leading-[21px] text-[#3B4242] font-semibold`
                          : `${plusJakartaSans.className} text-xs leading-[18px] font-normal text-center`
                      }`}
                    >
                      <div>All Projects</div>
                      <div>({numProjects})</div>
                    </div>
                    {selected ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <circle cx="6" cy="6.5" r="6" fill="#097A8E" />
                      </svg>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
              {categories.map((category, key) => (
                <Listbox.Option
                  key={key + 1}
                  value={category.name}
                  className="flex py-2 px-4 justify-between items-center self-stretch border-t-0 border-r-0 border-l-0 border-b border-solid border-[#E6EAEB]"
                >
                  {({ active, selected }) => (
                    <>
                      <div className="flex items-center gap-2 cursor-pointer ">
                        <div
                          className={`${
                            plusJakartaSans.className
                          } text-sm leading-[21px] ${
                            active || selected
                              ? `${plusJakartaSans.className} text-sm leading-[21px] text-[#3B4242] font-semibold`
                              : `${plusJakartaSans.className} text-xs leading-[18px] font-normal text-center`
                          }`}
                        >
                          {category.name}
                        </div>
                        <div
                          className={` ${plusJakartaSans.className} text-xs leading-[18px] font-normal text-center`}
                        >
                          (1)
                        </div>
                      </div>
                      {selected ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                        >
                          <circle cx="6" cy="6.5" r="6" fill="#097A8E" />
                        </svg>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox.Button>
        </Listbox>
      </div>
    </>
  );
}
