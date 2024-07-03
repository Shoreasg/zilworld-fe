import { useState } from "react";
import { ProjectDetailsCardProps } from "../../types";
import ProjectTwitterWidget from "../projects/[project]/components/ProjectTwitterWidget";

export default function ProjectUpdates({
  projectData,
}: Readonly<ProjectDetailsCardProps>) {
  const [selectedUpdate, setSelectedUpdate] = useState(true);
  const [selectedTwitter, setSelectedTwitter] = useState(false);

  console.log(projectData);

  console.log(selectedUpdate);

  const handleOnClick = () => {
    if (selectedUpdate) {
      setSelectedTwitter(true);
      setSelectedUpdate(false);
    } else {
      setSelectedTwitter(false);
      setSelectedUpdate(true);
    }
  };

  return (
    <>
      <div className="flex flex-row items-start gap-8 pt-12">
        {selectedUpdate ? (
          <div className="flex flex-col">
            <button className=" font-lato text-sm text-left text-[#06242e] font-extrabold leading-[1.43px] tracking-[1px]">
              UPDATES
            </button>
            <hr className=" mt-[17px] h-[2px] self-stretch flex-grow-0 border-[#ffc224]" />
          </div>
        ) : (
          <button
            className=" font-lato text-sm text-left text-[#06242e] font-extrabold leading-[1.43px] tracking-[1px]"
            onClick={() => handleOnClick()}
          >
            UPDATES
          </button>
        )}
        {selectedTwitter && selectedUpdate === false ? (
          <div className="flex flex-col">
            <button className=" font-lato text-sm text-left text-[#06242e] font-extrabold leading-[1.43px] tracking-[1px]">
              TWITTER
            </button>
            <hr className=" mt-[17px] h-[2px] self-stretch flex-grow-0 border-[#ffc224] w-full" />
          </div>
        ) : (
          <button
            className=" font-lato text-sm text-left text-[#06242e] font-extrabold leading-[1.43px] tracking-[1px]"
            onClick={() => handleOnClick()}
          >
            TWITTER
          </button>
        )}
      </div>
      <div>
        {selectedUpdate ? (
          <>
            {projectData.announcements.length > 1 ? (
              ""
            ) : (
              <div className="mt-[31px] h-[21px] self-stretch flex-grow-0 font-plusjakartasans text-sm leading-[1.5px] text-left text-[#3b4242]">
                {`${projectData.name} has not provided any recent updates. Please check again soon!`}
              </div>
            )}
          </>
        ) : (
          <>
            {projectData.twitter.length > 1 ? (
              <ProjectTwitterWidget projectData={projectData} />
            ) : (
              <div className="mt-[31px] h-[21px] self-stretch flex-grow-0 font-plusjakartasans text-sm leading-[1.5px] text-left text-[#3b4242]">
              {`${projectData.name} does not has a Twitter account.`}
            </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
