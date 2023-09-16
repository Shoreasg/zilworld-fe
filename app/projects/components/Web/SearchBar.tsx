"use client";
import { Listbox } from "@headlessui/react";
import {
  FunnelIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { plusJakartaSans } from "../../../components/font";
import { IProjectCategories, SearchBarProps } from "../../../../types";
import { updateProjectCategoriesClicks } from "../../../functions";


export default function SearchBar({categories,numProjects,setSelected,selected, setSearch}:SearchBarProps) {
  const [isShownPopUp, setIsShownPopUp] = useState(false);

  const onFilterChange = async (selectedValue:string) =>{
    
    setSelected(selectedValue)
    await updateProjectCategoriesClicks(selectedValue);

  }

  return (
    <>
      <div className={`flex items-start gap-1 text-2xl ${plusJakartaSans.className} font-extrabold tracking-[1px] text-[#06242E]`}>
        Projects
        <InformationCircleIcon className=" w-[14px] h-[14px] cursor-pointer relative" onMouseEnter={()=> setIsShownPopUp(true)} onMouseLeave={()=>setIsShownPopUp(false)}/>
      </div>
      <div className="flex justify-end items-start gap-6 flex-grow flex-shrink-0 basis-0 self-stretch">
        <div className="flex w-[268px] h-12 px-4 justify-between items-center rounded-lg bg-[#ECF0F1]">
          <input
            type="text"
            placeholder="Search projects"
            className={`${plusJakartaSans.className} text-base leading-[26px] font-normal bg-[#ECF0F1] text-left focus:outline-none`}
            onChange={e=>setSearch(e.target.value)}
          />
          <MagnifyingGlassIcon className=" w-5 h-5" />
        </div>
        <Listbox value={selected ? selected : "All Projects"} onChange={onFilterChange}>
          <Listbox.Button>
            <div className="flex w-[268px] h-12 px-4 justify-between items-center rounded-lg bg-[#ECF0F1]">
              {selected ? (
                selected
              ) : (
                <div className="text-[#8e8e8e]">Filter</div>
              )}
              <FunnelIcon className="w-5 h-5" />
            </div>
          </Listbox.Button>
          <Listbox.Options className=" absolute -bottom-[256px] w-[268px] h-[272px] flex pt-2 pb-6 flex-col items-start gap-[2px] overflow-auto no-scrollbar rounded-lg border border-[#D5DEE0] bg-[#ECF0F1] shadow-[0_6px_20px_0_rgba(13,50,62,0.05)]">
          <Listbox.Option
                key={0}
                value={"All Projects"}
                className="flex py-2 px-4 justify-between items-center self-stretch border-t-0 border-r-0 border-l-0 border-b border-solid border-[#E6EAEB]"
              >
              {({active, selected }) => (
                  <>
                    <div className={`flex items-center gap-2 cursor-pointer ${active || selected ? `${plusJakartaSans.className} text-sm leading-[21px] text-[#3B4242] font-semibold`:`${plusJakartaSans.className} text-xs leading-[18px] font-normal text-center`}`} >
                      <div>
                      All Projects
                      </div>
                      <div>
                        ({numProjects})
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
            {categories.map((category:IProjectCategories,key:number) => (
              <Listbox.Option
                key={key+1}
                value={category.name}
                className="flex py-2 px-4 justify-between items-center self-stretch border-t-0 border-r-0 border-l-0 border-b border-solid border-[#E6EAEB]"
              >
                {({active, selected }) => (
                  <>
                    <div className={`flex items-center gap-2 cursor-pointer ${active || selected ? `${plusJakartaSans.className} text-sm leading-[21px] text-[#3B4242] font-semibold`:`${plusJakartaSans.className} text-xs leading-[18px] font-normal text-center`}`} >
                      <div>
                        {category.name}
                      </div>
                      <div>
                        ({category.numCategories})
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
        </Listbox>
      </div>
      {isShownPopUp && (<div className=" absolute top-14 left-[164px] inline-flex px-6 py-4 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-[0_4px_16px_0_rgba(36,87,102,0.15)]">
        <p className={`w-[345px] ${plusJakartaSans.className} font-semibold text-base leading-[26px] text-[#06242E]`}>Disclaimer </p>
        <p className={`w-[345px] ${plusJakartaSans.className} font-normal text-sm leading-[21px] text-[#143E4A]`}>Please note that listing entities and applications on this site does not imply an endorsement by ZilWorld or Zilliqa in any way, nor does it constitute an official statement or affiliation with either organization.</p>
        <p className={`w-[345px] ${plusJakartaSans.className} font-normal text-sm leading-[21px] text-[#143E4A]`}>It is important to conduct independent due diligence before engaging with or using any Dapps listed on this site and to not rely solely on the information provided. ZilWorld and Zilliqa take no responsibility for the accuracy of the information provided by the entities, projects, or applications listed on this site.</p>
      </div>)}
    </>
  );
}
