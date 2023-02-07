"use client";

import { usePathname } from "next/navigation";
import {
  CurrencyDollarIcon,
  XMarkIcon,
  Bars3Icon,
  FolderIcon,
  QuestionMarkCircleIcon,
  PhotoIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon,
  BuildingStorefrontIcon,
  PuzzlePieceIcon,
  MusicalNoteIcon,
  WalletIcon,
  NewspaperIcon,
  TvIcon,
  CakeIcon,
  ArrowPathIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CreditCardIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  EyeDropperIcon,
  FingerPrintIcon,
  ArchiveBoxIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    {
      name: "Projects",
      icon: FolderIcon,
      href: "/projects",
      current: pathname === "/projects",
    },
    // {
    //   name: "Wallets",
    //   icon: WalletIcon,
    //   href: "/wallets",
    //   current: pathname === "/wallets",
    // },
    // {
    //   name: "DEX",
    //   icon: ArrowPathIcon,
    //   href: "/dex",
    //   current: pathname === "/dex",
    // },
    // {
    //   name: "NFT",
    //   icon: PhotoIcon,
    //   href: "/nft",
    //   current: pathname === "/nft",
    // },
    // {
    //   name: "Analytics & Dashboard",
    //   icon: ChartBarIcon,
    //   href: "/analytics",
    //   current: pathname === "/analytics",
    // },
    // {
    //   name: "NFT MarketPlace",
    //   icon: BuildingStorefrontIcon,
    //   href: "/nftmarketplace",
    //   current: pathname === "/nftmarketplace",
    // },
    // {
    //   name: "Watch",
    //   icon: TvIcon,
    //   href: "/watch",
    //   current: pathname === "/watch",
    // },
    // {
    //   name: "Games",
    //   icon: PuzzlePieceIcon,
    //   href: "/games",
    //   current: pathname === "/games",
    // },
    // {
    //   name: "Music",
    //   icon: MusicalNoteIcon,
    //   href: "/music",
    //   current: pathname === "/music",
    // },
    // {
    //   name: "News & Infographics",
    //   icon: NewspaperIcon,
    //   href: "/news",
    //   current: pathname === "/news",
    // },
    // {
    //   name: "Initial Liquidity Offering & Grants",
    //   icon: CakeIcon,
    //   href: "/ilo",
    //   current: pathname === "/ilo",
    // },
    // {
    //   name: "Bridges",
    //   icon: ArrowsRightLeftIcon,
    //   href: "/bridges",
    //   current: pathname === "/bridges",
    // },
    // {
    //   name: "Messaging",
    //   icon: ChatBubbleOvalLeftEllipsisIcon,
    //   href: "/messaging",
    //   current: pathname === "/messaging",
    // },
    // {
    //   name: "Finance",
    //   icon: CreditCardIcon,
    //   href: "/finance",
    //   current: pathname === "/finance",
    // },
    // {
    //   name: "Create",
    //   icon: UserGroupIcon,
    //   href: "/create",
    //   current: pathname === "/create",
    // },
    // {
    //   name: "Decentralized Identity",
    //   icon: FingerPrintIcon,
    //   href: "/decentralizedidentity",
    //   current: pathname === "/decentralizedidentity",
    // },
    // {
    //   name: "Liquid Staking",
    //   icon: EyeDropperIcon,
    //   href: "/liquidstaking",
    //   current: pathname === "/liquidstaking",
    // },
    // {
    //   name: "Ecommerce",
    //   icon: ArchiveBoxIcon,
    //   href: "/ecommerce",
    //   current: pathname === "/ecommerce",
    // },
    // {
    //   name: "Education",
    //   icon: AcademicCapIcon,
    //   href: "/education",
    //   current: pathname === "/education",
    // },
    // {
    //   name: "Developer Tools",
    //   icon: WrenchScrewdriverIcon,
    //   href: "/developertools",
    //   current: pathname === "/developertools",
    // },
    {
      name: "Tokens",
      icon: CurrencyDollarIcon,
      href: "/tokens",
      current: pathname === "/tokens",
    },
    {
      name: "FAQ",
      icon: QuestionMarkCircleIcon,
      href: "/faq",
      current: pathname === "/faq",
    },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-[#077a8f]">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-14 -mr-8 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-row justify-center">
                      <img
                        className="h-20 w-auto"
                        src="/ZilWorld Logo.png"
                        alt="ZilWorld logo"
                      />
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-slate-900 text-white"
                              : "text-gray-300 hover:bg-[#49c1bf] hover:text-white",
                            "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-4 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                    <a className="text-gray-400 hover:text-gray-500 text flex flex-row justify-center mt-2 border-t " href="https://twitter.com/zilworldapp" target={"_blank"}>
                  <svg fill="currentColor" viewBox="0 0 24 24" width={20} height={16} className="mt-4" >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <div className="text-center text-white text-sm mt-2">Created by ShoreaSG</div>
                <div className="text-center text-white text-sm mt-2">#Zilfam</div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0"></div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          <div className="flex min-h-0 flex-1 flex-col  bg-[#077a8f]">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex justify-center">
                <div className="flex flex-row justify-center">
                  <img
                    className=" h-28 w-auto"
                    src="/ZilWorld Logo.png"
                    alt="ZilWorld logo"
                  />
                </div>
              </div>
              <nav className="mt-5 flex-1 space-y-1 px-2" aria-label="Sidebar">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-slate-900 text-white"
                        : "text-gray-300 hover:bg-[#49c1bf] hover:text-white",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    <span className="flex-1">{item.name}</span>
                  </Link>
                ))}
              </nav>
              <a className="text-gray-400 hover:text-gray-500 text flex flex-row justify-center mt-2 border-t " href="https://twitter.com/zilworldapp" target={"_blank"}>
                  <svg fill="currentColor" viewBox="0 0 24 24" width={20} height={16} className="mt-4" >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <div className="flex justify-center text-white text-sm mt-2">Created by ShoreaSG</div>
                <div className="text-center text-white text-sm mt-2">#Zilfam</div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-[#077a8f] pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6 text-gray-300" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
