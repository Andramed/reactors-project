import Star from "./Star"
export default function Review (){
    return (
       <div className=" gap-4 py-3 drop-shadow-2xl">
            <Star time ={" 2 days ago"}/>
            <div className=" flex flex-col flex-grow gap-2"> 
                <h3 className=" font-bold py-2">Fast delivery !!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sem ultrices, tempor arcu sed...</p>
                <h5 className=" font-bold">Alexander B.</h5>
            </div>
       </div>
    )
}