import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import ProductCardItem from "./ProductCardItem"
import SearchProduct from "./SearchProduct"
import SortProduct from "./SortProduct"
import { UseFormRegisterReturn } from "react-hook-form"
import ReactLoading from 'react-loading';

type propProductList = {
    fieldSearch: UseFormRegisterReturn<"search">
    fieldSort: UseFormRegisterReturn<"sort">
}

function ProductList(prop: propProductList) {

    const { fieldSearch, fieldSort } = prop
    const productAll = useSelector((state: RootState) => state.ProductAll.product)

    return (
        <main className="bg-thirdary rounded-xl shadow-xl w-full mb-5">
            <div>
                <div className="text-4xl text-header font-semibold p-6 border-b-2 h-[82px] leading-3 flex flex-wrap gap-4 mt-2" >
                    Product All
                    <span className="text-base text-primary opacity-70 font-medium">
                        ( Found Product <span>{productAll.data.length}</span> List )
                    </span>
                </div>
                <div className="px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <SearchProduct fieldSearch={fieldSearch} />
                    <SortProduct fieldSort={fieldSort} />
                </div>
                { 
                productAll.loading
                && 
                (<div className="w-full flex justify-center items-center pb-16">
                    <ReactLoading type={"bars"} color={"#726BBC"} height={20} width={80} />
                </div>)
                }
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-6 pb-6">
                    {productAll.data.map((product) => {
                        return <ProductCardItem key={product.title + product.id} product={product} />
                    })}
                </section>
                {!productAll.loading && (productAll.data.length < 1 && <div className="text-center text-xl mt-8 text-header">No Products Found</div>)}
            </div>
        </main>
    )
}

export default ProductList