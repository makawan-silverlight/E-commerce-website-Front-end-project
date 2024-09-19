import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { FaHeart } from "react-icons/fa6";
import ProductCardItem from "../../components/ProductCardItem";

function FavoritePage() {
  const favoriteProduct = useSelector((state: RootState) => state.favoriteProduct.favoriteProduct)

  return (
    <main className="w-full flex flex-col items-center justify-center" >
      <div className="container mt-12 relative z-10 flex flex-col gap-4 px-8">
        <div className="text-center ">
          <h1 className="text-4xl font-bold text-header flex justify-center items-center gap-4">Your Favorite <span className="" ><FaHeart /></span></h1>
          <p className="text-sm text-primary leading-8 mt-8 " >This is Favorite Product Page Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur omnis possimus officiis commodi quae nam, eveniet consequatur error incidunt dolores tenetur, dolorum soluta laborum, quo perspiciatis libero quod! Pariatur, quae?</p>
        </div>
        <section className="bg-thirdary rounded-xl shadow-xl w-full min-h-[50vh] mb-5" >
          {favoriteProduct.length <= 0 ?
            (<h4 className="text-xl text-primary w-full h-[50vh] flex justify-center items-center">No products added to the favorite</h4>)
            :
            (<h4 className="mb-4 mt-4 px-6 text-primary">( Have <span className="font-serif">{favoriteProduct.length}</span> Favorite Product list )</h4>)
          }

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 pb-6">
            {favoriteProduct.map((product) => {
              return <ProductCardItem key={product.title + product.id} product={product} />
            })}
          </div>

        </section>


      </div>
    </main>
  )
}

export default FavoritePage

