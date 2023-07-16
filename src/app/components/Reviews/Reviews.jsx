import BtnReviews from "./components/BtnReviews"
import Review from "./components/Review"
import Star from "./components/Star"

export default function Reviews (){
    return (
       <div className="">
            <div className=" flex justify-center items-center">
                <h1 className=" text-4xl font-bold">What clients say about us </h1>
            </div>
            <div className=" flex justify-around p-2">
                <div className=" flex flex-col items-center drop-shadow-2xl gap-3">
                    <h5 className=" font-bold">Excellent</h5>
                    <div className=" pl-20">
                        <Star/>
                    </div>
                    <p>Based on 56 reviews</p>
                    <div className=" flex ">
                        <img src="/reviews/starMini.svg" alt="starMini" />
                        <p className=" font-bold">Trustpilot</p>
                    </div>
                </div>
                <Review/>
                <Review/>
                <Review/>
            </div>
            <BtnReviews/>
       </div>
    )
}