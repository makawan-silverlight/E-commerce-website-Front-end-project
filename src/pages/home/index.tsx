// import SwiperProduct from "../../components/SwiperProduct"
import { useEffect } from "react"
import { allProductListServices } from "../../services/allProductList"
import { useDispatch, useSelector } from "react-redux";
import { setFetchProductAll } from "../../store/FetchProductSlice";
import { setProduct } from "../../store/ProductDataSlice";
import { RootState } from "../../store/store";
import { AllProductList } from "../../interface/allProductServices";
import { heroData } from "../../utils/constant";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import HeroProduct from "../../components/HeroProduct";
import ProductCardItem from "../../components/ProductCardItem";
import Service from "../../components/Service";
import CardGoToAll from "../../components/CardGoToAll";


function Home() {

  const dispatch = useDispatch();
  const favProduct = useSelector((state: RootState) => state.favoriteProduct.favoriteProduct);
  const ProductAll = useSelector((state: RootState) => state.ProductAll.product);

  function filterProduct(data: AllProductList[]) {
    const newProduct = data.map((product) => {
      if (favProduct.find((fav) => {
        return fav.id === product.id
      })) {
        return { ...product, favorite: 1, cartCount: 0 }
      } else {
        return { ...product, favorite: 0, cartCount: 0 }
      }
    })

    return newProduct
  }
  async function callData() {
    const response = await allProductListServices.getAllProduct();
    if (response.status === 200) {
      const productList = response.data?.products || [];
      dispatch(setFetchProductAll([...productList]));
      const filterResponse = filterProduct([...productList]);
      dispatch(setProduct({ data: filterResponse, loading: false, error: null }))
    } else {
      dispatch(setProduct({ data: [], loading: false, error: response.error || null }))
    }
  }

  useEffect(() => {
    callData();
    console.log(ProductAll)

  }, [])

  const recommendProduct = ProductAll.data.filter((product) => {
    return product.rating > 4.5 && product.price > 120
  })

  const newArrival = [...ProductAll.data].reverse().filter((_,index)=> index<9)

  return (
    <>
      {/* <div>Home Page</div> */}
      {/* <div className="w-full h-[200vh]">5555</div> */}
      <main className="w-full flex flex-col items-center justify-center">
        <div className="container my-8 relative z-10 flex flex-col gap-4 px-8">
          <div className="w-full rounded-xl shadow-xl overflow-hidden">
            <Swiper
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Pagination]}
              spaceBetween={50}
              className="mySwiper"
            >
              {heroData.map((heroProduct, index) => {
                return (
                  <SwiperSlide key={index}>
                    <HeroProduct heroProduct={heroProduct} />
                  </SwiperSlide>)
              })}
            </Swiper>
          </div>


          <section className="w-full rounded-xl mt-16 p-4 bg-secondary shadow-lg">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper px-4 py-8 pt-24"
            >
              <h2 className="absolute top-0 left-0 w-full text-4xl font-semibold text-header py-4 border-b-2 border-header">Recommend</h2>

              {recommendProduct.map((product, index) => {

                return (
                  <SwiperSlide key={index}>
                    <ProductCardItem product={product} />
                  </SwiperSlide>
                )

              })}
              <SwiperSlide>
                <CardGoToAll/>
              </SwiperSlide>
            </Swiper>
          </section>


          <section className="w-full rounded-xl mt-16 p-4 bg-[#A8D8E9] shadow-lg new">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper px-4 py-8 pt-24"
            >
              <h2 className="absolute top-0 left-0 w-full text-4xl font-semibold text-white py-4 border-b-2 border-white">New Arrivals </h2>

              {newArrival.map((product, index) => {

                return (
                  <SwiperSlide key={index}>
                    <ProductCardItem product={product} />
                  </SwiperSlide>
                )

              })}
              <SwiperSlide>
                <CardGoToAll/>
              </SwiperSlide>
            </Swiper>
          </section>

          <Service/>


        </div>
      </main>
    </>
  )
}

export default Home