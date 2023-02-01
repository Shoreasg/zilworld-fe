import { ITokens, IMarketdata, ITokenChart, ITokenParams } from "../../types";
import TokenChart from "./components/TokenChart";
import TokenDetailsCard from "./components/TokenDetailsCard";
import TokenStatsCard from "./components/TokenStatsCard";
import TwitterWidget from "./components/TwitterWidget";

async function getTokenData(tokenAddress: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/tokens/${tokenAddress}`,
    { cache: "no-store" }
  );
  return res.json();
}
async function getTokenChart(tokenAddress: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/chart/${tokenAddress}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function Token({ params }: ITokenParams) {
  const tokenData = await getTokenData(params.token);
  const tokenChartData = await getTokenChart(params.token);
  const token: ITokens = tokenData.data;
  const tokenMarketData: IMarketdata = tokenData.data.marketdata;
  const tokenChart: ITokenChart = tokenChartData.data;

  return (
    <>
      <TokenDetailsCard tokenData={token} />
      <TokenStatsCard marketData={tokenMarketData} />
      <TokenChart chartData={tokenChart} />
      <TwitterWidget tokenData={token} />
    </>
  );
}
