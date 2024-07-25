import { useState } from "react";
import { ProjectDetailsCardProps } from "../../types";
import ProjectTwitterWidget from "../projects/[project]/components/ProjectTwitterWidget";
import { BellIcon } from "@heroicons/react/20/solid";
import moment from "moment";
import { getCharLength, trimAnnouncement } from "../functions";

export default function ProjectUpdates({
  projectData,
}: Readonly<ProjectDetailsCardProps>) {
  const [selectedUpdate, setSelectedUpdate] = useState(true);
  const [selectedTwitter, setSelectedTwitter] = useState(false);
  const [showMoreStates, setShowMoreStates] = useState(
    Array(projectData.announcements.length).fill(false)
  );

  const handleOnClick = () => {
    if (selectedUpdate) {
      setSelectedTwitter(true);
      setSelectedUpdate(false);
    } else {
      setSelectedTwitter(false);
      setSelectedUpdate(true);
    }
  };

  const handleShowMore = (index: number) => {
    const newShowMoreStates = [...showMoreStates];
    newShowMoreStates[index] = !newShowMoreStates[index];
    setShowMoreStates(newShowMoreStates);
  };

  const isWithinLast24hours = (date: string) => {
    const now = moment();
    const givenDate = moment(date, "YYYY-MM-DDTHH:mm:ssZ");
    const hourdiff = now.diff(givenDate, "hours");
    return hourdiff < 24 && hourdiff >= 0;
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
          <div className="flex flex-col mt-[23px]">
            {projectData.announcements.length > 0 ? (
              <>
                {projectData.announcements.map((announcement, index) =>
                  announcement.pinned ? (
                    <div
                      className="flex flex-col gap-1 self-stretch bg-[#ecf0f1] p-2 rounded-md"
                      key={index}
                    >
                      <div className="flex items-center gap-1 self-stretch">
                        <div className="w-4 h-4">
                          <BellIcon className="text-[#ffc224]" />
                        </div>
                        <span className="font-bold text-[12px] leading-[18px] text-[#9aa3a3]">
                          {isWithinLast24hours(announcement.created_at)
                            ? `${moment(announcement.created_at).fromNow()}`
                            : `${moment(
                                announcement.created_at,
                                "YYYY-MM-DDTHH:mm:ssZ"
                              ).format("dddd MMMM D, YYYY")}`}
                        </span>
                      </div>
                      {getCharLength(announcement.preview) > 165 ? (
                        <p>
                          {!showMoreStates[index] ? (
                            <>
                              {trimAnnouncement(announcement.preview)}
                              {"..."}
                              <button
                                onClick={() => handleShowMore(index)}
                                className=" font-bold"
                              >
                                Read More
                              </button>
                            </>
                          ) : (
                            <>
                              {announcement.preview}
                              <button
                                onClick={() => handleShowMore(index)}
                                className=" font-bold"
                              >
                                Read Less
                              </button>
                            </>
                          )}
                        </p>
                      ) : (
                        <>{announcement.preview}</>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1 self-stretch p-2" key={index}>
                      <div className="flex items-center gap-1 self-stretch">
                        <span className="font-bold text-[12px] leading-[18px] text-[#9aa3a3]">
                          {isWithinLast24hours(announcement.created_at)
                            ? `${moment(announcement.created_at).fromNow()}`
                            : `${moment(
                                announcement.created_at,
                                "YYYY-MM-DDTHH:mm:ssZ"
                              ).format("dddd MMMM D, YYYY")}`}
                        </span>
                      </div>
                      {getCharLength(announcement.preview) > 165 ? (
                        <p>
                          {!showMoreStates[index] ? (
                            <>
                              {trimAnnouncement(announcement.preview)}
                              {"..."}
                              <button
                                onClick={() => handleShowMore(index)}
                                className=" font-bold"
                              >
                                Read More
                              </button>
                            </>
                          ) : (
                            <>
                              {announcement.preview}
                              <button
                                onClick={() => handleShowMore(index)}
                                className=" font-bold"
                              >
                                Read Less
                              </button>
                            </>
                          )}
                        </p>
                      ) : (
                        <>{announcement.preview}</>
                      )}
                    </div>
                  )
                )}
              </>
            ) : (
              <div className="mt-[31px] h-[21px] self-stretch flex-grow-0 font-plusjakartasans text-sm leading-[1.5px] text-left text-[#3b4242]">
                {`${projectData.name} has not provided any recent updates. Please check again soon!`}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col mt-[23px]">
            {projectData.twitter.length > 0 ? (
              <ProjectTwitterWidget projectData={projectData} />
            ) : (
              <div className="mt-[31px] h-[21px] self-stretch flex-grow-0 font-plusjakartasans text-sm leading-[1.5px] text-left text-[#3b4242]">
                {`${projectData.name} does not has a Twitter account.`}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
