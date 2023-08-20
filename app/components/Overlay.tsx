import { Dispatch, SetStateAction } from "react";

interface overlayProps{
  setMenuClick: Dispatch<SetStateAction<boolean>>;
  menuClick: boolean;
}


export default function Overlay({setMenuClick, menuClick}:overlayProps){
    return(
        <div
        className="fixed w-full h-full bg-black opacity-50 z-30 "
        onClick={()=>setMenuClick(!menuClick)}
      />
    )
}