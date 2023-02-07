import { CardProps } from "../../../types";
import { mapProjects } from "../../functions";

export default function ProjectsCard({ projectsData }: CardProps) {
  return (
    <div className="ml-6 flex flex-col justify-center">
      <h1 className="text-2xl text-center lg:text-left font-semibold text-gray-900 mb-6">
        Wallets
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Wallets", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-center lg:text-left text-gray-900 mb-6 mt-6">DEX</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("DEX", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">NFT</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("NFT", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">
        Analytics & Dashboard
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Analytics", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">
        NFT MarketPlace
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("NFT MarketPlace", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">Watch</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Watch", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">Games</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Games", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">Music</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Music", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">
        News and Infographics
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("News", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">
        Developer Tools
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Developer Tools", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">
        Initial Liquidity Offering(ILO) and Grants
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("ILO", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">
        Bridges
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Bridges", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">
        Encrypted Messaging
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Message", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">
        Finance
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Finance", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">
        Create
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Create", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">
        Decentralized Identity
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Decentralized Identity", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">
        Liquid Staking
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Liquid Staking", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">
        Ecommerce
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Ecommerce", projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6 text-center lg:text-left">
        Education
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Education", projectsData)}
      </div>
    </div>
  );
}
