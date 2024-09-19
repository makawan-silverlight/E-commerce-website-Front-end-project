import { AllProductList } from "../interface/allProductServices"
import { TiPlus, TiMinus } from "react-icons/ti";
import { FaTrashAlt } from "react-icons/fa";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setCartToLocalStorage } from "../store/CartProductSlice";
import { deleteToast, removeCartToast } from "../store/ToastSlice";

type propCartProduct = {
    product: AllProductList
}

function CartProductItem(prop: propCartProduct) {
    const { product } = prop
    const cartProduct = useSelector((state: RootState) => state.CartProduct.CartProduct);
    const dispatch = useDispatch();

    function plusCartCount() {
        const cartUpdate = cartProduct.map((cartItem) => {
            if (product.id === cartItem.id) {
                if ((cartItem.cartCount || 1) >= 99) {
                    return { ...cartItem, cartCount: 99 }
                } else {
                    return { ...cartItem, cartCount: (cartItem.cartCount || 1) + 1 }
                }
            } else {
                return cartItem
            }
        })
        dispatch(setCartToLocalStorage(cartUpdate))
    }

    function minusCartCount() {
        if ((product.cartCount || 1) <= 1) {
            const cartUpdate = cartProduct.filter((cartItem) => {
                return product.id !== cartItem.id
            })
            dispatch(setCartToLocalStorage(cartUpdate))
            const toastId = Date.now();
            dispatch(removeCartToast({ title: `Remove ${product.title} from cart`, id: toastId }))
            setTimeout(() => {
                dispatch(deleteToast(toastId))
            }, 3000);
        } else {
            const cartUpdate = cartProduct.map((cartItem) => {
                if (product.id === cartItem.id) {
                    return { ...cartItem, cartCount: (cartItem.cartCount || 1) - 1 }
                } else {
                    return cartItem
                }
            })
            dispatch(setCartToLocalStorage(cartUpdate))
        }
    }

    function deleteCart() {
        const cartUpdate = cartProduct.filter((cartItem) => {
            return product.id !== cartItem.id
        })
        dispatch(setCartToLocalStorage(cartUpdate))
        const toastId = Date.now();
        dispatch(removeCartToast({ title: `Remove ${product.title} from cart`, id: toastId }))
        setTimeout(() => {
            dispatch(deleteToast(toastId))
        }, 3000);
    }

    return (
        <div className="p-4 bg-primary rounded-xl flex flex-wrap justify-between items-center">
            <div className="flex justify-center items-center bg-thirdary rounded-xl relative overflow-hidden shadow-lg h-20 w-20" >
                <img loading="lazy" className="object-cover" src={product.images[0]} alt={product.title} />
            </div>
            <div className="flex flex-col gap-1 justify-between w-8/12 min-h-20 text-background">
                <h4 className="text-sm">{product.title}</h4>
                <div className="flex flex-wrap justify-between items-center">
                    <div className=" leading-3 ">
                        <h5 className=" text-base">$ {(product.price * (product.cartCount || 0)).toFixed(2)}</h5>
                        <span className="text-secondary opacity-50 text-xs">$ {product.price}</span>
                    </div>
                    <div className="flex justify-center items-center p-4 text-xl gap-2">
                        <button onClick={minusCartCount} className="p-1 hover:bg-[#8781C6] duration-300 rounded-md"><TiMinus /></button>
                        <h6 className="text-base">{product.cartCount}</h6>
                        <button onClick={plusCartCount} className="p-1 hover:bg-[#8781C6] duration-300 rounded-md"><TiPlus /></button>
                    </div>
                    <button onClick={deleteCart} className="p1 hover:text-header duration-300 text-lg"><FaTrashAlt /></button>
                </div>
            </div>
        </div>
    )
}

export default CartProductItem