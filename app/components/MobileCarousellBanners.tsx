"use client";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Carousel from "nuka-carousel";

export default function MobileCarousellBanners() {
  const BannerImages: {
    href: string;
    src: string;
    alt: string;
    ImageWidth: string;
    ImageHeight: string;
    target: string;
  }[] = [
    {
      href: "https://torchwallet.io/",
      src: "/TorchWalletBanner.png",
      alt: "TorchBanner",
      ImageWidth: "100%",
      ImageHeight: "100%",
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
      >
        {BannerImages.map((item, index) => (
          <div key={index} className="relative">
            <a href={item.href} target={item.target} key={item.alt}>
              <img
                src={item.src}
                alt={item.alt}
                width={item.ImageWidth}
                height={item.ImageHeight}
                className=" flex-shrink-0"
              />
            </a>
            <div className="absolute inline-flex items-center gap-1 top-1 text-right right-1 font-normal text-[10px] leading-[15px] font-plusjakartasans text-[#F5F5F5] ">
              Sponsored
              <InformationCircleIcon className=" w-3 h-3" />
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
