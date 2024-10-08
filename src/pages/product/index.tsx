import banner from "../../../public/image/Product-banner-01.png"
import FilterProduct from "../../components/filterProduct";
import { useFilterProduct } from "../../components/filterProduct/FilterProductHook";
import ProductList from "../../components/ProductList";

function Product() {
    const {fieldCategory,fieldMax,fieldMin,fieldSearch,fieldSort} = useFilterProduct()
    return (
      <main className="w-full flex flex-col items-center justify-center">
        <section id="banner" className="container relative mt-8 min-h-[130px] z-10 px-8">
          <img src={banner} alt="banner" className=" rounded-2xl min-h-[130px] object-cover shadow-xl" />
          <div id="content" className="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex flex-col items-center justify-center gap-6 ">
            <h1 className="text-white font-bold text-3xl xl:text-5xl">Product Page</h1>
            <p className="text-white font-normal text-xs lg:text-sm xl:text-base text-center px-8 xl:px-0 w-[90%] max-h-[48px] md:max-w-none overflow-auto xl:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem accusantium itaque tempora doloremque, maiores a aliquam voluptas tenetur voluptatum ad, veritatis dicta tempore quia autem eum aspernatur eius fugit.</p>
          </div>
        </section>
        <section id="product" className="container mt-8 relative z-10 flex flex-col md:flex-row gap-4 px-8">
          <FilterProduct fieldCategory={fieldCategory} fieldMax={fieldMax} fieldMin={fieldMin} />
          <ProductList fieldSearch={fieldSearch} fieldSort={fieldSort} />
        </section>
      </main>
    )
  }
  
  export default Product