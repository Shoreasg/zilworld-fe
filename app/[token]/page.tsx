import Link from "next/link";
import { ITokens } from "../../types";

type IParams = {
  params: {
    token: string;
  };
};

async function getTokenData(tokenAddress: string) {
  const res = await fetch(`http://localhost:3001/tokens/${tokenAddress}`);
  return res.json();
}

export default async function Token({ params }: IParams) {
  const tokenData = await getTokenData(params.token);
  const token: ITokens = tokenData.data;

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
                </div>
                <p className="flex flex-col justify-center">
                  {token.description}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:auto-cols-auto sm:divide-y-0 sm:divide-x">
            {token.website ? (
              <div className="px-6 py-5 text-center text-sm font-medium hover:text-[#0A7581]">
                <Link target={"_blank"} href={token.website}>
                  Website
                </Link>
              </div>
            ) : (
              true
            )}
            {token.telegram ? (
              <div className="px-6 py-5 text-center text-sm font-medium hover:text-[#0A7581]">
                <Link target={"_blank"} href={token.telegram}>
                  Telegram
                </Link>
              </div>
            ) : (
              true
            )}

            {token.discord ? (
              <div className="px-6 py-5 text-center text-sm font-medium hover:text-[#0A7581]">
                <Link target={"_blank"} href={token.discord}>
                  Discord
                </Link>
              </div>
            ) : (
              true
            )}
            <div className="px-6 py-5 text-center text-sm font-medium hover:text-[#0A7581]">
              <Link
                href={`https://viewblock.io/zilliqa/address/${token.address}`}
                target={"_blank"}
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
