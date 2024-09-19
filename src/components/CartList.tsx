import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import CartProductItem from "./CartProductItem";
import { LuArrowRightToLine } from "react-icons/lu";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RiBillLine } from "react-icons/ri";
import { Link } from "react-router-dom";

type cartListProp = {
    setOpenCart: Dispatch<SetStateAction<boolean>>
    openCart: boolean
}

function CartList(prop: cartListProp) {

    const { openCart, setOpenCart } = prop
    const [totalPrice, setTotalPrice] = useState(0);
    const discount = 9
    const shippingCost = 9
    const cartProduct = useSelector((state: RootState) => state.CartProduct.CartProduct);

    function getTotal() {
        let totalCartPrice = 0
        for (const i of cartProduct) {
            totalCartPrice += (i.price * (i.cartCount || 1))
        }
        return totalCartPrice
    }
    useEffect(() => {
        const getPrice = getTotal()
        setTotalPrice(getPrice)

    }, [cartProduct])


    return (
        <section id="cart-main" className={`${openCart ? "translate-x-0" : "translate-x-[130%]"} fixed w-full sm:w-[420px] min-h-screen overflow-auto bg-header top-0 bottom-0 right-0 z-[100] duration-700 shadow-[-10px_-10px_50px_0px_rgba(0,0,0,.5)]`} >
            <main className="w-full h-full relative">
                <div className="text-white text-4xl h-[100px] p-6 flex justify-start items-center">
                    <button className="text-white hover:text-primary hover:scale-105 duration-300" onClick={() => { setOpenCart(false) }}><LuArrowRightToLine /></button>
                    <h2 className="ml-4 text-white  font-semibold" >Cart Store</h2>
                </div>
                <hr className="text-white w-11/12 m-auto" />
                <div className="h-[55%] overflow-auto" >
                    <div className="w-full h-full p-4 flex flex-col gap-4 ">
                        {cartProduct.map((product) => {
                            return <CartProductItem key={product.id} product={product} />
                        })}
                    </div>
                </div>
                <div className="h-[200px] w-full p-4 mt-2">
                    <div className="bg-[#584D99] flex flex-col justify-between w-full h-full rounded-lg shadow-md p-4 text-background ">
                        <div className="opacity-70">
                            <div className="flex justify-between items-center"><h5>Sub Total</h5><span>$ {totalPrice.toFixed(2)}</span></div>
                            <div className="flex justify-between items-center"><h5>Shipping Cost</h5><span>$ {totalPrice <= 0? 0 : shippingCost}</span></div>
                            <div className="flex justify-between items-center"><h5>Discount<span className="text-xs ml-2">( free Shipping )</span></h5><span>$ {totalPrice <= 0? 0 : discount}</span></div>
                        </div>
                        <div className="flex flex-wrap justify-between items-center text-3xl font-bold" ><h2>Total</h2><span className=" max-w-[320px] overflow-x-auto overflow-y-hidden flex flex-nowrap items-end gap-2">$ <span>{(totalPrice + shippingCost - discount).toFixed(2)}</span></span></div>
                    </div>
                </div>
                <Link to={"/checkout"} onClick={()=>{setOpenCart(false)}} className="w-full flex justify-center items-center  px-4 pb-4">
                    <button className="text-xl flex justify-center items-center gap-2 p-4 w-full font-medium text-center text-white bg-primary rounded-lg hover:bg-[#6AAA7C] duration-300 focus:outline-none"><RiBillLine /><span>Checkout</span></button>
                </Link>
            </main>
        </section>
    )
}

export default CartList