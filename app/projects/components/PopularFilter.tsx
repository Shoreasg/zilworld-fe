import { IProjectCategories, ProjectPopularFilterProps } from "../../../types";
import { plusJakartaSans } from "../../components/font";
import { updateProjectCategoriesClicks } from "../../functions";

export default function PopularFilter({categories,setSelected}:ProjectPopularFilterProps) {


    const handleOnClickPopularFilter = async(categoryName:string)=>{
        await updateProjectCategoriesClicks(categoryName);
        setSelected(categoryName);
    }


  const mapPopularCategories = categories.map(
    (category: IProjectCategories, key: number) => {
      if (category.numClicks >= 50) {
        return (
            <div className="flex flex-col pt-6 items-start gap-2 self-stretch px-14" key={key}>
            <p
              className={`${plusJakartaSans.className} text-sm leading-[21px] font-semibold`}
            >
              Popular
            </p>
            <div className="flex items-start gap-4">
              {category.numClicks >= 50 && (
                <button className="flex px-4 py-[6px] justify-center items-center gap-1 rounded-md bg-[#D5DEE0] " onClick={()=>handleOnClickPopularFilter(category.name)}>
                  <p
                    className={`${plusJakartaSans.className} font-normal text-xs leading-[18px] text-[#3B4242] text-right`}
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
      }else{
        return null
      }
    }
  );

  return (
    <>
    {mapPopularCategories}
    </>
    // <div className="flex flex-col items-start gap-2 self-stretch px-14">
    //   <p
    //     className={`${plusJakartaSans.className} text-sm leading-[21px] font-semibold`}
    //   >
    //     Popular
    //   </p>
    //   <div className="flex items-start gap-4">
    //     {categories.map((category: IProjectCategories, key: number) => (
    //       <>
    //         {category.numClicks >= 50 && (
    //           <button className="flex px-4 py-[6px] justify-center items-center gap-1 rounded-md bg-[#D5DEE0] ">
    //             <p
    //               className={`${plusJakartaSans.className} font-normal text-xs leading-[18px] text-[#3B4242] text-right`}
    //             >
    //               {category.name}
    //             </p>
    //             <sup
    //               className={`${plusJakartaSans.className} font-light text-xs text-right text-[#3B4242]`}
    //             >
    //               ({category.numCategories})
    //             </sup>
    //           </button>
    //         )}
    //       </>
    //     ))}
    //   </div>
    // </div>
  );
}
