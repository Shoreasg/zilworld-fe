"use client";

import { useState } from "react";
import { Timeline, Tweet } from "react-twitter-widgets";
import { ITwitterData, twitterListProps } from "../../../types";

// export default function LatestNewsTwitterWidget({
//   twitterList,
// }: Readonly<twitterListProps>) 
export default function LatestNewsTwitterWidget(){
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  return (
    <div className="mt-[31px] ">
      {isLoading && isError === false && (
        <div className="px-4 py-5 sm:p-6 font-semibold opacity-80 text-gray-900 bg-gray-500 text-center animate-pulse ">
          Loading
        </div>
      )}
      {isError === true ? (
        <div className="px-4 py-5 sm:p-6 font-semibold opacity-80 text-gray-900 bg-gray-400 text-center">
          Twitter not avaliable
        </div>
      ) : (
        // <>
        // {/* {twitterList.map((id: ITwitterData,key)=>{
        //   return(
        //     <div key={key}>
        //       <Tweet tweetId={String(id)}/>
        //     </div>
        //   )
        // })} */}
        // </>

        <Timeline
          dataSource={{
            sourceType: "list",
            ownerScreenName: "Shorea_sg",
            id:"1815050769437168027"
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
