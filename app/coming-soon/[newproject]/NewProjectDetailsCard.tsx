// import Link from "next/link";
// import parse from "html-react-parser";
// import { NewProjectDetailsCardProps } from "../../../types";
// import Image from "next/image";

// export default function NewProjectDetailsCard({
//   NewProjectData,
// }: NewProjectDetailsCardProps) {
//   return (
//     <div className="flex flex-1 flex-col md:pl-64">
//       <div className="p-6">
//         <div className="overflow-hidden rounded-lg bg-white shadow">
//           <div className="bg-white p-6">
//             <div className="sm:flex sm:items-center sm:justify-between">
//               <div className="sm:flex sm:space-x-5">
//                 <div className="flex-shrink-0 flex flex-col justify-center">
//                   <Image
//                     className="mx-auto h-20 w-20"
//                     src={NewProjectData.icon}
//                     alt="token icon"
//                   />
//                 </div>
//                 <div className="flex flex-col justify-center text-center sm:text-left">
//                   <p className="text-xl text-center font-bold text-gray-900 sm:text-2xl">
//                     {NewProjectData.name}
//                   </p>
//                   {NewProjectData.isBuilding ? (
//                     <p className=" text-sm text-center font-bold text-green-400 sm:text-sm">
//                       Status: Building
//                     </p>
//                   ) : (
//                     <p className=" text-sm text-center font-bold text-red-400 sm:text-lg">
//                       Status: Inactive
//                     </p>
//                   )}
//                 </div>
//                 <p className="flex flex-col justify-center text-lg">
//                   {parse(String(NewProjectData.description))}
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-flow-col overflow-auto divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:auto-cols-auto sm:divide-y-0 sm:divide-x">
//             {NewProjectData.website ? (
//               <div className="px-6 py-5 text-center text-sm font-medium ">
//                 <Link
//                   target={"_blank"}
//                   rel="noreferrer"
//                   href={NewProjectData.website}
//                   className="hover:text-[#0A7581]"
//                 >
//                   Website
//                 </Link>
//               </div>
//             ) : (
//               true
//             )}
//             {NewProjectData.telegram ? (
//               <div className="px-6 py-5 text-center text-sm font-medium">
//                 <Link
//                   target={"_blank"}
//                   rel="noreferrer"
//                   href={NewProjectData.telegram}
//                   className="hover:text-[#0A7581]"
//                 >
//                   Telegram
//                 </Link>
//               </div>
//             ) : (
//               true
//             )}

//             {NewProjectData.discord ? (
//               <div className="px-6 py-5 text-center text-sm font-medium ">
//                 <Link
//                   target={"_blank"}
//                   rel="noreferrer"
//                   href={NewProjectData.discord}
//                   className="projectDatahover:text-[#0A7581]"
//                 >
//                   Discord
//                 </Link>
//               </div>
//             ) : (
//               true
//             )}
//             {NewProjectData.tokens?.map((address, key) => (
//               <div
//                 key={key}
//                 className="px-6 py-5 text-center text-sm font-medium"
//               >
//                 <Link
//                   href={`https://viewblock.io/zilliqa/address/${address}`}
//                   target={"_blank"}
//                   rel="noreferrer"
//                   className="hover:text-[#0A7581]"
//                 >
//                   {key === 0 ? `Token Address` : `Token Address ${key + 1}`}
//                 </Link>
//               </div>
//             ))}
//             {NewProjectData.marketplace_arky ? (
//               <>
//                 {NewProjectData.NFT_address?.map((address, key) => (
//                   <div
//                     key={key}
//                     className="px-6 py-5 text-center text-sm font-medium "
//                   >
//                     <Link
//                       href={`https://zilswap.io/arky/collections/${address}`}
//                       target={"_blank"}
//                       rel="noreferrer"
//                       className="hover:text-[#0A7581]"
//                     >
//                       Get on ARKY
//                     </Link>
//                   </div>
//                 ))}
//               </>
//             ) : (
//               true
//             )}
//             {NewProjectData.marketplace_cathulu ? (
//               <>
//                 {NewProjectData.NFT_address?.map((address, key) => (
//                   <div
//                     key={key}
//                     className="px-6 py-5 text-center text-sm font-medium "
//                   >
//                     <Link
//                       href={`https://cathulhu.tools/market/${address}`}
//                       target={"_blank"}
//                       rel="noreferrer"
//                       className="hover:text-[#0A7581]"
//                     >
//                       Get on CATHULHU.TOOLS
//                     </Link>
//                   </div>
//                 ))}
//               </>
//             ) : (
//               true
//             )}
//             {NewProjectData.marketplace_zildex ? (
//               <>
//                 {NewProjectData.NFT_address?.map((address, key) => (
//                   <div
//                     key={key}
//                     className="px-6 py-5 text-center text-sm font-medium "
//                   >
//                     <Link
//                       href={`https://zilswap.io/arky/collections/${address}`}
//                       target={"_blank"}
//                       rel="noreferrer"
//                       className="hover:text-[#0A7581]"
//                     >
//                       Get on Arky
//                     </Link>
//                   </div>
//                 ))}
//               </>
//             ) : (
//               true
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
