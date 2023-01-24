import Link from "next/link";
import { TokenDetailsCardProps } from "../../../types";

export default function TokenDetailsCard({ token }: TokenDetailsCardProps) {
  return (
    <div className="flex flex-1 flex-col md:pl-64">
      <div className="p-6">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="bg-white p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="flex-shrink-0 flex flex-col justify-center">
                  <img
                    className="mx-auto h-20 w-20"
                    src={token.icon}
                    alt="token icon"
                  />
                </div>
                <div className="flex flex-col justify-center text-center sm:text-left">
                  <p className="text-xl text-center font-bold text-gray-900 sm:text-2xl">
                    {token.name}
                  </p>
                  <p className=" text-sm text-center text-gray-400 sm:text-lg">
                    {token.symbol}
                  </p>
                </div>
                <p className="flex flex-col justify-center text-lg">
                  {token.description}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:auto-cols-auto sm:divide-y-0 sm:divide-x">
            {token.website ? (
              <div className="px-6 py-5 text-center text-sm font-medium ">
                <Link
                  target={"_blank"}
                  href={token.website}
                  className="hover:text-[#0A7581]"
                >
                  Website
                </Link>
              </div>
            ) : (
              true
            )}
            {token.telegram ? (
              <div className="px-6 py-5 text-center text-sm font-medium">
                <Link
                  target={"_blank"}
                  href={token.telegram}
                  className="hover:text-[#0A7581]"
                >
                  Telegram
                </Link>
              </div>
            ) : (
              true
            )}

            {token.discord ? (
              <div className="px-6 py-5 text-center text-sm font-medium ">
                <Link
                  target={"_blank"}
                  href={token.discord}
                  className="hover:text-[#0A7581]"
                >
                  Discord
                </Link>
              </div>
            ) : (
              true
            )}
            <div className="px-6 py-5 text-center text-sm font-medium">
              <Link
                href={`https://viewblock.io/zilliqa/address/${token.address}`}
                target={"_blank"}
                className="hover:text-[#0A7581]"
              >
                Viewblock
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
