"use client";
import { Dispatch, SetStateAction, useState } from "react"
import NavBarV2 from "./NavBarV2";

interface HeaderProps {
    setMenuClick: Dispatch<SetStateAction<boolean>>;
    menuClick: boolean;
  }

export default function Header({ setMenuClick, menuClick }: HeaderProps){

return(
    <>
    <div className="fixed flex w-full pt-1 pb-1 pr-6 pl-6 justify-between items-center border-b border-gray-300 bg-white z-50">
            <img
              className="h-[3rem] w-[3rem] flex-shrink-0"
              src="/ZilWorld Logo.png"
              alt="ZilWorld Logo"
            ></img>
           <div className="text-light-mode-neutral-green-500 text-center font-Lato font-semibold text-sm uppercase tracking-wider"
            onClick={()=>setMenuClick(!menuClick)}>
                {menuClick ? "Menu": "Close"}
            </div>
    </div>
    </>)
}