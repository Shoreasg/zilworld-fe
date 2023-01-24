import { TokenStatsCardProps } from "../../../types";

export default function TokenStatsCard({ token }: TokenStatsCardProps) {
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
  ];

  return (
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
  );
}
