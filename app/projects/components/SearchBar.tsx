"use client";
import { Listbox } from "@headlessui/react";
import {
  FunnelIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Categories = [
  { id: 1, name: "All Projects" },
  { id: 2, name: "Wallets" },
  { id: 3, name: "DEX" },
  { id: 4, name: "NFT" },
  { id: 5, name: "Analytics" },
  { id: 6, name: "NFT MarketPlace" },
  { id: 7, name: "Watch" },
  { id: 8, name: "Games" },
  { id: 9, name: "Music" },
  { id: 10, name: "News" },
  { id: 11, name: "Funds" },
  { id: 12, name: "Bridges" },
  { id: 13, name: "Message" },
  { id: 14, name: "Finance" },
  { id: 15, name: "Create" },
  { id: 16, name: "Decentralized Identity" },
  { id: 17, name: "Liquid Staking" },
  { id: 18, name: "Ecommerce" },
  { id: 19, name: "Education" },
  { id: 20, name: "Developer Tools" },
];

export default function SearchBar() {
  const [selected, setSelected] = useState<string>("");

  return (
    <>
      <div className="flex items-start gap-1 font-lato text-2xl font-extrabold tracking-[1px] text-[#06242E]">
        Projects
        <InformationCircleIcon className=" w-[14px] h-[14px]" />
      </div>
      <div className="flex justify-end items-start gap-6 flex-grow flex-shrink-0 basis-0 self-stretch">
        <div className="flex w-[268px] h-12 px-4 justify-between items-center rounded-lg bg-[#ECF0F1]">
          <input
            type="text"
            placeholder="Search projects"
            className=" font-plusjakartasans text-base leading-[26px] font-normal bg-[#ECF0F1] text-left focus:outline-none"
          />
          <MagnifyingGlassIcon className=" w-5 h-5" />
        </div>
        <Listbox value={selected} onChange={setSelected}>
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
          <Listbox.Options className=" absolute -bottom-[280px] w-[268px] h-[272px] flex pt-2 pb-6 flex-col items-start gap-[2px] overflow-auto no-scrollbar rounded-lg border-[#D5DEE0] bg-[#ECF0F1] shadow-[0_6px_20px_0_rgba(13, 50, 62, 0.05)]">
            {Categories.map((category) => (
              <Listbox.Option
                key={category.id}
                value={category.name}
                className="flex py-2 px-4 justify-between items-center self-stretch"
              >
                {({ selected }) => (
                  <>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <div className=" font-plusjakartasans text-sm leading-[21px] font-semibold text-[#3B4242]">
                        {category.name}
                      </div>
                      <div className=" font-plusjakartasans text-xs leading-[18px] font-normal text-center">
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
        </Listbox>
      </div>
    </>
  );
}
