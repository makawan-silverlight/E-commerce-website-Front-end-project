import { VscSettings } from "react-icons/vsc";
import Category from "../Category";
import PriceFilter from "../PriceFilter";
import { UseFormRegisterReturn } from "react-hook-form";

type propFilter = {
  fieldCategory: UseFormRegisterReturn<"category">
  fieldMax: (n: number) => void 
  fieldMin: (n: number) => void 
}



function FilterProduct( prop:propFilter) {
  const {fieldCategory,fieldMax,fieldMin} = prop
  return (
    <aside className="md:w-80 w-full md:h-[80vh] md:sticky top-[120px] bg-thirdary text-header rounded-xl px-2 shadow-xl">
      <h2 className="flex justify-center items-center gap-4 text-2xl p-6 border-b-2 h-[82px]"><span><VscSettings /></span> Filter Product </h2>
      <form className="max-w-sm mx-auto">
        <Category fieldCategory={fieldCategory} />
        <PriceFilter fieldMax={fieldMax} fieldMin={fieldMin} />

      </form>
    </aside>
  )
}

export default FilterProduct