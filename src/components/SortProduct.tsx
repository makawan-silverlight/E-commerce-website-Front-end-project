import { UseFormRegisterReturn } from "react-hook-form";
import { SORT_DATA } from "../utils/constant"

type sortProp = { fieldSort: UseFormRegisterReturn<"sort"> }
function SortProduct(prop:sortProp) {

    const {fieldSort} = prop
    return (
        <div className="w-full lg:w-[30%]  flex justify-end items-center gap-4 text-header">
            <label htmlFor="sort-by" className="text-lg font-semibold min-w-[59px] ">Sort by</label>
            <select {...fieldSort} id="sort-by" className=" w-full bg-white border-2 capitalize border-secondary  text-lg rounded-lg focus:ring-header focus:border-header outline-header  block p-2 ">
                <option value={""}>--All Product--</option>
                {SORT_DATA.map((sortData, index) => {
                    return <option key={sortData.value + index} value={sortData.value} className="">{sortData.name}</option>
                })}
            </select>
        </div>
    )
}

export default SortProduct