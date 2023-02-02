import Link from "next/link";
import { IProjects, ProjectsCardProps } from "../../../types";

export default function ProjectsCard({ projectsData }: ProjectsCardProps) {
  const mapProjects = (category: string) => {
    //function to map the projects into category
    return projectsData
      .filter((project) => project.category === category)
      .map((projects: IProjects, key: number) => {
        return (
            <Link key={projects.name} href={`/projects/${projects.name}`}>
              <div className="rounded-md bg-gradient-to-r to-[#0A7581] from-[#4DBBBA] p-1 hover:scale-110 w-fit m-auto">
              <div className="h-[250px] w-[250px] divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                  <div className="flex flex-1 flex-col p-8">
                    <img
                      className="mx-auto h-32 w-32"
                      src={projects.icon}
                      alt="token icon"
                    />
                    <h3 className="mt-6 text-m font-medium text-center text-gray-900">
                      {projects.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
        );
      });
  };

  return (
    <div className="ml-6 flex flex-col justify-center">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">DEX</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("DEX")}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">NFT</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("NFT")}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        Analytics & Dashboard
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Analytics")}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        NFT MarketPlace
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("NFT MarketPlace")}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">Watch</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Watch")}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">Games</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Games")}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">Music</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Music")}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        Wallets
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Wallets")}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        News and Infographics
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("News")}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        Developer Tools
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Developer Tools")}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        Initial Liquidity Offering(ILO)
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("ILO")}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        Bridges
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Bridges")}
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-6">
        Encrypted Messaging
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {mapProjects("Message")}
      </div>
    </div>
  );
}
