import TokenCards from "./components/TokenCards";


export default function Home() {
  return (
    <>
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="py-6">
          <div className="mx-auto py-6 max-w-7xl px-4 sm:px-6 md:px-8 flex justify-center">
            {/* @ts-expect-error Server Component */}
            <TokenCards />
          </div>
        </div>
      </div>
    </>
  );
}