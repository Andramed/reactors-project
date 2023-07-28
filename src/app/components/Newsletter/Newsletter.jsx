export default function Newsletter (){
    return(
        <div className=" w-full sm:flex justify-center items-center text-center px-10 py-6 md:pt-6 bg-[#F9F6F2]  sm:gap-10 mb-4 "> 
            <div className=" md:w-1/2 md:h-1/5 flex flex-col  justify-center gap-2 md:gap-6">
                <h3 className=" text-center md:text-left text-sm xs:text-base sm:text-xl md:text-3xl lg:text-4xl font-bold ">Subscribe to our newsletter and get -5 % off of your next purchase !</h3>
                <p className=" flex justify-center md:justify-start text-xs xxs:text-sm md:text-base"> Insert your e-mail adress</p>
                <div className=" flex items-center justify-center md:justify-start gap-2">
                    <input className="flex w-28 sm:w-34 md:w-56 h-5 sm:h-8 md:h-10 pt-5 items-center rounded" type="text" />
                    <button className="flex text-center w-20 sm:w-30 md:w-36 h-5 sm:h-8 md:h-10 md:pl-5 items-center rounded bg-header-bg text-white text-[9px] md:text-xs p-1">Yes, I want -5%</button>
                </div>
            </div>
            <div className=" sm:h-1/2 pt-2">
                <img src="/imgNewsletter/newsletter.svg" alt="news" />
            </div>
        </div>
    )
}