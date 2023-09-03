"use client";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Carousel from "nuka-carousel";
import { useContext, useState } from "react";
import { onMenuClickContext } from "../layout";

export default function CarousellBanners() {
  const [isShownPopUp, setIsShownPopUp] = useState(false);

  const menuClickContext = useContext(onMenuClickContext)

  const carouselClass = menuClickContext ? "px-36" : "px-14";

  const SponsoredClass = menuClickContext ? "absolute top-5 right-[146px] inline-flex flex-col items-start px-6 py-4 gap-2 rounded-lg bg-[#F5F5F5] text-center shadow-md font-plusjakartasans text-[#06242E] text-sm leading-[21px] font-normal":
  "absolute top-5 right-[58px] inline-flex flex-col items-start px-6 py-4 gap-2 rounded-lg bg-[#F5F5F5] text-center shadow-md font-plusjakartasans text-[#06242E] text-sm leading-[21px] font-normal"

  const BannerImages: {
    href: string;
    src: string;
    alt: string;
    target: string;
  }[] = [
    {
      href: "https://torchwallet.io/",
      src: "/TorchWalletBanner.png",
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
      >
        {BannerImages.map((item, index) => (
          <div key={index} className="relative h-[8.25rem]">
            <a href={item.href} target={item.target} key={item.alt}>
              <img
                src={item.src}
                alt={item.alt}
                className="h-[8.25rem] w-full flex-shrink-0"
              />
            </a>
            <div className="absolute inline-flex items-center gap-1 top-1 text-right right-1 font-normal text-[12px] leading-[18px] font-plusjakartasans text-[#F5F5F5] ">
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
