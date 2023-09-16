import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { plusJakartaSans } from "../../../components/font";

export default function MobileStickySearchBar() {
  return (
    <>
        <div className="flex h-[48px] px-4 justify-between items-center flex-grow flex-shrink-0 basis-0 rounded-lg bg-[#ECF0F1]">
          <input
            type="text"
            placeholder="Search"
            className={`focus:outline-none bg-[#ECF0F1] ${plusJakartaSans.className} text-base leading-[26px] font-normal text-left placeholder-[#9AA3A3]`}
          />
          <MagnifyingGlassIcon className="w-5 h-5" />
        </div>
        <div className="flex h-[48px] px-4 justify-between items-center flex-grow flex-shrink-0 basis-0 rounded-lg bg-[#ECF0F1]">
            <input
              type="text"
              placeholder="Filter"
              className={`focus:outline-none bg-[#ECF0F1] ${plusJakartaSans.className} text-base leading-[26px] font-normal text-left placeholder-[#9AA3A3]`}
            />
            <FunnelIcon className="w-5 h-5" />
          </div>
  
  </>
  );
}
