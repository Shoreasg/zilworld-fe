"use client";
import {
  CurrencyDollarIcon,
  FireIcon,
  GiftIcon,
  MegaphoneIcon,
  PhotoIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { onMenuClickContext } from "../context/MenuContext";
import { plusJakartaSans } from "./font";



export default function MobileNavBar() {
  const pathname = usePathname();

  const navigation = [
    {
      name: "Projects",
      icon: Squares2X2Icon,
      href: "/projects",
      current: pathname?.includes("/projects"),
    },
    // {
    //   name: "Tokens",
    //   icon: CurrencyDollarIcon,
    //   href: "/tokens",
    //   current: pathname?.includes("/tokens"),
    // },

    {
      name: "Coming Soon",
      icon: FireIcon,
      href: "/coming-soon",
      current: pathname?.includes("/coming-soon"),
    },

    {
      name: "Latest News",
      icon: MegaphoneIcon,
      href: "/latest-news",
      current: pathname?.includes("/latest-news"),
    },
  ];

  const secondNavigation = [
    {
      name: "FAQ",
      icon: QuestionMarkCircleIcon,
      href: "/faq",
      current: pathname === "/faq",
    },
    // {
    //   name: "Listing",
    //   icon: SquaresPlusIcon,
    //   href: "/listing",
    //   current: pathname === "/listing",
    // },
    // {
    //   name: "Advertise",
    //   icon: PhotoIcon,
    //   href: "/advertise",
    //   current: pathname === "/advertise",
    // },
    {
      name: "Donate",
      icon: GiftIcon,
      href: "/donate",
      current: pathname === "/donate",
    },
    {
      name: "Connect",
      icon: "",
      href: "https://x.com/zilworldapp",
      current: pathname === "/connect",
    },
  ];

  const thirdNavigation = [
    {
      name: "Developed by ShoreaSG",
      href: "https://github.com/Shoreasg",
    },
    {
      name: "Designed by DeFiDesigns",
      href: "https://defi-designs.com/",
    },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const menuClickContext = useContext(onMenuClickContext)


  return (
    <>
      {menuClickContext ? (
        ''
      ) : (
        <div className=" fixed flex flex-col w-[50vw] h-[100dvh] self-stretch items-start flex-shrink-0 bg-[#097A8E] z-40 overflow-auto">
        <div
          className={
            `flex pb-14 flex-col justify-between flex-grow flex-shrink-0 basis-0 self-stretch `
          }
        >
          <div className=" flex flex-col justify-center items-center self-stretch">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-[#f5f5f5] text-[#36788C]"
                      : "text-[#f5f5f5]",
                    "flex gap-[0.5rem] pt-[0.75rem] pb-[0.75rem] pr-[1rem] pl-[1rem] items-center self-stretch hover:bg-[#f5f5f5] hover:text-[#36788C]"
                  )}
                >
                  <item.icon
                    className={classNames("w-[1.5rem] h-[1.5rem]")}
                    aria-hidden="true"
                  />
                  <span className={`${plusJakartaSans.className} font-semibold leading-[21px] text-[14px]`}>
                    {item.name}
                  </span>
                </Link>
              ))}
          </div>
          <div className="flex flex-col justify-center items-center self-stretch pt-0 pb-0 pl-[1rem] pr-[1rem]">
                <hr className="border-b-0 border-r-0 border-l-0 border-t border-solid border-[#e6eaeb] opacity-10 self-stretch " />
          </div>
          <div className=" flex flex-col justify-center items-center self-stretch">
              {secondNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-[#f5f5f5] text-[#36788C]"
                      : "text-[#f5f5f5]",
                      "flex gap-[0.5rem] pt-[0.75rem] pb-[0.75rem] pr-[1rem] pl-[1rem] items-center self-stretch hover:bg-[#f5f5f5] hover:text-[#36788C]"
                  )}
                >
                  {item.name !== "Connect" ? (
                    <item.icon
                      className={classNames("w-[1.5rem] h-[1.5rem]")}
                      aria-hidden="true"
                    />
                  ) : (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className={classNames("w-[1.5rem] h-[1.5rem]")}
                    viewBox="0 0 50 50"
                    width="24px"
                    height="24px"
                  >
                    <path
                      d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"
                      fill="#F5F5F5"
                    />
                  </svg>
                  )}
                  <span className={`${plusJakartaSans.className} font-semibold leading-[21px] text-[14px] text-right`}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>    
            <div className="flex flex-col justify-center items-center self-stretch pt-0 pb-0 pl-[1rem] pr-[1rem]">
                <hr className="border-b-0 border-r-0 border-l-0 border-t border-solid border-[#e6eaeb] opacity-10 self-stretch" />
              </div>
              <div className=" flex flex-col items-start self-stretch">
              <div className="pb-0 flex flex-col items-start text-[#f5f5f5] bg-[#097A8E]">
                {thirdNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-[0.5rem] pt-[0.75rem] pb-[0.75rem] pr-[1rem] pl-[1rem]"
                  >
                    {item.name === "Developed by ShoreaSG" ? (
                      <svg
                        className={classNames("w-[1.5rem] h-[1.5rem] flex-shrink-0")}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.1601 3C7.0948 3 3 7.12498 3 12.2281C3 16.3074 5.62368 19.7604 9.26341 20.9825C9.71847 21.0744 9.88516 20.7839 9.88516 20.5396C9.88516 20.3257 9.87016 19.5924 9.87016 18.8283C7.32204 19.3784 6.79142 17.7283 6.79142 17.7283C6.38192 16.6588 5.77518 16.3839 5.77518 16.3839C4.94118 15.8186 5.83593 15.8186 5.83593 15.8186C6.76105 15.8797 7.24648 16.7658 7.24648 16.7658C8.06529 18.1713 9.38472 17.7742 9.91553 17.5297C9.99128 16.9338 10.2341 16.5213 10.4919 16.2922C8.4596 16.0783 6.32136 15.2838 6.32136 11.7392C6.32136 10.7308 6.68511 9.90578 7.26148 9.26416C7.17055 9.03504 6.85198 8.0876 7.35261 6.81955C7.35261 6.81955 8.12604 6.57505 9.86997 7.76679C10.6166 7.56479 11.3866 7.46203 12.1601 7.46117C12.9335 7.46117 13.722 7.56823 14.45 7.76679C16.1941 6.57505 16.9676 6.81955 16.9676 6.81955C17.4682 8.0876 17.1494 9.03504 17.0585 9.26416C17.6501 9.90578 17.9988 10.7308 17.9988 11.7392C17.9988 15.2838 15.8606 16.0629 13.8131 16.2922C14.1468 16.5824 14.4348 17.1324 14.4348 18.0033C14.4348 19.2408 14.4198 20.234 14.4198 20.5394C14.4198 20.7839 14.5867 21.0744 15.0416 20.9827C18.6813 19.7602 21.305 16.3074 21.305 12.2281C21.32 7.12498 17.2102 3 12.1601 3Z"
                          fill="#F9F9F9"
                        />
                      </svg>
                    ) : (
                      <svg
                        className={classNames("w-[1.5rem] h-[1.5rem] flex-shrink-0")}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM6.83525 8.07767C6.67664 8.09246 6.56489 8.10356 6.5 8.11096V15.889C6.59373 15.9038 6.72711 15.9149 6.90014 15.9223C7.07317 15.9371 7.25342 15.9482 7.44087 15.9556C7.62832 15.9704 7.81217 15.9815 7.99242 15.9889C8.17266 15.9963 8.32046 16 8.43582 16C9.164 16 9.7588 15.8853 10.2202 15.656C10.6889 15.4193 11.053 15.1123 11.3125 14.7351C11.5793 14.3504 11.7631 13.914 11.864 13.4258C11.965 12.9376 12.0155 12.4383 12.0155 11.9279C12.0155 11.3657 11.965 10.8479 11.864 10.3745C11.7631 9.89367 11.5829 9.47943 11.3233 9.13176C11.071 8.7767 10.7249 8.49931 10.2851 8.29958C9.84532 8.09986 9.29017 8 8.61966 8C8.44663 8 8.24836 8.0037 8.02486 8.0111C7.80857 8.01849 7.59588 8.02959 7.3868 8.04438C7.18493 8.05178 7.00108 8.06288 6.83525 8.07767ZM8.2736 9.37587C8.40337 9.36107 8.53675 9.35368 8.67374 9.35368C9.08469 9.35368 9.40913 9.43504 9.64705 9.59778C9.88498 9.76052 10.0616 9.96764 10.177 10.2191C10.2995 10.4706 10.3752 10.748 10.4041 11.0513C10.4401 11.3546 10.4581 11.6468 10.4581 11.9279C10.4581 12.2534 10.4401 12.5788 10.4041 12.9043C10.368 13.2298 10.2887 13.522 10.1662 13.7809C10.0436 14.0398 9.85614 14.2506 9.6038 14.4133C9.35866 14.5687 9.02702 14.6463 8.60885 14.6463H8.46826C8.41058 14.6389 8.3493 14.6352 8.28441 14.6352C8.22673 14.6278 8.16906 14.6241 8.11138 14.6241C8.0537 14.6167 8.01044 14.6093 7.9816 14.6019V9.39806C8.04649 9.39066 8.14382 9.38326 8.2736 9.37587ZM13.3198 8.07767C13.1612 8.09246 13.0494 8.10356 12.9845 8.11096V15.889C13.0783 15.9038 13.2117 15.9149 13.3847 15.9223C13.5577 15.9371 13.738 15.9482 13.9254 15.9556C14.1129 15.9704 14.2967 15.9815 14.477 15.9889C14.6572 15.9963 14.805 16 14.9204 16C15.6485 16 16.2434 15.8853 16.7048 15.656C17.1734 15.4193 17.5375 15.1123 17.7971 14.7351C18.0638 14.3504 18.2477 13.914 18.3486 13.4258C18.4495 12.9376 18.5 12.4383 18.5 11.9279C18.5 11.3657 18.4495 10.8479 18.3486 10.3745C18.2477 9.89367 18.0674 9.47943 17.8079 9.13176C17.5555 8.7767 17.2095 8.49931 16.7697 8.29958C16.3299 8.09986 15.7747 8 15.1042 8C14.9312 8 14.7329 8.0037 14.5094 8.0111C14.2931 8.01849 14.0804 8.02959 13.8713 8.04438C13.6695 8.05178 13.4856 8.06288 13.3198 8.07767ZM14.7581 9.37587C14.8879 9.36107 15.0213 9.35368 15.1583 9.35368C15.5692 9.35368 15.8937 9.43504 16.1316 9.59778C16.3695 9.76052 16.5462 9.96764 16.6615 10.2191C16.7841 10.4706 16.8598 10.748 16.8886 11.0513C16.9247 11.3546 16.9427 11.6468 16.9427 11.9279C16.9427 12.2534 16.9247 12.5788 16.8886 12.9043C16.8526 13.2298 16.7733 13.522 16.6507 13.7809C16.5281 14.0398 16.3407 14.2506 16.0883 14.4133C15.8432 14.5687 15.5116 14.6463 15.0934 14.6463H14.9528C14.8951 14.6389 14.8338 14.6352 14.769 14.6352C14.7113 14.6278 14.6536 14.6241 14.5959 14.6241C14.5382 14.6167 14.495 14.6093 14.4661 14.6019V9.39806C14.531 9.39066 14.6284 9.38326 14.7581 9.37587Z"
                          fill="#F9F9F9"
                        />
                      </svg>
                    )}

                    <span className={`${plusJakartaSans.className}font-normal leading-[21px] text-[14px]`}>
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="flex justify-center items-center gap-4 self-stretch py-[6px] px-4 bg-[#275B6B] shadow-[0px_0px_10px_rgba(6,36,46,0.15)]">
                <span className={`text-[#f5f5f5] ${plusJakartaSans.className} p-0 m-0 font-normal text-sm tracking-[0.03125rem]`}>
                  #zilfam
                </span>
              </div>
            </div>
          </div>
          </div>
      )}
    </>
  );
}
