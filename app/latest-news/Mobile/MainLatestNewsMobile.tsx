import MobileCarousellBanners from "../../components/MobileCarousellBanners";
import LatestNewsTwitterWidget from "../components/LatestNewsTwitterWidget";

export default function MainLatestNewsMobile() {
  return (
    <>
      <MobileCarousellBanners />
      <div className="flex flex-row self-stretch justify-center items-center gap-2 pt-10 pb-6 py-2 pl-4">
        <div className="flex flex-col justify-start items-start gap-2 p-0 w-full">
          <div className=" font-plusjakartasans font-bold text-center text-base text-[#06242E]">
            ZILLIQA ECOSYSTEM
          </div>
          <div className="font-plusjakartasans text-lg font-extrabold leading-[1.4] text-[#06242e]">
            The Latest Zilliqa Ecosystem News
          </div>
        </div>
      </div>
      <hr className="border-t-[1px] border-[#D5DEE0] mx-4" />
      <div className="flex w-full flex-col px-4">
        <LatestNewsTwitterWidget/>
      </div>
    </>
  );
}
