import { Dispatch, SetStateAction, useContext } from "react";
import { onMenuClickContext } from "../context/MenuContext";

interface overlayProps{
  setMenuClick: Dispatch<SetStateAction<boolean>>;
}


export default function Overlay({setMenuClick}:overlayProps){

  const menuClickContext = useContext(onMenuClickContext)

    return(
        <div
        className="fixed w-full h-[calc(100dvh)] bg-black opacity-50 z-30 "
        onClick={()=>setMenuClick(!menuClickContext)}
      />
    )
}