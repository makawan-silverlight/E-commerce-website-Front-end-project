import { UseFormRegisterReturn } from "react-hook-form"

type searchProp = { fieldSearch: UseFormRegisterReturn<"search"> }
function SearchProduct(prop:searchProp) {
    const {fieldSearch} = prop
    return (
        <div className="w-full lg:w-[70%]  ">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <form>
                    <input {...fieldSearch} type="search" id="default-search" className="block w-full p-2 ps-10 text-lg text-header border-2 border-secondary rounded-lg bg-white outline-header " placeholder="Search Product Name..." />
                </form>
            </div>
        </div>
    )
}

export default SearchProduct