import { ITokens, IMarketdata } from "../../types";
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

export default async function Token({ params }: IParams) {
  const tokenData = await getTokenData(params.token);
  const token: ITokens = tokenData.data;
  const tokenMarketData: IMarketdata = tokenData.data.marketdata;

  return (
    <>
      <TokenDetailsCard token={token} />
      <TokenStatsCard marketData={tokenMarketData} />
    </>
  );
}
