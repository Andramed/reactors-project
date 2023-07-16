import Subscribe from "../BtnSubscribe";

export default function SubscriebNewsletter (){
    return(
        <div className=" flex gap-2 flex-col">
            <p>Subscribe to our newsletter</p>
           <div className=" flex gap-2">
            <input className=" w-80 h-12" type="text"  placeholder=" Email"/>
                <Subscribe/>
           </div>
        </div>
    )
}