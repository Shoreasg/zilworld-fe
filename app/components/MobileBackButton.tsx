"use client";

import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function MobileBackButton({ text }: Readonly<{ text: string }>) {
  return (
    <div className={`flex py-6 gap-2 px-4 items-start`}>
    {text==="Coming Soon" ?  <Link href={`/coming-soon`}>
      <div className="flex items-center gap-2">
        <ChevronLeftIcon className=" w-5 h-5" />
        <div className=" font-plusjakartasans text-sm font-bold leading-[21px]">
          {text}
        </div>
      </div>
    </Link>: <Link href={`/${text.toLowerCase()}`}>
      <div className="flex items-center gap-2">
        <ChevronLeftIcon className=" w-5 h-5" />
        <div className=" font-plusjakartasans text-sm font-bold leading-[21px]">
          {text}
        </div>
      </div>
    </Link>}
   
  </div>);
}
