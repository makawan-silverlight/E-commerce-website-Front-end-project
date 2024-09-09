import { CATEGORY_LIST } from "../utils/constant"
import {  UseFormRegisterReturn } from "react-hook-form"

type propCategory = {fieldCategory: UseFormRegisterReturn<"category">}

function Category(prop:propCategory) {

    const {fieldCategory} = prop
    
    return (
        <div className="p-4 border-b-2">
                <label htmlFor="category" className=" block mb-2 text-lg font-semibold uppercase ">Category</label>
                <select {...fieldCategory} id="category" className=" bg-white border-2 capitalize border-secondary  text-xl rounded-lg focus:ring-header focus:border-header block w-full p-2.5 ">
                    <option  className="text-xl p-4 border-b-2 hover:bg-secondary cursor-pointer" value={"all"}>--All Product--</option>
                    {CATEGORY_LIST.map((category, index) => {
                        return <option key={category + index} value={category} className="text-xl p-4 border-b-2 hover:bg-secondary cursor-pointer">{category}</option>
                    })}
                </select>
        </div>



    )
}

export default Category