import Subscribe from "../BtnSubscribe";

export default function SubscriebNewsletter (){
    return(
        <div className=" flex flex-col gap-10 md:pb-10 ">
            <p className=" text-base xxs:text-xl  md:text-3xl text-center md:text-left pt-4 lg:pt-0">Subscribe to our newsletter</p>
            <div className=" sm:flex justify-center sm:justify-start  gap-2 ">
                <div className=" sm:flex flex justify-center sm:justify-start">
                    <input className=" text-left w-50 md:w-60 h-10 md:h-12 rounded" type="text"  placeholder=" Email"/>
                </div>
                <Subscribe/>
            </div>
        </div>
    )
}