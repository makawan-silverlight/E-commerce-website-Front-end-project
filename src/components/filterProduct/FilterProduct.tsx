import { VscSettings } from "react-icons/vsc";
import Category from "../Category";
import PriceFilter from "../PriceFilter";
import { useFilterProduct } from "./FilterProductHook"; 

function FilterProduct() {
  const {} = useFilterProduct()
  return (
    <aside className="md:w-80 w-full md:h-[80vh] md:sticky top-[120px] bg-thirdary text-header rounded-xl px-2 shadow-xl">
      <h2 className="flex justify-center items-center gap-4 text-2xl p-6 border-b-2 h-[82px]"><span><VscSettings /></span> Filter Product </h2>
      <form className="max-w-sm mx-auto">
        <Category/>
        <PriceFilter/>

      </form>  
    </aside>
  )
}

export default FilterProduct