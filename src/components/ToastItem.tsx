import { IoCloseOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteToast } from "../store/ToastSlice";
type toastProp = {
    data: {
        title: string
        icon: string
        id: number
        style: string
    }
}

function ToastItem(props: toastProp) {
    const dispatch = useDispatch()
    const { title, icon, id, style } = props.data
    let iconElement

    switch (icon) {
        case "addToCart":
            iconElement = <RiShoppingBag4Line />
            break;
        case "favorite":
            iconElement = <FaHeart />
            break;
        case "remove":
            iconElement = <FaTrashAlt />
            break;
        default:
            iconElement = <RiShoppingBag4Line />
            break;
    }

    function handleDelete() {
        dispatch(deleteToast(id))
    }

    return (
        <div className={`${style} animate-toastAnimation p-4 text-sm rounded-md shadow-[5px_5px_5px_0px_rgba(0,0,0,0.7)] duration-500`}>
            <div className="flex items-center text-background gap-4">
                <span className="text-xl">{iconElement}</span>
                <span>{title}</span>
                <button onClick={handleDelete} className="w-7 h-7 text-xl rounded-full bg-[rgba(255,255,255,0.1)] flex justify-center items-center"><IoCloseOutline /></button>
            </div>
        </div>
    )
}

export default ToastItem