import { CurrencyDollarIcon, GlobeAltIcon, InformationCircleIcon, MagnifyingGlassIcon, ShareIcon } from "@heroicons/react/24/outline";
import { ProjectDetailsCardProps } from "../../types";
import { useState } from "react";
import { getCharLength, trimDescription } from "../functions";

export default function ProjectDetails({
  projectData,
}: Readonly<ProjectDetailsCardProps>) {
  const [copied, setCopied] = useState(false);
  const [onHoverCopy, setOnHoverCopy] = useState(false);
  const [onHoverInactive, setOnHoverInactive] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setOnHoverCopy(false);
      setTimeout(() => setCopied(false), 2000); // Display copied message for 2 seconds
    } catch (error) {
      console.error("Failed to copy URL:", error);
    }
  };
  return (
    <div className=" inline-flex flex-col items-start w-full">
      <div className="flex pt-4 px-6 flex-col items-start gap-6 w-full">
        <div className="flex flex-row w-full justify-between items-start">
          <div className="flex flex-col gap-3 items-start">
            <div className="flex flex-row items-start gap-3">
              <div className="text-center font-lato text-3xl leading-9 tracking-[1px] font-extrabold">
                {projectData.name}
              </div>
              {projectData.isBuilding ? (
                <div className="flex h-4 px-2 justify-center items-center gap-1 rounded-[32px] bg-[#ffc2243d] text-center leading-tight font-plusjakartasans text-[10px] font-normal ">
                  Building
                </div>
              ) : (
                <>
                  {" "}
                  {projectData.isActive ? (
                    <div className="flex h-4 px-2 justify-center items-center gap-1 rounded-[32px] bg-[#3B984462] text-center leading-tight font-plusjakartasans text-[10px] font-normal ">
                      Active
                    </div>
                  ) : (
                    <div className="flex relative h-4 px-2 justify-center items-center gap-1 rounded-[32px] bg-[#b5202062] text-center leading-tight font-plusjakartasans text-[10px] font-normal ">
                      Inactive
                      <InformationCircleIcon
                        className="h-[10px] w-[10px]"
                        onMouseEnter={() => setOnHoverInactive(true)}
                        onMouseLeave={() => setOnHoverInactive(false)}
                      />
                      {onHoverInactive && (
                        <div className="tooltip absolute top-[26px] left-11 flex flex-col py-4 px-6 gap-2 rounded-lg bg-gray-200 shadow-md w-[480px] font-plusjakartasans text-xs font-normal leading-[18px] -20">
                          <p>
                            Unfortunately, this project has been labeled as
                            inactive
                          </p>
                          <p>due to a lack of updates or being abandoned.</p>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="flex items-start gap-2">
              {projectData.category.map((name) => {
                return (
                  <div
                    key={name}
                    className="flex h-5 py-[6px] px-2 justify-center items-center gap-1 rounded bg-[#D5DEE0]"
                  >
                    {name}
                  </div>
                );
              })}
            </div>
            <div className=" flex flex-row items-center pt-6 pb-6">
              {getCharLength(projectData.description) > 265 ? (
                <p>
                  {!showMore ? (
                    <>
                      {trimDescription(projectData.description)}
                      {"..."}
                      <button onClick={handleShowMore} className=" font-bold">
                        Read More
                      </button>
                    </>
                  ) : (
                    <>
                      {projectData.description}
                      <button onClick={handleShowMore} className=" font-bold">
                        Read Less
                      </button>
                    </>
                  )}
                </p>
              ) : (
                <>{projectData.description}</>
              )}
            </div>
          </div>
          <button
            className="flex px-4 py-2 items-center gap-2 rounded-lg bg-[#E6EAEB] relative"
            onClick={handleCopyUrl}
            onMouseEnter={() => setOnHoverCopy(true)}
            onMouseLeave={() => setOnHoverCopy(false)}
          >
            <ShareIcon width={20} height={20} />
            {onHoverCopy && (
              <div className="tooltip absolute top-[46px] right-4 inline-flex px-3 py-1 gap-2 rounded-lg bg-gray-200 shadow-md w-fit font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap">
                Click to copy link
              </div>
            )}
            {copied && (
              <div className="tooltip absolute top-[46px] right-4  inline-flex px-3 py-1 gap-2 rounded-lg bg-[#3B98444C] shadow-md w-fit font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap">
                Copied to Clipboard
              </div>
            )}
          </button>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex py-2 items-start content-start gap-x-14 gap-y-8 self-stretch flex-wrap">
            <div className="flex flex-col items-start gap-y-2">
              <p className=" font-lato text-sm font-extrabold leading-5 tracking-[1px]">
                Offical Links
              </p>
              <div className=" flex items-start gap-x-3">
                {projectData.website? <GlobeAltIcon width={20} height={20}/>:""}
                {projectData.tokens.length>0 || projectData.NFT_address.length > 0 ? <CurrencyDollarIcon width={20} height={20}/>:""}
                {projectData.tokens.length>0? <MagnifyingGlassIcon width={20} height={20}/>:""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
