import CarousellBanners from "../components/CarousellBanners";
import Note from "../components/Note";
import TokenCards from "./components/TokenCards";

export default function Home() {
  return (
    <>
      <div className="pt-[3.5rem] pr-[3.5rem] pb-0 pl-[3.5rem] m-0 w-full overflow-y-auto flex flex-col">
        <CarousellBanners />
        <div className="border-t"></div>
        <div className="flex flex-row justify-center mt-6">
          <div className="flex flex-col items-center w-fit lg:w-1/2 justify-center">
            <p className="text-center text-xl">
              This page showcases all the tokens currently available in the
              Zilliqa ecosystem. It is important to note that new tokens may be
              added to the ecosystem over time, and this list may not be
              exhaustive. However, this page serves as a helpful resource for
              exploring the diverse range of tokens currently available on the
              Zilliqa platform. Please conduct independent research and due
              diligence before engaging with any of the tokens listed on this
              page.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className=" w-fit lg:w-[700px] rounded-md p-4">
            <Note />
          </div>
        </div>
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
