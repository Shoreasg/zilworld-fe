import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { lato, plusJakartaSans } from "../../components/font";



export default function MobileHero() {
  return (
    <div className="relative mt-6 h-[314px] rounded-lg">
      <div className="absolute inset-0 bg-[url('/HeroBG.jpg')] bg-cover bg-no-repeat bg-center opacity-5 rounded-lg" />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className={`${plusJakartaSans.className} text-lg font-bold text-[#06242E] text-right`}>
            Your Hub For Everything Zilliqa
          </div>
          <div className={`${lato.className} text-6xl leading-[60px] font-extrabold tracking-[0.06rem] text-[#143E4A] text-righ gap-2`}>
            ZilWorld
          </div>
        </div>
        <div className="absloute inset-0 flex justify-center items-center gap-6 pt-6">
          <button className={`flex py-2 px-4 items-center gap-2 rounded-lg border-2 border-[#FFC224] bg-[#FFC224] text-[#06242E] ${plusJakartaSans.className} text-sm leading-[21px] font-semibold`}>
            Start Browsing
          </button>
          <button className={`flex items-center gap-2 py-2 px-4 rounded-lg border-2 border-[#06242E] text-sm leading-[21px] font-semibold ${plusJakartaSans.className} text-center`}>
            Get Listed
            <ChevronRightIcon className=" w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
