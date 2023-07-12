import Language from "../Language";

export const Header = () => {
    return (
        <div className=" flex w-full h-16 bg-header-bg text-white items-center gap-48">
            <div className="flex justify-start  pl-10 gap-8 ">
                <div className=" flex gap-1">
                    <img src="/imgHeader/email.svg" alt="email" />
                    <a href="mailto:top_phone@gmail.com">top_phone@gmail.com</a>                
                </div>
                <div className=" flex ju gap-1">
                    <img src="/imgHeader/phone.svg" alt="phone" />
                    <a href="tel:+123 (12345)67890">+123 (12345)67890</a>
                </div>
            </div>
            <div className=" flex justify-center gap-1">
                <img src="/imgHeader/search.svg" alt="search" />
                <input className=" bg-header-bg " type="text" placeholder="Search on this website"/>
            </div>
            <div>
                <div className="flex justify-end gap-8">
                    <div className=" flex gap-1">
                        <img src="/imgHeader/heart.svg" alt="heart" />
                        <p>Wishlist</p>
                    </div>
                    <div className=" flex gap-1">
                        <img src="/imgHeader/shop.svg" alt="shop" />
                        <p>Cart</p>
                    </div>
                    <div>
                        <Language/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;