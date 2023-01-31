import { ITokens, IMarketdata, ITokenChart, ITokenParams } from "../../types";
import TokenChart from "./components/tokenChart";
import TokenDetailsCard from "./components/tokenDetailsCard";
import TokenStatsCard from "./components/tokenStatsCard";
import TwitterWidget from "./components/twitterWidget";

async function getTokenData(tokenAddress: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/tokens/${tokenAddress}`
  );
  return res.json();
}
async function getTokenChart(tokenAddress: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/chart/${tokenAddress}`
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
      <TokenChart chartData={tokenChart} />/
      <TwitterWidget tokenData={token} />
    </>
  );
}
