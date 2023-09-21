"use client";
import { Dispatch, SetStateAction, useContext } from "react";
import { onMenuClickContext } from "../context/MenuContext";
import Image from "next/image";
import { lato } from "./font";

interface HeaderProps {
  setMenuClick: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setMenuClick }: HeaderProps) {
  const menuClickContext = useContext(onMenuClickContext);

  return (
    <>
      <div className=" flex w-full h-[56px] pt-1 pb-1 pr-6 pl-6 justify-between items-center border-b border-gray-300 bg-white z-50">
        <Image
          className="flex-shrink-0"
          src="/ZilWorld Logo.png"
          width={48}
          height={48}
          alt="ZilWorld Logo"
        ></Image>
        <button
          className={`text-light-mode-neutral-green-500 text-center ${lato.className} font-semibold text-sm uppercase tracking-wider`}
          onClick={() => setMenuClick(!menuClickContext)}
        >
          {menuClickContext ? "Menu" : "Close"}
        </button>
      </div>
    </>
  );
}
