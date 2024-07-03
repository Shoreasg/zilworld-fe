"use client";

import { useState } from "react";
import { Timeline } from "react-twitter-widgets";
import { ProjectDetailsCardProps } from "../../../../types";

export default function ProjectTwitterWidget({
  projectData,
}: ProjectDetailsCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  return (
    <div className="mt-[31px] ">
        {isLoading && isError === false && projectData.twitter && (
          <div className="px-4 py-5 sm:p-6 font-semibold opacity-80 text-gray-900 bg-gray-500 text-center animate-pulse ">
            Loading
          </div>
        )}
        {isError === true ? (
          <div className="px-4 py-5 sm:p-6 font-semibold opacity-80 text-gray-900 bg-gray-400 text-center">
            Twitter not avaliable
          </div>
        ) : (
          <Timeline
            dataSource={{
              sourceType: "url",
              url: `${projectData.twitter[0].twitterURL}`,
            }}
            options={{ height: "650" }}
            onLoad={() => setIsLoading(false)}
            renderError={(_err) => (
              <>{_err ? setIsError(true) : setIsError(false)}</>
            )}
          />
        )}
    </div>
  );
}
