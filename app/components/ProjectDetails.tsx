import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { ProjectDetailsCardProps } from "../../types";

export default function ProjectDetails({
  projectData,
}: Readonly<ProjectDetailsCardProps>) {
  return (
    <div className=" inline-flex flex-col items-start pt-[15px]">
      <div className="flex py-4 px-6 flex-col items-start gap-6">
        <div className="flex w-[740px] justify-between items-start">
          <div className="flex flex-row items-start gap-3">
            <div className="text-center font-lato text-3xl leading-9 tracking-[1px] font-extrabold">
              {projectData.name}
            </div>
            {projectData.isActive ? (
              <div className="flex h-4 px-2 justify-center items-center gap-1 rounded-[32px] bg-[#3B984462] text-center leading-tight font-plusjakartasans text-[10px] font-normal ">
                Active
              </div>
            ) : (
              <div className="flex h-4 px-2 justify-center items-center gap-1 rounded-[32px] bg-[#b5202062] text-center leading-tight font-plusjakartasans text-[10px] font-normal ">
                Inactive
                <InformationCircleIcon className="h-[10px] w-[10px]"/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
