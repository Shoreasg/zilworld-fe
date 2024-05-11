import { useState } from "react";

export default function ProjectUpdates() {
  const [selectedUpdate, setSelectedUpdate] = useState(true);
  const [selectedTwitter, setSelectedTwitter] = useState(false);

  const handleOnClick = ()=>{
    if(selectedUpdate){
        setSelectedTwitter(true)
        setSelectedUpdate(false)
    }else{
        setSelectedTwitter(false)
        setSelectedUpdate(true)
    }
  }

  return (
    <div className="flex flex-row items-start gap-8 pt-12">
      {selectedUpdate ? (
        <div className="flex flex-col">
          <button
            className=" font-lato text-sm text-left text-[#06242e] font-extrabold leading-[1.43px] tracking-[1px]"
          >
            UPDATES
          </button>
          <hr className=" mt-[17px] h-[2px] self-stretch flex-grow-0 border-[#ffc224] w-full" />
        </div>
      ) : (
        <button
          className=" font-lato text-sm text-left text-[#06242e] font-extrabold leading-[1.43px] tracking-[1px]"
          onClick={() => handleOnClick()}
        >
          UPDATES
        </button>
      )}
      {selectedTwitter && selectedUpdate===false ? (
        <div className="flex flex-col">
          <button
            className=" font-lato text-sm text-left text-[#06242e] font-extrabold leading-[1.43px] tracking-[1px]"
          >
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
  );
}
