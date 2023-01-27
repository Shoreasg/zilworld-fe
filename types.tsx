export interface IMarketdata {
  usd_rate: number;
  ath: number;
  atl: number;
  change_24h: number;
  low_24h: number;
  high_24h: number;
  change_percentage_24h: number;
  change_percentage_7d: number;
  initial_supply: number;
  max_supply: number;
  total_supply: number;
  current_supply: number;
  daily_volume_usd: number;
  market_cap_usd: number;
  fully_diluted_marketcap_usd: number;
}

export interface ITokens {
  name: string;
  symbol: string;
  address: string;
  icon: string;
  decimals: number;
  description: string;
  website: string;
  telegram: string;
  twitter: string;
  discord: string;
  marketdata: IMarketdata;
}

interface IDataSet {
  time: string;
  value: number;
}

export interface ITokenChart {
  address: string;
  updated_at: string;
  dataset: Array<IDataSet>;
}

export interface TokenDetailsCardProps {
  tokenData: ITokens;
}

export interface TokenStatsCardProps {
  marketData: IMarketdata;
}

export interface TokenChartProps {
  chartData: ITokenChart;
}
