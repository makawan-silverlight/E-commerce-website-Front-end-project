import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import CheckoutProductItem from "../../components/CheckoutProductItem"
import { useEffect, useState } from "react";
import { setCartToLocalStorage } from "../../store/CartProductSlice";
import creditCard from '../../../public/image/creditCard.png'


function CheckoutPage() {
  const cartProduct = useSelector((state: RootState) => state.CartProduct.CartProduct)
  const [totalPrice, setTotalPrice] = useState(0);
  const [showDialog, setShowDialog] = useState(false)
  const discount = 9
  const shippingCost = 9
  const dispatch = useDispatch()

  function getTotal() {
    let totalCartPrice = 0
    for (const i of cartProduct) {
      totalCartPrice += (i.price * (i.cartCount || 1))
    }
    return totalCartPrice
  }

  function checkoutPay() {
    dispatch(setCartToLocalStorage([]))
    setShowDialog(false)
  }

  function handleCheckoutBtn () {
    if(cartProduct.length >= 1){
      setShowDialog(true)
    }
  }


  useEffect(() => {
    const getPrice = getTotal()
    setTotalPrice(getPrice)

  }, [cartProduct])

  const dialog = (
    <div className="fixed w-screen h-screen bg-[rgba(0,0,0,0.8)] top-0 bottom-0 left-0 right-0 z-[9999] flex justify-center items-center">
      <div className="w-[80%] h-[500px] max-w-[400px] bg-background rounded-lg flex flex-col items-center justify-between p-4">
        <h2 className="text-2xl font-bold text-header">Checkout Payment</h2>
        <div className="w-[80%]">
          <img src={creditCard} alt="credit card" />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <h3 className="text-primary">Total price :</h3>
          <h2 className="text-4xl font-bold text-header" >$ {totalPrice}</h2>
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <button onClick={checkoutPay} className="w-[90%] h-12 bg-[#6AAA7C] hover:bg-[#2E7D32] duration-300 text-xl font-bold rounded-md text-white shadow-md">Pay</button>
          <button onClick={()=>{setShowDialog(false)}} className="w-[90%] h-12 bg-red-700 hover:bg-red-900 duration-300 text-xl font-bold rounded-md text-white shadow-md">Cancel</button>
        </div>
      </div>
    </div>
  )

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <section className="container my-8 relative z-10 flex flex-col gap-4 px-8">
        <h1 className="text-4xl text-header font-bold border-b-2 border-header pb-6 w-full" >Checkout Page</h1>
        <div className="w-full">

          <div className="p-4 mb-4 lg:flex hidden border-b text-header border-primary justify-between items-center">
            <div className="w-20 md:w-[10%]">
              Product
            </div>
            <h4 className="block w-[40%]">Title</h4>
            <div className="flex flex-col justify-center items-center w-[50%] ">
              <div className="flex justify-between items-center  w-full">
                <div className="flex justify-center items-center w-[40%]">
                  <h5 className="w-1/2 flex justify-center">Total</h5>
                  <span className="w-1/2 flex justify-center">Price</span>
                </div>
                <div className="flex justify-center items-center p-4w-[40%]">
                  Quantity
                </div>
                <div className=" w-[20%] flex justify-end">
                  Remove
                </div>
              </div>
            </div>
          </div>

          <div className="h-[45vh] lg:h-[35vh] overflow-auto">
            {cartProduct.map((product) => {
              return <CheckoutProductItem key={product.id} product={product} />
            })}
          </div>
        </div>

        <div className="h-[150px] w-full p-4 mt-2">
          <div className="flex flex-col justify-between w-full h-full text-header ">
            <div className="opacity-70">
              <div className="flex justify-between items-center"><h5>Sub Total</h5><span className="">$ {totalPrice.toFixed(2)}</span></div>
              <div className="flex justify-between items-center"><h5>Shipping Cost</h5><span className="">$ {totalPrice <= 0 ? 0 : shippingCost}</span></div>
              <div className="flex justify-between items-center"><h5>Discount<span className="text-xs ml-2">( free Shipping )</span></h5><span className="">$ {totalPrice <= 0 ? 0 : discount}</span></div>
            </div>
            <div className="flex flex-wrap justify-between items-center text-4xl font-bold" ><h2>Total</h2><span className=" max-w-[320px] overflow-x-auto overflow-y-hidden">$ {(totalPrice + shippingCost - discount).toFixed(2)}</span></div>
          </div>
        </div>
        <div className="w-full">
          <button onClick={handleCheckoutBtn} className="text-xl flex justify-center items-center gap-2 p-4 w-full font-medium text-center text-white bg-primary rounded-lg hover:bg-[#6AAA7C] duration-300 focus:outline-none"><span>Checkout</span></button>
        </div>
      </section>
      {showDialog && dialog}
    </main>
  )
}

export default CheckoutPage