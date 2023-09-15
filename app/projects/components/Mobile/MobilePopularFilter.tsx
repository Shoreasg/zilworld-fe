import {
  IProjectCategories,
  ProjectPopularFilterProps,
} from "../../../../types";
import { plusJakartaSans } from "../../../components/font";
import { updateProjectCategoriesClicks } from "../../../functions";

export default function MobilePopularFilter({
  categories,
  setSelected,
}: ProjectPopularFilterProps) {
  const handleOnClickPopularFilter = async (categoryName: string) => {
    await updateProjectCategoriesClicks(categoryName);
    setSelected(categoryName);
  };

  const mapPopularCategories = categories.map(
    (category: IProjectCategories, key: number) => {
      if (category.numClicks >= 50) {
        return (
          <div key={key}>
            <div className="flex items-start gap-4">
              {category.numClicks >= 50 && (
                <button
                  className="flex px-4 py-[6px] justify-center items-center gap-1 rounded-md bg-[#D5DEE0] "
                  onClick={() => handleOnClickPopularFilter(category.name)}
                >
                  <p
                    className={`${plusJakartaSans.className} font-normal text-xs leading-[18px] text-[#3B4242] text-right truncate`}
                  >
                    {category.name}
                  </p>
                  <sup
                    className={`${plusJakartaSans.className} font-light text-[10px] text-right text-[#3B4242]`}
                  >
                    ({category.numCategories})
                  </sup>
                </button>
              )}
            </div>
          </div>
        );
      } else {
        return null;
      }
    }
  );

  return (
    <div className="flex flex-col pt-6 pl-4 items-start bg-[#F5F5F5] z-10">
      <div className="flex flex-col items-start gap-2 self-stretch">
        <p
          className={`${plusJakartaSans.className} text-sm leading-[21px] font-semibold text-center text-[#06242E]`}
        >
          Popular
        </p>
        <div className="flex items-start gap-4 w-full overflow-x-auto no-scrollbar ">{mapPopularCategories}</div>
      </div>
    </div>
  );
}
