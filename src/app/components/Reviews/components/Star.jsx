export default function Star (props){
    const {time} = props
    return (
       <div className=" flex justify-between w-[250px] h-[30px]">
            <div className=" flex">
            <img src="/reviews/starReview.svg" alt="star" /> 
            <img src="/reviews/starReview.svg" alt="star" />
            <img src="/reviews/starReview.svg" alt="star" />
            <img src="/reviews/starReview.svg" alt="star" />
            <img src="/reviews/starReview.svg" alt="star" />
        </div>
            {time}
       </div>
    )
}