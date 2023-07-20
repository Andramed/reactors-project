import Subscribe from "../BtnSubscribe";

export default function SubscriebNewsletter (){
    return(
        <div className=" flex gap-2 flex-col">
            <p className=" pt-6 w-auto">Subscribe to our newsletter</p>
           <div className=" flex flex-col s:flex justify-center items-center gap-2">
            <input className=" w-60 md:w-80 h-10 md:h-12 rounded" type="text"  placeholder=" Email"/>
                <Subscribe/>
           </div>
        </div>
    )
}