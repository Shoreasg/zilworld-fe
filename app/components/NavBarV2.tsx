"use client";

import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
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
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { onMenuClickContext } from "../context/MenuContext";
import Image from "next/image";
import { plusJakartaSans } from "./font";

interface NavBarProps {
  setMenuClick: Dispatch<SetStateAction<boolean>>;
}

export default function NavBarV2({setMenuClick }:NavBarProps) {
  const pathname = usePathname();
  const menuClickContext = useContext(onMenuClickContext)

  const toggleNavbar = () => {
    setMenuClick(!menuClickContext);
  };

  const navigation = [
    {
      name: "Projects",
      icon: Squares2X2Icon,
      href: "/projects",
      current: pathname?.includes("/projects"),
    },
    {
      name: "Tokens",
      icon: CurrencyDollarIcon,
      href: "/tokens",
      current: pathname?.includes("/tokens"),
    },

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
    {
      name: "Listing",
      icon: SquaresPlusIcon,
      href: "/listing",
      current: pathname === "/listing",
    },
    {
      name: "Advertise",
      icon: PhotoIcon,
      href: "/advertise",
      current: pathname === "/advertise",
    },
    {
      name: "Donate",
      icon: GiftIcon,
      href: "/donate",
      current: pathname === "/donate",
    },
    {
      name: "Connect",
      icon: "",
      href: "/connect",
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


  return (
    <>
      {menuClickContext ? (
        <div
        className={
          `flex flex-col justify-between w-[80px] h-screen bg-[#097A8E] flex-shrink-0 self-stretch overflow-y-auto transition-all ease-in-out duration-200`}
      >
        <div className="flex flex-col justify-center items-start p-0 w-full">
          <div className="flex flex-col justify-center items-center h-[8.25rem] p-0 w-full">
            <Image
              className="flex-shrink-0"
              src="/ZilWorld Logo.png"
              width={64}
              height={64}
              alt="ZilWorld Logo"
            ></Image>
          </div>
          <div className=" w-full">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-[#f5f5f5] text-[#36788C] "
                    : "text-[#f5f5f5]",
                  "flex flex-row items-center justify-center gap-[0.5rem] pt-[0.75rem] pb-[0.75rem] self-stretch hover:bg-[#f5f5f5] hover:text-[#36788C]"
                )}
              >
                <item.icon
                  className={classNames("w-[1.5rem] h-[1.5rem] p-0")}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-end items-center p-0 self-stretch bg-[#097A8E]">
          <button
            className="bg-[#275B6B] border-none shadow-[-4px_0px_20px_rgba(6,36,46,0.15)] rounded-l-[0.375rem] pt-[0.375rem] pb-[0.375rem] pl-[0.25rem] pr-[0.25rem] content-center"
            onClick={toggleNavbar}
          >
            <ChevronDoubleRightIcon className="text-[#F9F9F9] w-6 h-6 stroke-2" />
          </button>
        </div>
        <div className="flex flex-col justify-center items-start p-0 w-full">
          <div className="w-full">
            {secondNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-[#f5f5f5] text-[#36788C]"
                    : "text-[#f5f5f5]",
                  "flex flex-row items-center justify-center gap-[0.5rem] pt-[0.75rem] pb-[0.75rem] self-stretch hover:bg-[#f5f5f5] hover:text-[#36788C]"
                )}
              >
                {item.name !== "Connect" ? (
                  <item.icon
                    className={classNames("w-[1.5rem] h-[1.5rem] p-0")}
                    aria-hidden="true"
                  />
                ) : (
                  <svg
                    className={classNames("w-[1.5rem] h-[1.5rem] p-0")}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.7664 6.91058C20.7543 6.91951 20.742 6.92847 20.7296 6.93746L20.4018 7.17446L20.4198 7.57849C20.4281 7.76464 20.4322 7.9554 20.4322 8.142C20.4322 13.9091 16.0443 20.506 8.06823 20.506H8.06784C6.68014 20.5067 5.30949 20.2732 4.01168 19.8218C5.564 19.5219 7.03251 18.8561 8.29017 17.8682L9.94189 16.5708L7.84194 16.5286C7.03644 16.5124 6.25609 16.2451 5.6098 15.7641C5.28124 15.5196 4.99567 15.226 4.76187 14.8957C5.11189 14.8714 5.45977 14.8126 5.80038 14.7194L7.85487 14.1573L5.90143 13.3082C5.85349 13.2873 5.79536 13.263 5.72872 13.2351C5.48256 13.1322 5.12026 12.9806 4.72618 12.7762C4.21046 12.5086 3.76082 12.2087 3.5261 11.9219C3.2 11.5233 2.95944 11.0667 2.81453 10.5802C3.19084 10.676 3.57774 10.7311 3.96858 10.7435L6.58632 10.8266L4.40936 9.37047C3.59293 8.82436 3.01506 7.98788 2.7932 7.03103C2.65511 6.43546 2.66139 5.82107 2.80466 5.23714C3.8664 6.32739 5.10272 7.23717 6.46527 7.92751C8.1954 8.80408 10.0904 9.30728 12.0275 9.40449L13.0196 9.45428L12.7958 8.48647C12.6044 7.65876 12.691 6.79106 13.0423 6.01751C13.3935 5.24396 13.9897 4.60765 14.7389 4.20697C15.488 3.80628 16.3482 3.66353 17.1866 3.80079C18.025 3.93805 18.7948 4.34768 19.3771 4.96633L19.6615 5.26861L20.0687 5.18807C20.1082 5.18027 20.1476 5.17223 20.1869 5.16396C19.8801 5.38574 19.5982 5.5613 19.388 5.66642L19.8467 7.07704C20.1973 7.0186 20.5012 6.96335 20.7664 6.91058ZM20.7664 6.91058C21.2189 6.57818 21.4844 6.28509 21.7652 5.89351C21.7278 5.90561 21.6883 5.91792 21.6465 5.93044C21.0892 6.39024 20.5049 6.785 20.0588 7.00806L19.7234 6.33724L19.6001 5.59745C20.428 5.45946 20.9463 5.34597 21.2872 5.25307M21.5405 3.97607C21.018 4.18326 20.4767 4.34285 19.9232 4.45232L21.5405 3.97607Z"
                    ></path>
                  </svg>
                )}
              </Link>
            ))}
          </div>
          <div className="bg-[#097A8E] text-center pt-[0.5rem] pb-[0.5rem] pl-0 pr-0 w-full">
            <div className="pt-0 pb-0 pl-[1rem] pr-[1rem]   ">
              <hr className="border-b-0 border-r-0 border-l-0 border-t border-solid border-[#e6eaeb] opacity-10 m-0 " />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col items-start pb-[0.5rem] text-[#f5f5f5] bg-[#097A8E] font-normal text-[0.875rem] w-full">
              {thirdNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row items-center justify-center gap-[0.5rem] pt-[0.75rem] pb-[0.75rem] self-stretch"
                >
                  {item.name === "Developed by ShoreaSG" ? (
                    <svg
                      className={classNames("w-[1.5rem] h-[1.5rem] p-0")}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1601 3C7.0948 3 3 7.12498 3 12.2281C3 16.3074 5.62368 19.7604 9.26341 20.9825C9.71847 21.0744 9.88516 20.7839 9.88516 20.5396C9.88516 20.3257 9.87016 19.5924 9.87016 18.8283C7.32204 19.3784 6.79142 17.7283 6.79142 17.7283C6.38192 16.6588 5.77518 16.3839 5.77518 16.3839C4.94118 15.8186 5.83593 15.8186 5.83593 15.8186C6.76105 15.8797 7.24648 16.7658 7.24648 16.7658C8.06529 18.1713 9.38472 17.7742 9.91553 17.5297C9.99128 16.9338 10.2341 16.5213 10.4919 16.2922C8.4596 16.0783 6.32136 15.2838 6.32136 11.7392C6.32136 10.7308 6.68511 9.90578 7.26148 9.26416C7.17055 9.03504 6.85198 8.0876 7.35261 6.81955C7.35261 6.81955 8.12604 6.57505 9.86997 7.76679C10.6166 7.56479 11.3866 7.46203 12.1601 7.46117C12.9335 7.46117 13.722 7.56823 14.45 7.76679C16.1941 6.57505 16.9676 6.81955 16.9676 6.81955C17.4682 8.0876 17.1494 9.03504 17.0585 9.26416C17.6501 9.90578 17.9988 10.7308 17.9988 11.7392C17.9988 15.2838 15.8606 16.0629 13.8131 16.2922C14.1468 16.5824 14.4348 17.1324 14.4348 18.0033C14.4348 19.2408 14.4198 20.234 14.4198 20.5394C14.4198 20.7839 14.5867 21.0744 15.0416 20.9827C18.6813 19.7602 21.305 16.3074 21.305 12.2281C21.32 7.12498 17.2102 3 12.1601 3Z"
                        fill="#F9F9F9"
                      />
                    </svg>
                  ) : (
                    <svg
                      className={classNames("w-[1.5rem] h-[1.5rem] p-0")}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM6.83525 8.07767C6.67664 8.09246 6.56489 8.10356 6.5 8.11096V15.889C6.59373 15.9038 6.72711 15.9149 6.90014 15.9223C7.07317 15.9371 7.25342 15.9482 7.44087 15.9556C7.62832 15.9704 7.81217 15.9815 7.99242 15.9889C8.17266 15.9963 8.32046 16 8.43582 16C9.164 16 9.7588 15.8853 10.2202 15.656C10.6889 15.4193 11.053 15.1123 11.3125 14.7351C11.5793 14.3504 11.7631 13.914 11.864 13.4258C11.965 12.9376 12.0155 12.4383 12.0155 11.9279C12.0155 11.3657 11.965 10.8479 11.864 10.3745C11.7631 9.89367 11.5829 9.47943 11.3233 9.13176C11.071 8.7767 10.7249 8.49931 10.2851 8.29958C9.84532 8.09986 9.29017 8 8.61966 8C8.44663 8 8.24836 8.0037 8.02486 8.0111C7.80857 8.01849 7.59588 8.02959 7.3868 8.04438C7.18493 8.05178 7.00108 8.06288 6.83525 8.07767ZM8.2736 9.37587C8.40337 9.36107 8.53675 9.35368 8.67374 9.35368C9.08469 9.35368 9.40913 9.43504 9.64705 9.59778C9.88498 9.76052 10.0616 9.96764 10.177 10.2191C10.2995 10.4706 10.3752 10.748 10.4041 11.0513C10.4401 11.3546 10.4581 11.6468 10.4581 11.9279C10.4581 12.2534 10.4401 12.5788 10.4041 12.9043C10.368 13.2298 10.2887 13.522 10.1662 13.7809C10.0436 14.0398 9.85614 14.2506 9.6038 14.4133C9.35866 14.5687 9.02702 14.6463 8.60885 14.6463H8.46826C8.41058 14.6389 8.3493 14.6352 8.28441 14.6352C8.22673 14.6278 8.16906 14.6241 8.11138 14.6241C8.0537 14.6167 8.01044 14.6093 7.9816 14.6019V9.39806C8.04649 9.39066 8.14382 9.38326 8.2736 9.37587ZM13.3198 8.07767C13.1612 8.09246 13.0494 8.10356 12.9845 8.11096V15.889C13.0783 15.9038 13.2117 15.9149 13.3847 15.9223C13.5577 15.9371 13.738 15.9482 13.9254 15.9556C14.1129 15.9704 14.2967 15.9815 14.477 15.9889C14.6572 15.9963 14.805 16 14.9204 16C15.6485 16 16.2434 15.8853 16.7048 15.656C17.1734 15.4193 17.5375 15.1123 17.7971 14.7351C18.0638 14.3504 18.2477 13.914 18.3486 13.4258C18.4495 12.9376 18.5 12.4383 18.5 11.9279C18.5 11.3657 18.4495 10.8479 18.3486 10.3745C18.2477 9.89367 18.0674 9.47943 17.8079 9.13176C17.5555 8.7767 17.2095 8.49931 16.7697 8.29958C16.3299 8.09986 15.7747 8 15.1042 8C14.9312 8 14.7329 8.0037 14.5094 8.0111C14.2931 8.01849 14.0804 8.02959 13.8713 8.04438C13.6695 8.05178 13.4856 8.06288 13.3198 8.07767ZM14.7581 9.37587C14.8879 9.36107 15.0213 9.35368 15.1583 9.35368C15.5692 9.35368 15.8937 9.43504 16.1316 9.59778C16.3695 9.76052 16.5462 9.96764 16.6615 10.2191C16.7841 10.4706 16.8598 10.748 16.8886 11.0513C16.9247 11.3546 16.9427 11.6468 16.9427 11.9279C16.9427 12.2534 16.9247 12.5788 16.8886 12.9043C16.8526 13.2298 16.7733 13.522 16.6507 13.7809C16.5281 14.0398 16.3407 14.2506 16.0883 14.4133C15.8432 14.5687 15.5116 14.6463 15.0934 14.6463H14.9528C14.8951 14.6389 14.8338 14.6352 14.769 14.6352C14.7113 14.6278 14.6536 14.6241 14.5959 14.6241C14.5382 14.6167 14.495 14.6093 14.4661 14.6019V9.39806C14.531 9.39066 14.6284 9.38326 14.7581 9.37587Z"
                        fill="#F9F9F9"
                      />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
            <div className="w-full flex flex-row justify-center items-center pt-2 pb-2 pl-0 pr-0 m-0 bg-[#275B6B] shadow-[0px_0px_10px_rgba(6,36,46,0.15)]">
              <span className={`text-[#f5f5f5] ${plusJakartaSans.className} p-0 m-0 font-normal text-sm tracking-[0.03125rem]`}>
                #zilfam
              </span>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <div
          className={
            `flex flex-col justify-between w-[16rem] h-screen bg-[#097A8E] p-0 m-0 overflow-y-auto flex-shrink-0 self-stretch transition-all ease-in-out duration-150`
          }
        >
          <div className="flex flex-col justify-center items-start p-0 w-full">
            <div className="flex flex-col justify-center items-center h-[8.25rem] p-0 w-full">
              <Image
                src="/ZilWorld Logo.png"
                width={112}
                height={112}
                alt="ZilWorld Logo"
              ></Image>
            </div>
            <div className=" w-full">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-[#f5f5f5] text-[#36788C] "
                      : "text-[#f5f5f5]",
                    "flex flex-row items-center justify-start gap-[0.5rem] pt-[0.75rem] pb-[0.75rem] pr-[1rem] pl-[1rem] self-stretch flex-grow-0 hover:bg-[#f5f5f5] hover:text-[#36788C]"
                  )}
                >
                  <item.icon
                    className={classNames("w-[1.5rem] h-[1.5rem] p-0")}
                    aria-hidden="true"
                  />
                  <span className={`p-0  ${plusJakartaSans.className} font-medium text-base`}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-end items-center p-0 self-stretch bg-[#097A8E]">
            <button
              className="bg-[#275B6B] border-none shadow-[-4px_0px_20px_rgba(6,36,46,0.15)] rounded-l-[0.375rem] pt-[0.375rem] pb-[0.375rem] pl-[0.25rem] pr-[0.25rem] content-center"
              onClick={toggleNavbar}
            >
              <ChevronDoubleLeftIcon className="text-[#F9F9F9] w-6 h-6 stroke-2" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-start p-0 w-full">
            <div className="w-full">
              {secondNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-[#f5f5f5] text-[#36788C]"
                      : "text-[#f5f5f5]",
                    "flex flex-row items-center justify-start gap-[0.5rem] pt-[0.75rem] pb-[0.75rem] pr-[1rem] pl-[1rem] self-stretch flex-grow-0 hover:bg-[#f5f5f5] hover:text-[#36788C]"
                  )}
                >
                  {item.name !== "Connect" ? (
                    <item.icon
                      className={classNames("w-[1.5rem] h-[1.5rem] p-0")}
                      aria-hidden="true"
                    />
                  ) : (
                    <svg
                      className={classNames("w-[1.5rem] h-[1.5rem] p-0")}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.7664 6.91058C20.7543 6.91951 20.742 6.92847 20.7296 6.93746L20.4018 7.17446L20.4198 7.57849C20.4281 7.76464 20.4322 7.9554 20.4322 8.142C20.4322 13.9091 16.0443 20.506 8.06823 20.506H8.06784C6.68014 20.5067 5.30949 20.2732 4.01168 19.8218C5.564 19.5219 7.03251 18.8561 8.29017 17.8682L9.94189 16.5708L7.84194 16.5286C7.03644 16.5124 6.25609 16.2451 5.6098 15.7641C5.28124 15.5196 4.99567 15.226 4.76187 14.8957C5.11189 14.8714 5.45977 14.8126 5.80038 14.7194L7.85487 14.1573L5.90143 13.3082C5.85349 13.2873 5.79536 13.263 5.72872 13.2351C5.48256 13.1322 5.12026 12.9806 4.72618 12.7762C4.21046 12.5086 3.76082 12.2087 3.5261 11.9219C3.2 11.5233 2.95944 11.0667 2.81453 10.5802C3.19084 10.676 3.57774 10.7311 3.96858 10.7435L6.58632 10.8266L4.40936 9.37047C3.59293 8.82436 3.01506 7.98788 2.7932 7.03103C2.65511 6.43546 2.66139 5.82107 2.80466 5.23714C3.8664 6.32739 5.10272 7.23717 6.46527 7.92751C8.1954 8.80408 10.0904 9.30728 12.0275 9.40449L13.0196 9.45428L12.7958 8.48647C12.6044 7.65876 12.691 6.79106 13.0423 6.01751C13.3935 5.24396 13.9897 4.60765 14.7389 4.20697C15.488 3.80628 16.3482 3.66353 17.1866 3.80079C18.025 3.93805 18.7948 4.34768 19.3771 4.96633L19.6615 5.26861L20.0687 5.18807C20.1082 5.18027 20.1476 5.17223 20.1869 5.16396C19.8801 5.38574 19.5982 5.5613 19.388 5.66642L19.8467 7.07704C20.1973 7.0186 20.5012 6.96335 20.7664 6.91058ZM20.7664 6.91058C21.2189 6.57818 21.4844 6.28509 21.7652 5.89351C21.7278 5.90561 21.6883 5.91792 21.6465 5.93044C21.0892 6.39024 20.5049 6.785 20.0588 7.00806L19.7234 6.33724L19.6001 5.59745C20.428 5.45946 20.9463 5.34597 21.2872 5.25307M21.5405 3.97607C21.018 4.18326 20.4767 4.34285 19.9232 4.45232L21.5405 3.97607Z"
                      ></path>
                    </svg>
                  )}

                  <span className={`p-0 ${plusJakartaSans.className} font-medium text-base`}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="bg-[#097A8E] text-center pt-[0.5rem] pb-[0.5rem] pl-0 pr-0 w-full">
              <div className="pt-0 pb-0 pl-[1rem] pr-[1rem]   ">
                <hr className="border-b-0 border-r-0 border-l-0 border-t border-solid border-[#e6eaeb] opacity-10 m-0 " />
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col items-start pb-[0.5rem] text-[#f5f5f5] bg-[#097A8E] font-normal text-[0.875rem] w-full">
                {thirdNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-row items-center justify-start gap-[0.5rem] pt-[0.75rem] pb-[0.75rem] pr-[1rem] pl-[1rem] self-stretch flex-grow-0"
                  >
                    {item.name === "Developed by ShoreaSG" ? (
                      <svg
                        className={classNames("w-[1.5rem] h-[1.5rem] p-0")}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.1601 3C7.0948 3 3 7.12498 3 12.2281C3 16.3074 5.62368 19.7604 9.26341 20.9825C9.71847 21.0744 9.88516 20.7839 9.88516 20.5396C9.88516 20.3257 9.87016 19.5924 9.87016 18.8283C7.32204 19.3784 6.79142 17.7283 6.79142 17.7283C6.38192 16.6588 5.77518 16.3839 5.77518 16.3839C4.94118 15.8186 5.83593 15.8186 5.83593 15.8186C6.76105 15.8797 7.24648 16.7658 7.24648 16.7658C8.06529 18.1713 9.38472 17.7742 9.91553 17.5297C9.99128 16.9338 10.2341 16.5213 10.4919 16.2922C8.4596 16.0783 6.32136 15.2838 6.32136 11.7392C6.32136 10.7308 6.68511 9.90578 7.26148 9.26416C7.17055 9.03504 6.85198 8.0876 7.35261 6.81955C7.35261 6.81955 8.12604 6.57505 9.86997 7.76679C10.6166 7.56479 11.3866 7.46203 12.1601 7.46117C12.9335 7.46117 13.722 7.56823 14.45 7.76679C16.1941 6.57505 16.9676 6.81955 16.9676 6.81955C17.4682 8.0876 17.1494 9.03504 17.0585 9.26416C17.6501 9.90578 17.9988 10.7308 17.9988 11.7392C17.9988 15.2838 15.8606 16.0629 13.8131 16.2922C14.1468 16.5824 14.4348 17.1324 14.4348 18.0033C14.4348 19.2408 14.4198 20.234 14.4198 20.5394C14.4198 20.7839 14.5867 21.0744 15.0416 20.9827C18.6813 19.7602 21.305 16.3074 21.305 12.2281C21.32 7.12498 17.2102 3 12.1601 3Z"
                          fill="#F9F9F9"
                        />
                      </svg>
                    ) : (
                      <svg
                        className={classNames("w-[1.5rem] h-[1.5rem] p-0")}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM6.83525 8.07767C6.67664 8.09246 6.56489 8.10356 6.5 8.11096V15.889C6.59373 15.9038 6.72711 15.9149 6.90014 15.9223C7.07317 15.9371 7.25342 15.9482 7.44087 15.9556C7.62832 15.9704 7.81217 15.9815 7.99242 15.9889C8.17266 15.9963 8.32046 16 8.43582 16C9.164 16 9.7588 15.8853 10.2202 15.656C10.6889 15.4193 11.053 15.1123 11.3125 14.7351C11.5793 14.3504 11.7631 13.914 11.864 13.4258C11.965 12.9376 12.0155 12.4383 12.0155 11.9279C12.0155 11.3657 11.965 10.8479 11.864 10.3745C11.7631 9.89367 11.5829 9.47943 11.3233 9.13176C11.071 8.7767 10.7249 8.49931 10.2851 8.29958C9.84532 8.09986 9.29017 8 8.61966 8C8.44663 8 8.24836 8.0037 8.02486 8.0111C7.80857 8.01849 7.59588 8.02959 7.3868 8.04438C7.18493 8.05178 7.00108 8.06288 6.83525 8.07767ZM8.2736 9.37587C8.40337 9.36107 8.53675 9.35368 8.67374 9.35368C9.08469 9.35368 9.40913 9.43504 9.64705 9.59778C9.88498 9.76052 10.0616 9.96764 10.177 10.2191C10.2995 10.4706 10.3752 10.748 10.4041 11.0513C10.4401 11.3546 10.4581 11.6468 10.4581 11.9279C10.4581 12.2534 10.4401 12.5788 10.4041 12.9043C10.368 13.2298 10.2887 13.522 10.1662 13.7809C10.0436 14.0398 9.85614 14.2506 9.6038 14.4133C9.35866 14.5687 9.02702 14.6463 8.60885 14.6463H8.46826C8.41058 14.6389 8.3493 14.6352 8.28441 14.6352C8.22673 14.6278 8.16906 14.6241 8.11138 14.6241C8.0537 14.6167 8.01044 14.6093 7.9816 14.6019V9.39806C8.04649 9.39066 8.14382 9.38326 8.2736 9.37587ZM13.3198 8.07767C13.1612 8.09246 13.0494 8.10356 12.9845 8.11096V15.889C13.0783 15.9038 13.2117 15.9149 13.3847 15.9223C13.5577 15.9371 13.738 15.9482 13.9254 15.9556C14.1129 15.9704 14.2967 15.9815 14.477 15.9889C14.6572 15.9963 14.805 16 14.9204 16C15.6485 16 16.2434 15.8853 16.7048 15.656C17.1734 15.4193 17.5375 15.1123 17.7971 14.7351C18.0638 14.3504 18.2477 13.914 18.3486 13.4258C18.4495 12.9376 18.5 12.4383 18.5 11.9279C18.5 11.3657 18.4495 10.8479 18.3486 10.3745C18.2477 9.89367 18.0674 9.47943 17.8079 9.13176C17.5555 8.7767 17.2095 8.49931 16.7697 8.29958C16.3299 8.09986 15.7747 8 15.1042 8C14.9312 8 14.7329 8.0037 14.5094 8.0111C14.2931 8.01849 14.0804 8.02959 13.8713 8.04438C13.6695 8.05178 13.4856 8.06288 13.3198 8.07767ZM14.7581 9.37587C14.8879 9.36107 15.0213 9.35368 15.1583 9.35368C15.5692 9.35368 15.8937 9.43504 16.1316 9.59778C16.3695 9.76052 16.5462 9.96764 16.6615 10.2191C16.7841 10.4706 16.8598 10.748 16.8886 11.0513C16.9247 11.3546 16.9427 11.6468 16.9427 11.9279C16.9427 12.2534 16.9247 12.5788 16.8886 12.9043C16.8526 13.2298 16.7733 13.522 16.6507 13.7809C16.5281 14.0398 16.3407 14.2506 16.0883 14.4133C15.8432 14.5687 15.5116 14.6463 15.0934 14.6463H14.9528C14.8951 14.6389 14.8338 14.6352 14.769 14.6352C14.7113 14.6278 14.6536 14.6241 14.5959 14.6241C14.5382 14.6167 14.495 14.6093 14.4661 14.6019V9.39806C14.531 9.39066 14.6284 9.38326 14.7581 9.37587Z"
                          fill="#F9F9F9"
                        />
                      </svg>
                    )}

                    <span className={`p-0 ${plusJakartaSans.className} font-normal text-sm`}>
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="w-full flex flex-row justify-center items-center pt-2 pb-2 pl-0 pr-0 m-0 bg-[#275B6B] shadow-[0px_0px_10px_rgba(6,36,46,0.15)]">
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
