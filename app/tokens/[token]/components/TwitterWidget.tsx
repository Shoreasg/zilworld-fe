"use client";

import { useState } from "react";
import { Timeline } from "react-twitter-widgets";
import { TokenDetailsCardProps } from "../../../../types";

export default function TwitterWidget({ tokenData }: TokenDetailsCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="flex flex-1 flex-col md:pl-64">
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Twitter Updates
        </h3>
        {isLoading && tokenData.twitter && (
          <div className="px-4 py-5 sm:p-6 font-semibold opacity-80 text-gray-900 bg-gray-500 text-center animate-pulse ">
            Loading
          </div>
        )}
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: `${tokenData.twitter}`,
          }}
          options={{ height: "500" }}
          onLoad={() => setIsLoading(false)}
          renderError={(_err) => (
            <div className="px-4 py-5 sm:p-6 font-semibold opacity-80 text-gray-900 bg-gray-400 text-center">
              Twitter not avaliable
            </div>
          )}
        />
      </div>
    </div>
  );
}
