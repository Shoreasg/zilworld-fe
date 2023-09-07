"use client";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { useState } from "react";
import { plusJakartaSans } from "./font";

export default function MobileCarousellBanners() {
  const [isShownPopUp, setIsShownPopUp] = useState(false);

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
        beforeSlide={() => setIsShownPopUp(false)}
        swiping={false}
        dragging={false}
      >
        {BannerImages.map((item, index) => (
          <div key={index} className="relative h-[112px]">
            <a href={item.href} target={item.target} key={item.alt} rel="noreferrer">
              <Image
                src={item.src}
                alt={item.alt}
                fill={true}
                className=" flex-shrink-0 h-[112px] w-full"
              />
            </a>
            <div className={`absolute inline-flex items-center gap-1 top-1 text-right right-1 font-normal text-[10px] leading-[15px] ${plusJakartaSans.className} text-[#F5F5F5] `}>
              Sponsored
              <InformationCircleIcon
                onClick={() => setIsShownPopUp(!isShownPopUp)}
                className="w-3 h-3"
              />
            </div>
          </div>
        ))}
      </Carousel>
      {isShownPopUp && (
        <p className={`absolute top-[74px] right-1 inline-flex flex-col items-start px-6 py-4 gap-2 rounded-lg bg-[#F5F5F5] text-center shadow-md ${plusJakartaSans.className} text-[#06242E] text-sm leading-[21px] font-normal`}>
          Advertising helps fund ZilWorld development.
        </p>
      )}
    </>
  );
}
