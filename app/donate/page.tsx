import { Metadata } from "next";
import MainDonateWeb from "./Web/MainDonateWeb";
import MainDonateMobile from "./Mobile/MainDonateMobile";

export const metadata: Metadata = {
  title: "ZilWorld-Ecosystem of Zilliqa",
  description: "Ecosystem of Zilliqa",
  icons: {
    icon: "/ZilWorld Logo.png",
  },
};

export default function DonateWeb() {
  return (
    <>
      <div className="block lg:hidden z-20 ">
        <div className="flex flex-col w-full h-full">
          <MainDonateMobile />
        </div>
      </div>
      <div className="hidden lg:flex flex-grow basis-0 flex-shrink-0 self-stretch ">
        <div className="flex flex-col w-full h-full overflow-y-auto">
          <MainDonateWeb/>
        </div>
      </div>
    </>
  );
}
