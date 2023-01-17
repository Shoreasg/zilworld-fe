async function getTokenData() {
  const res = await fetch("http://localhost:3001/tokens/");
  return res.json();
}

export default async function TokenCards() {
  const data = await getTokenData();
  const mapData = data.data.map((token: any) => {
    return (
      <div className="rounded-md bg-gradient-to-r to-[#0A7581] from-[#4DBBBA] p-1">
        <div className="h-[300px] w-[300px] divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
          <div className="flex flex-1 flex-col p-8">
            <img
              className="mx-auto h-32 w-32"
              src={token.icon}
              alt="token icon"
            />
            <h3 className="mt-6 text-m font-medium text-center text-gray-900">
              {token.name}
            </h3>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {mapData}
    </div>
  );
}
