import { Link, useParams } from "react-router-dom"
import { singleProductServices } from "../../services/productDetail"
import { useEffect, useState } from "react"
import { AllProductList } from "../../interface/allProductServices"
import RatingStar from "../../components/RatingStar"
import { FaHeart, FaRegHeart } from "react-icons/fa6"
import { FaCartPlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { setFavoriteToLocalStorage } from "../../store/FavoriteSilce"
import { setCartToLocalStorage } from "../../store/CartProductSlice"


function ProductDetail() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [product, setProduct] = useState<AllProductList | undefined>()
    const [indexImg, setIndexImg] = useState(0)
    const [fav, setFav] = useState(product?.favorite || 0)
    const favoriteProduct = useSelector((state: RootState) => state.favoriteProduct.favoriteProduct)
    const cartProduct = useSelector((state: RootState) => state.CartProduct.CartProduct)



    async function callProduct() {
        const response = await singleProductServices.getSingleProduct(id)
        if (response.status == 200) {
            const data = response.data
            if (favoriteProduct.find((fav) => {
                return fav.id == data?.id
            })) {
                if (data) {
                    const dataAddFav = { ...data, favorite: 1, cartCount: 0 }
                    setFav(1)
                    setProduct(dataAddFav)
                }
            } else {
                if (data) {
                    const dataAddFav = { ...data, favorite: 0, cartCount: 0 }
                    setFav(0)
                    setProduct(dataAddFav)
                }
            }
            console.log(data);
        }
    }

    function handleFavBtn() {
        if (fav === 1) {
            setFav(0)
            const unFav = favoriteProduct.filter((item) => {
                return item.id !== product?.id
            })
            dispatch(setFavoriteToLocalStorage([...unFav]))
        } else {
            setFav(1)
            if (product) {
                dispatch(setFavoriteToLocalStorage([...favoriteProduct, { ...product, favorite: 1 }]))
            }
        }
    }

    function addToCart() {
        if (product) {
            if (cartProduct.find((cart) => {
                return cart.id == product.id
            })) {
                const newCartProduct = cartProduct.map((item) => {
                    if (item.id === product.id) {
                        if ((item.cartCount || 1) >= 99) {
                            return { ...item, cartCount: 99 }
                        }else{
                            return { ...item, cartCount: (item.cartCount || 1) + 1 }
                        }
                    } else {
                        return item
                    }
                })
                dispatch(setCartToLocalStorage(newCartProduct))
            } else {
                dispatch(setCartToLocalStorage([...cartProduct, { ...product, cartCount: 1 }]))
            }
        }
    }

    useEffect(() => {
        callProduct();
    }, [])


    return (
        <main className="w-full flex flex-col items-center justify-center my-20">
            <p className="container px-8 text-xl font-bold text-header flex justify-start items-center gap-2"><Link className="text-primary font-medium hover:text-header hover:scale-105 duration-100" to={"/product"}>Product</Link><IoIosArrowForward />{product?.title || "single product"}</p>
            <section className="container mt-8 relative z-10 flex flex-col md:flex-row gap-20 md:gap-8 px-8">
                <div className="w-full md:w-1/2 flex justify-center items-start gap-4">
                    <div className="w-[15%] h-full flex flex-col gap-4">
                        {product?.images.map((img, index) => {
                            return <div key={index} onClick={() => { setIndexImg(index) }} className={`${index === indexImg ? "" : "brightness-95"} min-h-[15%] p-1 border-2 shadow-md border-white cursor-pointer hover:border-header bg-white rounded-md duration-300 hover:brightness-100`}><img src={img} alt="Single Product Image" /></div>
                        })}
                    </div>
                    <div className="w-[85%] bg-white rounded-md shadow-xl flex justify-center items-center">
                        <img src={product?.images[indexImg]} alt="Single Product Image" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-6 text-header">
                    <h1 className="text-4xl font-bold">{product?.title}</h1>
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-4"><RatingStar rating={product?.rating || 0} />( {product?.rating || 0} )</div>
                        <p className="font-semibold">Category : <span className="font-normal">{product?.category || ""}</span></p>
                    </div>
                    <h2 className="text-4xl font-bold">$ {product?.price || 0}</h2>
                    <p>{product?.description || ""}</p>
                    <p className="font-semibold text-xl">Brand : <span className="font-normal">{product?.brand || ""}</span></p>
                    <p className="font-semibold text-xl">Warranty : <span className="font-normal">{product?.warrantyInformation || ""}</span></p>

                    <div className="w-full flex flex-col justify-center items-center md:items-start gap-2 text-xl">
                        <button onClick={handleFavBtn} className={`${fav === 1 ? "bg-red-400 text-white border-red-400" : "bg-secondary text-red-700 border-red-700"} border-2 flex justify-center items-center gap-4 w-full md:w-64 p-3 font-medium text-center rounded-lg hover:text-white hover:bg-red-400 hover:border-red-400 duration-150 focus:outline-none shadow-md`}>
                            Favorite<span className="text-2xl">{(fav === 1 ? <FaHeart /> : <FaRegHeart />)}</span>
                        </button>
                        <button onClick={addToCart} className="flex justify-center items-center gap-4 w-full md:w-64 p-3 font-medium text-center text-white bg-primary rounded-lg hover:bg-[#6AAA7C] focus:outline-none shadow-md">Add to cart <span className="text-2xl"><FaCartPlus /></span></button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProductDetail