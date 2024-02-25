"use client";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Carousel from "nuka-carousel";
import { useContext, useState } from "react";
import { onMenuClickContext } from "../context/MenuContext";
import Image from "next/image";
import { plusJakartaSans } from "./font";

export default function CarousellBanners() {
  const [isShownPopUp, setIsShownPopUp] = useState(false);

  const menuClickContext = useContext(onMenuClickContext)

  const carouselClass = menuClickContext ? "px-36  rounded-b-lg" : "px-14  rounded-b-lg";

  const SponsoredClass = menuClickContext ? `absolute top-8 right-[152px] inline-flex flex-col items-start px-6 py-4 gap-2 rounded-lg bg-[#F5F5F5] text-center shadow-[0_4px_16px_0_rgba(36,87,102,0.15) ${plusJakartaSans.className} text-[#143E4A] text-sm leading-[21px] font-normal`:
  `absolute top-8 right-[64px] inline-flex flex-col items-start px-6 py-4 gap-2 rounded-lg bg-[#F5F5F5] text-center shadow-[0_4px_16px_0_rgba(36,87,102,0.15) ${plusJakartaSans.className} text-[#143E4A] text-sm leading-[21px] font-normal`

  const BannerImages: {
    href: string;
    src: string;
    alt: string;
    target: string;
  }[] = [
    {
      href: "https://torchwallet.io/",
      src: "/samplebanner-min.png",
      alt: "TorchBanner",
      target: "_blank",
    },
  ];

  return BannerImages.length === 0 ? (
    <></>
  ) : (
    <>
      <Carousel
        animation="fade"
        autoplay={true}
        autoplayReverse={true}
        wrapAround={true}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        autoplayInterval={5000}
        renderBottomCenterControls={({ currentSlide }) => null}
        className={carouselClass}
        beforeSlide={() => setIsShownPopUp(false)}
        dragging={false}
        swiping={false}
      >
        {BannerImages.map((item, index) => (
          <div key={index} className="relative h-[180px]">
            <a href={item.href} target={item.target} key={item.alt} rel="noreferrer">
              <Image
                src={item.src}
                alt={item.alt}
                fill={true}
                className=" w-full flex-shrink-0  rounded-b-lg]"
              />
            </a>
            <div className={`absolute inline-flex items-center gap-1 top-2 text-right right-1 font-normal text-[12px] leading-[18px] ${plusJakartaSans.className} text-[#F5F5F5] `}>
              Sponsored
              <InformationCircleIcon className=" w-3 h-3 cursor-pointer" onMouseEnter={()=> setIsShownPopUp(true)} onMouseLeave={()=>setIsShownPopUp(false)} />
            </div>
          </div>
        ))}
      </Carousel>
      {isShownPopUp && (
        <p className={SponsoredClass}>
          Advertising helps fund ZilWorld development.
        </p>
      )}
    </>
  );
}
