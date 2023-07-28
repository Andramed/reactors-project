import BtnReviews from "./components/BtnReviews"
import Review from "./components/Review"
import Star from "./components/Star"

export default function Reviews (){
    return (
        <div className=" flex flex-col justify-center sm:justify-start items-center text-center sm:text-left gap-6 px-10 py-10"> 
            <h1 className=" text-xl xs:text-2xl md:text-3xl lg:text-5xl font-bold py-4">What clients say about us </h1>
            <div className=" sm:flex  gap-4 xxs:gap-4 xs:gap-6  ">
                <div className=" lg:flex drop-shadow-2xl gap-4 sm:pt-6 lg:pt-0">
                <div className=" flex flex-col">
                    <h5 className=" py-2 font-bold">Excellent</h5>
                        <Star/>
                        <p className=" py-2 underline">Based on 56 reviews</p>
                        <div className=" flex flex-col justify-center items-center text-center ">
                            <img src="/reviews/starMini.svg" alt="starMini" />
                            <p className=" font-bold">Trustpilot</p>
                        </div>
                </div>
                    <Review/>
                </div>
                <div className=" lg:flex">
                    <Review/>
                    <Review/>
                </div>
            </div>
            <BtnReviews/>
        </div>
    )
}