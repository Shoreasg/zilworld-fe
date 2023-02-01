import { TokenStatsCardProps } from "../../../types";

export default function TokenStatsCard({ marketData }: TokenStatsCardProps) {
  const stats = [
    {
      name: "Intial Supply",
      stat: marketData?.initial_supply.toLocaleString("en-US"),
    },
    {
      name: "Max Supply",
      stat: marketData?.max_supply.toLocaleString("en-US"),
    },
    {
      name: "Total Supply",
      stat: marketData?.total_supply.toLocaleString("en-US"),
    },
    {
      name: "Current Supply",
      stat: marketData?.current_supply.toLocaleString("en-US"),
    },
    {
      name: "Daily Volume",
      stat: `$${Number(marketData?.daily_volume_usd.toFixed(0)).toLocaleString(
        "en-US"
      )}`,
    },
    {
      name: "Market Cap",
      stat: `$${Number(marketData?.market_cap_usd.toFixed(0)).toLocaleString(
        "en-US"
      )}`,
    },
    {
      name: "Fully Diluted Market Cap",
      stat: `$${Number(
        marketData?.fully_diluted_marketcap_usd.toFixed(0)
      ).toLocaleString("en-US")}`,
    },
    {
      name: "Price",
      stat: `$${Number(marketData?.usd_rate.toFixed(3)).toLocaleString(
        "en-US"
      )}`,
    },
    {
      name: "Change (24h)",
      stat: `$${Number(marketData?.change_24h.toFixed(2)).toLocaleString(
        "en-US"
      )}`,
    },
    {
      name: "% Change (24h)",
      stat: `${Number(marketData?.change_percentage_24h).toFixed(2)} %`,
    },
    {
      name: "All time low (24h)",
      stat: `$${Number(marketData?.low_24h.toFixed(2)).toLocaleString(
        "en-US"
      )}`,
    },
    {
      name: "All time high (24h)",
      stat: `$${Number(marketData?.high_24h.toFixed(2)).toLocaleString(
        "en-US"
      )}`,
    },
    {
      name: "% Change (7D)",
      stat: `${Number(
        marketData?.change_percentage_7d.toFixed(2)
      ).toLocaleString("en-US")} %`,
    },
  ];

  return (
    <div className="flex flex-1 flex-col md:pl-64">
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900">Market data</h3>
        <p className="text-xs font-medium leading-6 text-red-500">
          Note: Market data are in USD
        </p>
        <dl className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
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
