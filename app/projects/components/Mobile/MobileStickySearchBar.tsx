'use client'
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { plusJakartaSans } from "../../../components/font";
import { MobileSearchStickyBarProps } from "../../../../types";
import { useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { updateProjectCategoriesClicks } from "../../../functions";

export default function MobileStickySearchBar({categories,numProjects,setSelected,selected,setSearch,search,isClickSearch,setIsClickSearch,isClickSearchRef,isClickedFilter,setIsClickedFilter,isClickedFilterRef}:MobileSearchStickyBarProps) {
 

  const handleClickOutside = (e: MouseEvent)=> {
    if(isClickSearchRef.current && !isClickSearchRef.current.contains(e.target as Node)){
      setIsClickSearch(false);
    }
    if(isClickedFilterRef.current  && !isClickedFilterRef.current.contains(e.target as Node)){
      setIsClickedFilter(false);
    }
  }

  const onFilterChange = async (selectedValue: string) => {
    setSelected(selectedValue);
    await updateProjectCategoriesClicks(selectedValue);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
        <div className={`flex h-[48px] px-4 justify-between items-center flex-grow flex-shrink-0 basis-0 rounded-lg bg-[#ECF0F1] ${isClickSearch ? '':' max-w-[50%]'} ${isClickedFilter? "hidden":''}`}>
          <input
            type="text"
            placeholder="Search"
            className={`focus:outline-none bg-[#ECF0F1] ${plusJakartaSans.className} text-base leading-[26px] font-normal text-left placeholder-[#9AA3A3] ${isClickSearch ? 'w-full':'max-w-[50%]'}`}
            onClick={()=>setIsClickSearch(true)}
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            ref={isClickSearchRef}
          />
          <MagnifyingGlassIcon className="w-5 h-5" />
        </div>
        <Listbox value={selected ? selected : "All Projects"}
          onChange={onFilterChange}>
        <Listbox.Button ref={isClickedFilterRef} className={`flex relative h-[48px] w-full px-4 justify-between items-center flex-grow flex-shrink-0 basis-0 rounded-lg bg-[#ECF0F1] ${isClickedFilter? 'w-full':'max-w-[50%]'}   ${isClickSearch ? "hidden":''} `}onClick={()=>setIsClickedFilter(!isClickedFilter)}>
            <div
              className={`focus:outline-none bg-[#ECF0F1] ${plusJakartaSans.className} text-base leading-[26px] font-normal text-left placeholder-[#9AA3A3] ${isClickedFilter? 'w-full': 'max-w-[50%]'}`}
            >{selected ? (
              selected
            ) : (
              <div className="text-[#8e8e8e]">Filter</div>
            )}
        
          </div>
          <FunnelIcon className="w-5 h-5" />
          <Listbox.Options className=" absolute w-full right-0 top-16 self-stretch h-[272px] flex pt-[10px] pb-6 flex-col items-start gap-[2px] overflow-auto no-scrollbar border rounded-lg border-[#D5DEE0] bg-[#ECF0F1] shadow-[0_6px_20px_0_rgba(13,50,62,0.05)] z-30">
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
                          {`(${category.numCategories})`}
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
  </>
  );
}
