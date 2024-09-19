import { FaUserCircle } from "react-icons/fa";
import RatingStar from "./RatingStar";


type reviewProp = {
    review: {
        comment: string
        date: string
        rating: number
        reviewerEmail: string
        reviewerName: string
    }
}

function ReviewBlog(prop: reviewProp) {

    const { review } = prop

    return (
        <div className="w-full flex flex-col gap-2 mb-2 bg-secondary shadow-xl p-2 rounded-lg">
            <div className="flex items-center gap-4">
                <div className="text-4xl"><FaUserCircle /></div>
                <div>
                    <div className="flex flex-wrap items-center gap-2">
                        <h5 className="flex items-center gap-2 text-xl font-semibold">{review.reviewerName}</h5>
                        <span className="text-primary flex flex-wrap text-xs md:text-sm">( {review.reviewerEmail} )</span>
                    </div>
                    <div className="flex"><RatingStar rating={review.rating} /> <span>( {review.rating} )</span></div>
                </div>
            </div>
            <p className=" bg-background text-header rounded-lg min-h-16 p-4">Comment : <span>{review.comment}</span></p>
        </div>
    )
}

export default ReviewBlog