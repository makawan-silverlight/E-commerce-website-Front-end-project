import { VscSettings } from "react-icons/vsc";
import Category from "../Category";
import PriceFilter from "../PriceFilter";

function FilterProduct() {
  return (
    <aside className="w-80 h-[1200px] bg-thirdary text-header rounded-xl px-2">
      <h2 className="flex justify-center items-center gap-4 text-2xl p-6 border-b-2"><span><VscSettings /></span> Filter Product </h2>

      <form className="max-w-sm mx-auto">
        <Category/>
        <PriceFilter/>

        
        
      </form>

      
    </aside>
  )
}

export default FilterProduct