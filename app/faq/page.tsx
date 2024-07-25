import { Metadata } from "next";
import FaqWeb from "./Web/FaqWeb";
import FaqMobile from "./Mobile/FaqMobile";
export const metadata: Metadata = {
  title: "ZilWorld-Ecosystem of Zilliqa",
  description: "Ecosystem of Zilliqa",
  icons: {
    icon: "/ZilWorld Logo.png",
  },
};

export default function Faq() {
  return (
    <>
      <div className="block lg:hidden z-20 ">
        <div className="flex flex-col w-full h-full">
            <FaqMobile/>
        </div>
      </div>
      <div className="hidden lg:flex flex-grow basis-0 flex-shrink-0 self-stretch ">
        <div className="flex flex-col w-full h-full overflow-y-auto">
          <FaqWeb/>
        </div>
      </div>
    </>
  );
}
