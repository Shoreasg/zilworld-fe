
import { CardProps } from "../../../types";
import { mapProjects } from "../../functions";

export default function ProjectsCard({ projectsData }: CardProps) {

  return (
    <div className="ml-6 flex flex-col justify-center">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">DEX</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("DEX",projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">NFT</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("NFT",projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        Analytics & Dashboard
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Analytics",projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        NFT MarketPlace
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("NFT MarketPlace",projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">Watch</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Watch",projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">Games</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Games",projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">Music</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Music",projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        Wallets
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Wallets",projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        News and Infographics
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("News",projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        Developer Tools
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Developer Tools",projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        Initial Liquidity Offering(ILO) and grants
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("ILO",projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        Bridges
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Bridges",projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        Encrypted Messaging
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Message",projectsData)}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        Payments
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Payments",projectsData)}
      </div>
    </div>
  );
}
