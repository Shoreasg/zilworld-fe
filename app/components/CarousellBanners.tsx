"use client";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Carousel from "nuka-carousel";

export default function CarousellBanners() {
  const BannerImages: {
    href: string;
    src: string;
    alt: string;
    ImageWidth: number;
    ImageHeight: number;
    target: string;
  }[] = [
    {
      href: "https://torchwallet.io/",
      src: "/TorchWalletBanner.png",
      alt: "TorchBanner",
      ImageWidth: 728,
      ImageHeight: 90,
      target: "_blank",
    }
  ];

  return BannerImages.length === 0 ? (
    <></>
  ) : (
    <Carousel
      animation="fade"
      autoplay={true}
      autoplayReverse={true}
      wrapAround={true}
      renderCenterLeftControls={null}
      renderCenterRightControls={null}
      defaultControlsConfig={{
        pagingDotsClassName: "ml-2",
        pagingDotsStyle: { fill: "grey", width: "10px", height: "10px" },
      }}
      autoplayInterval={5000}
      className="mt-6 pb-8"
    >
      {BannerImages.map((item) => (
        <a href={item.href} target={item.target} key={item.alt}>
          <img
            src={item.src}
            alt={item.alt}
            width={item.ImageWidth}
            height={item.ImageHeight}
            className="m-auto"
          />
          <div className="flex justify-center">
            <div className="w-[700px] flex justify-center rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className="h-5 w-5 text-red-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className=" text-xs text-red-400">
                    This is a sponsored banner. Sponsored banners contribute to
                    the development of our site
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </Carousel>
  );
}
