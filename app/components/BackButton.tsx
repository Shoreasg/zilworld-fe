"use client";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useContext} from "react";
import { onMenuClickContext } from "../context/MenuContext";
import Link from "next/link";

export default function BackButton({ text }: Readonly<{ text: string }>) {
  const menuClickContext = useContext(onMenuClickContext);

  const backButtonClass = menuClickContext ? "px-36" : "px-14";

  return (
    <div className={`sticky top-0 flex py-6 gap-2 items-start ${backButtonClass} z-20`}>
      {text==="Coming Soon" ? <Link href={`/coming-soon`}>
        <div className="flex items-center gap-2">
          <ChevronLeftIcon className=" w-5 h-5" />
          <div className=" font-plusjakartasans text-sm font-bold leading-[21px]">
            {text}
          </div>
        </div>
      </Link> : <Link href={`/${text.toLowerCase()}`}>
        <div className="flex items-center gap-2">
          <ChevronLeftIcon className=" w-5 h-5" />
          <div className=" font-plusjakartasans text-sm font-bold leading-[21px]">
            {text}
          </div>
        </div>
      </Link> }
     
    </div>
  );
}
