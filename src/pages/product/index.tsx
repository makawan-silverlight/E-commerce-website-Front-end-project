import { useEffect, useState } from "react"
import { allProductListServices } from "../../services/allProductList"
import { AllProductList } from "../../interface/allProductServices";
import banner from "../../image/Product-banner-01.png"

function Product() {

  const [data,setData] = useState<AllProductList[]>([])

  async function callProduct () {
    const productData = await allProductListServices.getAllProduct();
    if(productData.status === 200){
      const allProduct = productData.data?.products || [];
      setData([...allProduct])
    }
  }
  console.log(data);
  
  useEffect(() => {
    callProduct()
  },[])

    return (
      <main className="w-full flex flex-col items-center justify-center">
        <section id="banner" className="container relative mt-8 min-h-[130px] -z-10">
          <img src={banner} alt="banner" className="absolute -z-20 rounded-2xl min-h-[130px] object-cover" />
          <div id="content" className="w-full h-full flex flex-col items-center justify-center gap-6 mt-4 sm:mt-2 md:mt-5 lg:mt-10 xl:mt-16 2xl:mt-20">
            <h1 className="text-white font-bold text-3xl xl:text-5xl">Product Page</h1>
            <p className="text-white font-normal text-xs lg:text-sm xl:text-base text-center w-full max-h-[48px] md:max-w-none overflow-auto md:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem accusantium itaque tempora doloremque, maiores a aliquam voluptas tenetur voluptatum ad, veritatis dicta tempore quia autem eum aspernatur eius fugit.</p>
          </div>
        </section>
      </main>
    )
  }
  
  export default Product