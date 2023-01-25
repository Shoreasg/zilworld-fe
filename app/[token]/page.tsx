import { ITokens, IMarketdata, ITokenChart } from "../../types";
import TokenChart from "./components/tokenChart";
import TokenDetailsCard from "./components/tokenDetailsCard";
import TokenStatsCard from "./components/tokenStatsCard";

type IParams = {
  params: {
    token: string;
  };
};

async function getTokenData(tokenAddress: string) {
  const res = await fetch(`http://localhost:3001/tokens/${tokenAddress}`);
  return res.json();
}
async function getTokenChart(tokenAddress: string) {
  const res = await fetch(`http://localhost:3001/chart/${tokenAddress}`);
  return res.json();
}

export default async function Token({ params }: IParams) {
  const tokenData = await getTokenData(params.token);
  const tokenChartData = await getTokenChart(params.token);
  const token: ITokens = tokenData.data;
  const tokenMarketData: IMarketdata = tokenData.data.marketdata;
  const tokenChart: ITokenChart = tokenChartData.data;

  return (
    <>
      <TokenDetailsCard token={token} />
      <TokenStatsCard marketData={tokenMarketData} />
      <TokenChart chartData={tokenChart} />
    </>
  );
}
