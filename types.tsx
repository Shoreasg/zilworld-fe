import { DeleteExpression } from "typescript";

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

export interface IProjects {
  name: string;
  description: string;
  icon: string;
  updated_at: string;
  category: string;
  tokens: string[];
  marketplace_arky: boolean;
  marketplace_zildex: boolean;
  marketplace_cathulu: boolean;
  website: string;
  telegram: string;
  twitter: string;
  discord: string;
}

interface IDataSet {
  time: string;
  value: number;
}

export interface ITokenChart {
  address: string;
  updated_at: string;
  dataset: IDataSet[];
}

export interface TokenDetailsCardProps {
  tokenData: ITokens;
}

export interface ProjectDetailsCardProps {
  projectData: IProjects;
}

export interface TokenStatsCardProps {
  marketData: IMarketdata;
}

export interface TokenChartProps {
  chartData: ITokenChart;
}

export interface ProjectsCardProps {
  projectsData: IProjects[];
}

export type ITokenParams = {
  params: {
    token: string;
  };
};

export type IProjectNameParams = {
  params: {
    project: string;
  };
};
