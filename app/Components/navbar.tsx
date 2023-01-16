"use client";

import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const navigation = [
    { name: "Tokens", href: "/", current: pathname === "/" },
    { name: "DEX", href: "/dex", current: pathname === "/dex" },
    { name: "NFT", href: "/nft", current: pathname === "/nft" },
    {
      name: "NFT Marketplace",
      href: "/marketplace",
      current: pathname === "/marketplace",
    },
    {
      name: "Wallets",
      href: "/wallets",
      current: pathname === "/wallets",
    },
    {
      name: "Play2Earn",
      href: "/play2earn",
      current: pathname === "/play2earn",
    },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex h-screen flex-col bg-[#077a8f]">
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div className="flex justify-center">
          <div className="font-sans font-bold text-[#49c1bf] select-none">
            ZilWorld
          </div>
        </div>
        <nav
          className="mt-5 flex-1 space-y-1 px-2 text-center"
          aria-label="Sidebar"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-slate-900 text-white"
                  : "text-gray-300 hover:bg-[#49c1bf] hover:text-white",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
            >
              <span className="flex-1">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
