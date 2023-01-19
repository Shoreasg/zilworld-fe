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

  const stats = [
    {
      name: "Intial Supply",
      stat: token.marketdata.initial_supply,
    },
    {
      name: "Max Supply",
      stat: token.marketdata.max_supply,
    },
    {
      name: "Total Supply",
      stat: token.marketdata.total_supply,
    },
    {
      name: "Current Supply",
      stat: token.marketdata.current_supply,
    },
    {
      name: "Daily Volume",
      stat: `$${Number(token.marketdata.daily_volume_usd).toFixed(0)}`,
    },
    {
      name: "Market Cap",
      stat: `$${Number(token.marketdata.market_cap_usd).toFixed(0)}`,
    },
    {
      name: "Fully Diluted Market Cap",
      stat: `$${Number(token.marketdata.fully_diluted_marketcap_usd).toFixed(
        0
      )}`,
    },
    {
      name: "Price",
      stat: `$${Number(token.marketdata.usd_rate).toFixed(3)}`,
    },
    {
      name: "Change (24h)",
      stat: `$${Number(token.marketdata.change_24h).toFixed(2)}`,
    },
    {
      name: "% Change (24h)",
      stat: `${Number(token.marketdata.change_percentage_24h).toFixed(2)} %`,
    },
    {
      name: "All time low (24h)",
      stat: `$${Number(token.marketdata.low_24h).toFixed(2)}`,
    },
    {
      name: "All time high (24h)",
      stat: `$${Number(token.marketdata.high_24h).toFixed(2)}`,
    },
    {
      name: "% Change (7D)",
      stat: `${Number(token.marketdata.change_percentage_7d).toFixed(2)} %`,
    },
    // { name: "Total Subscribers", stat: "71,897" },
    // { name: "Avg. Open Rate", stat: "58.16%" },
    // { name: "Avg. Click Rate", stat: "24.57%" },
  ];

  return (
    <>
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
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Market data
          </h3>
          <p className="text-xs font-medium leading-6 text-red-500">
            Note: Market data are in USD
          </p>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.name}
                className=" overflow-x-auto rounded-lg bg-white px-4 py-5 shadow sm:p-6"
              >
                <dt className="truncate text-sm font-medium text-gray-500">
                  {item.name}
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
