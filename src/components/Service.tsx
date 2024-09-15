import { MdSecurity,MdOutlineLocalShipping } from "react-icons/md";
import { RiCoinsLine } from "react-icons/ri";
import { LuCalendarCheck } from "react-icons/lu";
import { BsCashCoin } from "react-icons/bs";
import { TbCreditCardPay } from "react-icons/tb";
function Service() {
    return (
        <section className="my-16">
            <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-between text-center text-xl text-header gap-6">
                <div className="flex flex-col justify-center items-center gap-4" >
                    <div className="text-6xl"><MdSecurity/></div>
                    <p>Authentic Product<br />with warranty</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4" >
                    <div className="text-6xl"><RiCoinsLine/></div>
                    <p>Gain points and use<br />as discount</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4" >
                    <div className="text-6xl"><LuCalendarCheck/></div>
                    <p>Replace the DOA<br />within 7 days.</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4" >
                    <div className="text-6xl"><MdOutlineLocalShipping/></div>
                    <p>Free shipping on<br />order over 1 $</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4" >
                    <div className="text-6xl"><BsCashCoin/></div>
                    <p>Cash on delivery<br />available</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4" >
                    <div className="text-6xl"><TbCreditCardPay/></div>
                    <p>Lots of payment<br />method</p>
                </div>
            </div>
        </section>
    )
}

export default Service