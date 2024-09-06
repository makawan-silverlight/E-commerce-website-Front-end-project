import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import ProductCardItem from "./ProductCardItem"
import SearchProduct from "./SearchProduct"
import SortProduct from "./SortProduct"

function ProductList() {
    const productAll = useSelector((state: RootState) => state.ProductAll.product)

    return (
        <main className="bg-thirdary rounded-xl shadow-xl w-full mb-5">
            <div>
                <div className="text-4xl text-header font-semibold p-6 border-b-2 h-[82px] leading-3" >
                    Product All
                    <span className="text-base text-primary opacity-70 font-medium ml-4">
                        ( Found Product <span className="font-serif">{productAll.data.length}</span> List )
                    </span>
                </div>
                <div className="px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <SearchProduct/>
                    <SortProduct/>
                </div>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-6 pb-6">
                    {productAll.data.map((product)=>{
                        return <ProductCardItem key={product.title+product.id} product={product} />
                    })}
                </section>
            </div>
        </main>
    )
}

export default ProductList