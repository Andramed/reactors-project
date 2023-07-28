export default function Star (props){
    const {time} = props
    return (
            <div className="flex text-center items-center w-[125px] sm:w-[150px]  md:w-[250px]  h-[15px] sm:h-[20px] md:h-[30px] gap-1 py-6 ">
                    <img src="/reviews/starReview.svg" alt="star" /> 
                    <img src="/reviews/starReview.svg" alt="star" />
                    <img src="/reviews/starReview.svg" alt="star" />
                    <img src="/reviews/starReview.svg" alt="star" />
                    <img src="/reviews/starReview.svg" alt="star" />
            </div>
    )
}