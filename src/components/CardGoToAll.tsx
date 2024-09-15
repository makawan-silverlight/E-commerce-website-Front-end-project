import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
function CardGoToAll() {
    return (
        <Link to={"/product"} className="text-header h-[454px] flex flex-col justify-center items-center bg-background border border-gray-200 rounded-lg shadow-md p-4 hover:scale-[1.02] duration-300 gap-4">
            <div className="text-7xl"><FaPlus /></div>
            <div>Go to all products</div>
        </Link>
    )
}

export default CardGoToAll