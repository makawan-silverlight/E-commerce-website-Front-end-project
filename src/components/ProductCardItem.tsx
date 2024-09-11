import { Link } from "react-router-dom"
import { AllProductList } from "../interface/allProductServices"
import RatingStar from "./RatingStar"
import { FaRegHeart,FaHeart } from "react-icons/fa6";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteToLocalStorage } from "../store/FavoriteSilce";
import { setCartToLocalStorage } from "../store/CartProductSlice";
import { RootState } from "../store/store";



type propItem = {
    product: AllProductList
}

function ProductCardItem(prop: propItem) {

    const dispatch = useDispatch();
    const favoriteProduct = useSelector((state: RootState) => state.favoriteProduct.favoriteProduct)
    const cartProduct = useSelector((state: RootState) => state.CartProduct.CartProduct)
    
    const { product } = prop
    const [fav,setFav] = useState(product.favorite)

    function handleFavBtn () {
        if(fav === 1){
            setFav(0)
            const unFav = favoriteProduct.filter((item)=>{
                return item.id !== product.id
            })
            dispatch(setFavoriteToLocalStorage([...unFav]))
        }else{
            setFav(1)
            dispatch(setFavoriteToLocalStorage([...favoriteProduct,{...product,favorite:1}]))
        }
    }

    function addCart (){

        if(cartProduct.find((cartStore)=>{
            return cartStore.id === product.id
        })){
            const newCartProduct = cartProduct.map((cartStore)=>{
                if(cartStore.id === product.id){
                    if((cartStore.cartCount||1) >= 99){
                        return {...cartStore,cartCount: 99}
                    }else{
                        return {...cartStore,cartCount : (cartStore.cartCount || 1) + 1}
                    }
                }else{
                    return cartStore
                }
            })
            dispatch(setCartToLocalStorage(newCartProduct))
        }else{
            dispatch(setCartToLocalStorage([...cartProduct,{...product,cartCount:1}]))
        }
    }

    return (
        <div className="relative group flex flex-col justify-between bg-background border border-gray-200 rounded-lg shadow-md p-4 hover:scale-[1.02] duration-300">

            <Link to={"/"} className="absolute z-[-1] w-full h-full opacity-0 top-0 left-0 bottom-0 right-0"></Link>

            <Link to={"/"} className="flex justify-center items-center bg-thirdary rounded-lg relative overflow-hidden shadow-lg w-full h-52" >
                <img className="object-cover h-52" src={product.images[0]} alt={product.title} />
            </Link>

            <div className="mt-5">

                <Link to={"/"}>
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-header hover:text-primary">{product.title}</h5>
                </Link>
                <p className="mb-3 text-sm font-normal text-primary capitalize">Category : {product.category}</p>
                <div className="flex justify-start items-center gap-2 mb-3"><RatingStar rating={Math.round(product.rating)} /> <span className="text-xs font-serif font-normal text-primary">( Rating {product.rating} )</span></div>
                <div className="flex justify-between items-center gap-6 mb-4">
                    <p className="text-3xl font-serif font-bold text-header">$ {product.price}</p>
                </div>

            </div>

            <div className="w-full flex justify-center items-center gap-2">
                <a href="#" className="flex justify-center items-center py-3 w-1/2  text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-blue-300">
                    View Details
                </a>
                <button onClick={addCart} className="flex justify-center items-center py-3 w-1/2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-blue-300">Add to cart</button>
            </div>

            <div className="absolute opacity-0 group-hover:opacity-100 duration-500 top-4 right-4 flex flex-col gap-2 justify-center items-center">
                <button onClick={handleFavBtn} className=" w-10 h-10 border-2 border-header hover:bg-header hover:text-white text-header bg-white rounded-full flex justify-center items-center text-lg">{(fav === 1 ? <FaHeart/>:<FaRegHeart/>)}</button>
                <button onClick={addCart} className=" w-10 h-10 border-2 border-header hover:bg-header hover:text-white text-header bg-white rounded-full flex justify-center items-center text-lg"><RiShoppingBag4Line/></button>
            </div>

        </div>
    )
}

export default ProductCardItem