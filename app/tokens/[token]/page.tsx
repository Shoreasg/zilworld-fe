import { redirect } from 'next/navigation';
import { ITokenParams } from "../../../types";
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
  const token = tokenData.data;
  const tokenMarketData = tokenData.data.marketdata;
  const tokenChart = tokenChartData.data;
  if(token === "No token found")
  {
    redirect("/tokens")
  }

  return (
    <>
      <TokenDetailsCard tokenData={token} />
      <TokenStatsCard marketData={tokenMarketData} />
      <TokenChart chartData={tokenChart} />
      <TwitterWidget tokenData={token} />
    </>
  );
}
