import { CATEGORY_LIST } from "../utils/constant"


function Category() {
    // onFocus={(e) => { e.target.size = 5;}} onBlur={(e) => { e.target.size = 1; }}
    return (
        <div className="p-4 border-b-2">
            <label htmlFor="category" className=" block mb-2 text-lg font-semibold uppercase ">Category</label>
            <select id="category" className=" bg-gray-50 border capitalize border-gray-300  text-xl rounded-lg out focus:ring-header focus:border-header block w-full p-2.5 ">
                <option selected className="text-xl p-4 border-b-2 hover:bg-secondary cursor-pointer" value={""}>--All Product--</option>
                {CATEGORY_LIST.map((category, index) => {
                    return <option key={category + index} value={category} className="text-xl p-4 border-b-2 hover:bg-secondary cursor-pointer">{category}</option>
                })}
            </select>




        </div>

    )
}

export default Category