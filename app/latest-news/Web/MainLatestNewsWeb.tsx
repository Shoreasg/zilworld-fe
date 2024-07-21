"use client";
import CarousellBanners from "../../components/CarousellBanners";
import LatestNewsTwitterWidget from "../components/LatestNewsTwitterWidget";


export default function MainLatestNewsWeb(){
  return (
    <>
      <CarousellBanners />
      <div className="flex flex-row self-stretch justify-center items-center gap-2 pt-10 pb-6 py-2 mx-14">
        <div className="flex flex-col justify-start items-start gap-2 p-0 w-full">
          <div className=" font-plusjakartasans text-sm text-right text-[#143e4a] tracking-[1px] font-extrabold">
            Discover
          </div>
           <div className="flex flex-row">
            <div className=" font-plusjakartasans text-xl font-extrabold leading-[1.4] text-right text-[#06242e]">
              The Latest Zilliqa Ecosystem News
            </div>
          </div>
          <hr className="border-t-[1px] border-[#D5DEE0] w-full" />
        </div>
   
      </div>
      <div className="mx-14">
      <LatestNewsTwitterWidget/>
      </div>
    </>
  );
}
