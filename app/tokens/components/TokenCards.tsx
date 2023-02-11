import Link from "next/link";
import { ITokens } from "../../../types";

async function getTokensData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tokens/`);
  return res.json();
}

export default async function TokenCards() {
  const tokens: { data: [ITokens] } = await getTokensData();
  const mapData = tokens.data.map((token: ITokens, key: number) => {
    return (
      <Link key={token.name} href={`/tokens/${token.address}`}>
        <div className="rounded-md bg-gradient-to-r to-[#0A7581] from-[#4DBBBA] p-1 hover:scale-110">
          <div className="h-[200px] w-[200px] divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-24 w-24"
                src={token.icon}
                alt="token icon"
              />
              <h3 className="mt-2 text-sm font-medium text-center text-gray-900">
                {token.name}
                <p className="text-gray-400">{token.symbol}</p>
              </h3>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {mapData}
    </div>
  );
}
