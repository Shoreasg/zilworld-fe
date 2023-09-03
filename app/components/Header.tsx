"use client";
import { Dispatch, SetStateAction, useContext } from "react"
import { onMenuClickContext } from "../context/MenuContext";


interface HeaderProps {
    setMenuClick: Dispatch<SetStateAction<boolean>>;
  }

export default function Header({setMenuClick }: HeaderProps){

  const menuClickContext = useContext(onMenuClickContext)

return(
    <>
    <div className="fixed flex w-full h-[56px] pt-1 pb-1 pr-6 pl-6 justify-between items-center border-b border-gray-300 bg-white z-50">
            <img
              className="h-[3rem] w-[3rem] flex-shrink-0"
              src="/ZilWorld Logo.png"
              alt="ZilWorld Logo"
            ></img>
           <button className="text-light-mode-neutral-green-500 text-center font-Lato font-semibold text-sm uppercase tracking-wider"
            onClick={()=>setMenuClick(!menuClickContext)}>
                {menuClickContext ? "Menu": "Close"}
            </button>
    </div>
    </>)
}