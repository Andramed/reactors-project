import Language from '../components/Language';



export const Header = () => {
    return (
        <div className="  flex w-full h-16 text-xs xxs:text-base md:text-sm lg:text-base gap-48 max-[1248px]:gap-0 px-5 lg:px-10 bg-header-bg text-white  justify-between items-center  ">
        <div className=" lg:flex items-center gap-2 md:gap-4 md:w-[35%]">
            <div className="hidden xl:flex gap-2">
                <img src="/imgHeader/email.svg" alt="email" />
                <a href="mailto:top_phone@gmail.com">top_phone@gmail.com</a>                
            </div>
            <div className=" hidden md:flex gap-2  " >
                <img src="/imgHeader/phone.svg" alt="phone" />
                <a href="tel:+123 (12345)67890">+123 (12345)67890</a>
            </div>
        </div>
        <div className=" flex    ">
           
            <input   className=" bg-header-bg " type="text" placeholder="Search on this website"/>
			<img className='' src="/imgHeader/search.svg" alt="search" />
        </div>
        <div className=" w-full flex justify-between xs:w-max items-center md:flex">
            <div className="flex w-full justify-between xs:w-auto  gap-2">
                <div className="  gap-1 xxs:gap-2 flex ml-auto ">
                    <img src="/imgHeader/heart.svg" alt="heart" />
                    <p>Wishlist</p>
                </div>
                <div className=" gap-1 xxs:gap-2 flex ml-2 xxs:ml-4 ">
                    <img src="/imgHeader/shop.svg" alt="shop" />
                    <p>Cart</p>
                </div>
                <div className=" hidden xs:flex ml-2 xs:ml-4">
                    <Language/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Header;