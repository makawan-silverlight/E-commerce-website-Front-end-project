import { FaStar, FaRegStar } from "react-icons/fa6";

type ratingProp = {
  rating: number
}

function RatingStar(prop: ratingProp) {

  const { rating } = prop
  return (
    <div className="flex justify-center items-center">
      {[...Array(5)].map((_, index) => {
        if (rating > index) {
          return <div key={index} className="text-amber-600"><FaStar /></div>
        } else {
          return <div key={index} className="text-gray-500"><FaRegStar /></div>
        }
      })}
    </div>
  )
}

export default RatingStar