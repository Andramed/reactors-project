import Star from "./Star"
export default function Review (){
    return (
       <div className=" w-[280px] h-[220px]  drop-shadow-2xl">
            <Star time ={" 2 days ago"}/>
            <div className=" flex flex-col flex-grow gap-3 pt-4"> 
                <h3 className=" font-bold">Fast delivery !!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sem ultrices, tempor arcu sed...</p>
                <h5 className=" font-bold">Alexander B.</h5>
            </div>
       </div>
    )
}