import { TiMinus, TiPlus } from "react-icons/ti";
import { AllProductList } from "../interface/allProductServices"
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setCartToLocalStorage } from "../store/CartProductSlice";
import { Link } from "react-router-dom";


type CheckoutItemProp = {
    product: AllProductList
}


function CheckoutProductItem(prop: CheckoutItemProp) {

    const { product } = prop
    const cartProduct = useSelector((state: RootState) => state.CartProduct.CartProduct);
    const dispatch = useDispatch();

    function plusCartCount() {
        const cartUpdate = cartProduct.map((cartItem)=>{
            if(product.id === cartItem.id){
                if((cartItem.cartCount||1) >= 99){
                    return {...cartItem,cartCount: 99}
                }else{
                    return {...cartItem,cartCount: (cartItem.cartCount || 1) + 1}
                }
            }else{
                return cartItem
            }
        })
        dispatch(setCartToLocalStorage(cartUpdate))
    }

    function minusCartCount() {
        if((product.cartCount||1) <= 1){
            const cartUpdate = cartProduct.filter((cartItem)=>{
                return product.id !== cartItem.id
            })
            dispatch(setCartToLocalStorage(cartUpdate))
        }else{
            const cartUpdate = cartProduct.map((cartItem)=>{
                if(product.id === cartItem.id){
                    return {...cartItem,cartCount: (cartItem.cartCount || 1) - 1}
                }else{
                    return cartItem
                }
            })
            dispatch(setCartToLocalStorage(cartUpdate))
        }
    }

    function deleteCart(){
        const cartUpdate = cartProduct.filter((cartItem)=>{
            return product.id !== cartItem.id
        })
        dispatch(setCartToLocalStorage(cartUpdate))
    }



    return (
        <div className="p-4 border-b text-header border-primary flex justify-between items-center">
            <div className="w-20 md:w-[10%]">
                <Link to={`/product/${product.id}`} className="flex justify-center items-center bg-thirdary rounded-xl relative overflow-hidden shadow-lg h-20 w-20" >
                    <img className="object-cover" src={product.images[0]} alt={product.title} />
                </Link>
            </div>
            <Link to={`/product/${product.id}`} className="text-xl font-semibold hidden lg:block w-[40%]">{product.title}</Link>
            <div className="flex flex-col justify-center items-center lg:w-[50%] w-8/12 h-20 ">
                <Link to={`/product/${product.id}`} className="text-sm lg:hidden w-full">{product.title}</Link>
                <div className="flex justify-between items-center font-serif w-full">
                    <div className=" leading-3 flex flex-col md:flex-row justify-center items-start md:items-center w-[40%]">
                        <h5 className=" text-xl w-full md:w-1/2 flex justify-start md:justify-center">$ {(product.price * (product.cartCount || 0)).toFixed(2)}</h5>
                        <span className=" opacity-50 text-xs w-full md:w-1/2 flex justify-start md:justify-center">$ {product.price}</span>
                    </div>
                    <div className="flex justify-center items-center p-4 text-xl gap-2 w-[40%]">
                        <button onClick={minusCartCount} className="p-1 hover:bg-white duration-300 rounded-md"><TiMinus /></button>
                        <h6>{product.cartCount}</h6>
                        <button onClick={plusCartCount} className="p-1 hover:bg-white duration-300 rounded-md"><TiPlus /></button>
                    </div>
                    <div className=" w-[20%] flex justify-end">
                        <button onClick={deleteCart} className="p-2 hover:bg-white duration-300 text-xl rounded-md"><FaTrashAlt /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProductItem