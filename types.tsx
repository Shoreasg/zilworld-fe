import { Dispatch, SetStateAction } from "react";

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

export interface IAnnouncement {
  title: string;
  preview: string;
}

export interface IProjectTokens {
  tokenAddress: string;
  zilworldURL: string;
  tokenCategory: string;
  tokenLogo: string;
}

export interface IProjectWebsite{
  websiteURL: string;
}

export interface IProjectTelegram{
  telegramURL: string;
}

export interface IProjectTwitter{
  twitterURL: string;
}

export interface IProjectDiscord{
  discordURL: string;
}

export interface IProjectViewBlock{
  viewblockURL: string;
}

export interface IProjectWhitepaper{
  whitepaperURL: string;
}

export interface IProjectGithub{
  githubURL: string;
}

export interface IProjectMedium{
  mediumURL: string;
}

export interface IProjectLinkedin{
  linkedinURL: string;
}

export interface IProjectYoutube{
  youtubeURL: string;
}

export interface IProjectReddit{
  redditURL: string;
}

export interface IProjectFacebook{
  facebookURL: string;
}

export interface IProjectRelated{
  relatedName: string;
  relatedURL: string;
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

export interface ProjectLogoProps {
  projectIcon:string;
}

export interface IProjects {
  name: string;
  description: string;
  icon: string;
  updated_at: string;
  category: string[];
  tokens: [IProjectTokens];
  NFT_address: string[];
  marketplace_arky: boolean;
  marketplace_zildex: boolean;
  marketplace_cathulu: boolean;
  website: [IProjectWebsite];
  telegram: [IProjectTelegram];
  twitter: [IProjectTwitter];
  discord: [IProjectDiscord];
  viewblock: [IProjectViewBlock];
  whitepaper: [IProjectWhitepaper];
  github: [IProjectGithub];
  medium: [IProjectMedium];
  linkedin: [IProjectLinkedin];
  youtube: [IProjectYoutube];
  reddit: [IProjectReddit];
  facebook: [IProjectFacebook];
  related: [IProjectRelated]
  isActive: boolean;
  isBuilding: boolean;
  isNew: boolean;
  announcements: [IAnnouncement];
}

export interface IProjectCategories {
  name: string;
  numClicks: number;
  numCategories: number;
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

export interface NewProjectDetailsCardProps {
  NewProjectData: IProjects;
}

export interface TokenStatsCardProps {
  marketData: IMarketdata;
}

export interface TokenChartProps {
  chartData: ITokenChart;
}

export interface CardProps {
  projectsData: IProjects[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  search: string;
}

export interface SearchBarProps {
  categories: IProjectCategories[];
  numProjects: number;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
}

export interface ProjectPopularFilterProps {
  categories: IProjectCategories[];
  setSelected: Dispatch<SetStateAction<string>>;
}

export interface ProjectWithFilterProps {
  categories: IProjectCategories[];
  numProjects: number;
  projectsData: IProjects[];
  projectsRef: React.RefObject<HTMLDivElement>;
}

export interface MobileSearchBarProps {
  categories: IProjectCategories[];
  numProjects: number;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export interface MobileSearchStickyBarProps {
  categories: IProjectCategories[];
  numProjects: number;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
  isClickSearch: boolean;
  setIsClickSearch: Dispatch<SetStateAction<boolean>>;
  isClickSearchRef: React.RefObject<HTMLInputElement>;
  isClickedFilter: boolean;
  search: string;
  setIsClickedFilter: Dispatch<SetStateAction<boolean>>;
  isClickedFilterRef: React.RefObject<HTMLButtonElement>;
}

export interface MainProjectWebProps {
  categories: IProjectCategories[];
  numProjects: number;
  projectsData: IProjects[];
}

export interface MainProjectMobileProps {
  categories: IProjectCategories[];
  numProjects: number;
  projectsData: IProjects[];
}

export interface HeroProps {
  projectsRef: React.RefObject<HTMLDivElement>;
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

export type INewProjectNameParams = {
  params: {
    newproject: string;
  };
};
