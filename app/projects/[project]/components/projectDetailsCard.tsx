import Link from "next/link";
import { ProjectDetailsCardProps } from "../../../../types";

export default function ProjectDetailsCard({
  projectData,
}: ProjectDetailsCardProps) {
  return (
    <div className="flex flex-1 flex-col md:pl-64">
      <div className="p-6">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="bg-white p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="flex-shrink-0 flex flex-col justify-center">
                  <img
                    className="mx-auto h-20 w-20"
                    src={projectData.icon}
                    alt="token icon"
                  />
                </div>
                <div className="flex flex-col justify-center text-center sm:text-left">
                  <p className="text-xl text-center font-bold text-gray-900 sm:text-2xl">
                    {projectData.name}
                  </p>
                </div>
                <p className="flex flex-col justify-center text-lg">
                  {projectData.description}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col overflow-auto divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:auto-cols-auto sm:divide-y-0 sm:divide-x">
            {projectData.website ? (
              <div className="px-6 py-5 text-center text-sm font-medium ">
                <Link
                  target={"_blank"}
                  href={projectData.website}
                  className="hover:text-[#0A7581]"
                >
                  Website
                </Link>
              </div>
            ) : (
              true
            )}
            {projectData.telegram ? (
              <div className="px-6 py-5 text-center text-sm font-medium">
                <Link
                  target={"_blank"}
                  href={projectData.telegram}
                  className="hover:text-[#0A7581]"
                >
                  Telegram
                </Link>
              </div>
            ) : (
              true
            )}

            {projectData.discord ? (
              <div className="px-6 py-5 text-center text-sm font-medium ">
                <Link
                  target={"_blank"}
                  href={projectData.discord}
                  className="projectDatahover:text-[#0A7581]"
                >
                  Discord
                </Link>
              </div>
            ) : (
              true
            )}
            {projectData.tokens?.map((address, key) => (
              <div
                key={key}
                className="px-6 py-5 text-center text-sm font-medium"
              >
                <Link
                  href={`https://viewblock.io/zilliqa/address/${address}`}
                  target={"_blank"}
                  className="hover:text-[#0A7581]"
                >
                  {key === 0
                    ? `Contract Address`
                    : `Contract Address ${key + 1}`}
                </Link>
              </div>
            ))}
            {projectData.marketplace_arky ? (
              <>
                {projectData.tokens?.map((address, key) => (
                  <div
                    key={key}
                    className="px-6 py-5 text-center text-sm font-medium "
                  >
                    <Link
                      href={`https://zilswap.io/arky/collections/${address}`}
                      target={"_blank"}
                      className="hover:text-[#0A7581]"
                    >
                      Get on ARKY
                    </Link>
                  </div>
                ))}
              </>
            ) : (
              true
            )}
            {projectData.marketplace_cathulu ? (
              <>
                {projectData.tokens?.map((address, key) => (
                  <div
                    key={key}
                    className="px-6 py-5 text-center text-sm font-medium "
                  >
                    <Link
                      href={`https://cathulhu.tools/market/${address}`}
                      target={"_blank"}
                      className="hover:text-[#0A7581]"
                    >
                      Get on CATHULHU.TOOLS
                    </Link>
                  </div>
                ))}
              </>
            ) : (
              true
            )}
            {projectData.marketplace_zildex ? (
              <>
                {projectData.tokens?.map((address, key) => (
                  <div
                    key={key}
                    className="px-6 py-5 text-center text-sm font-medium "
                  >
                    <Link
                      href={`https://zilswap.io/arky/collections/${address}`}
                      target={"_blank"}
                      className="hover:text-[#0A7581]"
                    >
                      Get on Arky
                    </Link>
                  </div>
                ))}
              </>
            ) : (
              true
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
