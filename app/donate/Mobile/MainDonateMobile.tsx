"use client";
import { useState } from "react";
import MobileCarousellBanners from "../../components/MobileCarousellBanners";
import { DocumentDuplicateIcon } from "@heroicons/react/20/solid";

export default function MainDonateMobile() {

  const [copied, setCopied] = useState(false);
  const [onHoverCopy, setOnHoverCopy] = useState(false);
  const donationAddress = "zil1pytaesxsedaw7rvvcx2qwx58n74wpfywckde6s";

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(donationAddress);
      setCopied(true);
      setOnHoverCopy(false);
      setTimeout(() => setCopied(false), 2000); // Display copied message for 2 seconds
    } catch (error) {
      console.error("Failed to copy URL:", error);
    }
  };
  return (
    <>
      <MobileCarousellBanners />
      <div className="flex flex-row self-stretch justify-center items-center gap-2 pt-10 pb-6 py-2 pl-4">
        <div className="flex flex-col justify-start items-start gap-2 p-0 w-full">
          <div className=" font-plusjakartasans font-bold text-center text-base text-[#06242E]">
            DONATE
          </div>
          <div className="font-plusjakartasans text-lg font-extrabold leading-[1.4] text-[#06242e]">
            We Thank You For Your Support!
          </div>
        </div>
      </div>
      <hr className="border-t-[1px] border-[#D5DEE0] mx-4" />
      <div className="flex w-full flex-col">
      <div className="flex flex-col justify-center items-center gap-8 p-8">
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <div className=" font-plusjakartasans text-sm font-bold text-[#06242e]">
            ZIL donation address:
          </div>
          <div className=" w-fit flex flex-row justify-center items-center gap-[10px] py-[11px] px-[14px] bg-[#ecf0f1] rounded-lg">
            <p className=" font-plusjakartasans text-center text-[#143e4a] text-sm">
              {donationAddress}
            </p>
            <button
              onClick={handleCopyUrl}
              onMouseEnter={() => setOnHoverCopy(true)}
              onMouseLeave={() => setOnHoverCopy(false)}
              className=" relative"
            >
              <DocumentDuplicateIcon className="w-[13px] h-[13px] text-[#06242e]" />
              {onHoverCopy && (
                <div className="tooltip absolute top-9 right-4 inline-flex px-3 py-1 gap-2 rounded-lg bg-gray-200 shadow-md w-fit font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap">
                  Click to copy link
                </div>
              )}
              {copied && (
                <div className="tooltip absolute top-9 right-2 inline-flex px-3 py-1 gap-2 rounded-lg bg-[#3B98444C] shadow-md w-fit font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap">
                  Copied to Clipboard
                </div>
              )}
            </button>
          </div>
          <div className="flex flex-col justify-center items-center pt-8 ">
            <p className=" text-center text-[#143e4a] text-sm">
              ZilWorld is a self-funded passion project and donations will
            </p>
            <p className="text-center text-[#143e4a] text-sm">
              contribute to the development of our site.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
