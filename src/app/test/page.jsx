import Language from "../components/Language"


export default function Page () {
    return(
        <div className="  flex w-full h-16 bg-header-bg text-white items-center justify-between s:px-10">
        <div className=" hidden  s:flex gap-0 md:gap-2">
            <div className=" flex text-base lg:text-base gap-2  md:text-xs">
                <img className="" src="/imgHeader/email.svg" alt="email" />
                <a href="mailto:top_phone@gmail.com">top_phone@gmail.com</a>                
            </div>
            <div className="text-xs  md:flex  lg:text-base hidden xl:flex gap-2" >
                <img className="" src="/imgHeader/phone.svg" alt="phone" />
                <a href="tel:+123 (12345)67890">+123 (12345)67890</a>
            </div>
        </div>
        <div className=" flex w-max s:w-[30%]  md:text-sm lg:text-base md:w-[35%] lg:w-[25%] ">
            <img src="/imgHeader/search.svg" alt="search" />
            <input  className=" bg-header-bg w-full s:w-full " type="text" placeholder="Search on this website"/>
        </div>
        <div className=" w-full flex justify-between s:w-max md:text-[0.75rem] md:items-center md:flex lg:text-base">
            <div className="flex w-full justify-between s:w-auto ">
                <div className=" flex ml-auto items-center gap-1 ">
                    <img src="/imgHeader/heart.svg" alt="heart" />
                    <p>Wishlist</p>
                </div>
                <div className="  gap-1 items-center  flex ml-auto pr-3 s:m-0 md:ml-2 ">
                    <img src="/imgHeader/shop.svg" alt="shop" />
                    <p>Cart</p>
                </div>
                <div className=" hidden s:flex">
                    <Language/>
                </div>
            </div>
        </div>
    </div>

    )
}