import Link from "next/link";

export const NavBar = () => {
    return(
        <div className=" w-[1920px] h-[115px] bg-white flex gap-44 items-center">
            <div className=" pl-14">
                <h2>Top Phone</h2>
            </div>
            <div className="flex gap-7 items-center">
                <Link href={"/"}>Home</Link>
                <Link href={"/products"}>Products</Link>
                <Link href={"/brands"}>Brands</Link>
                <Link href={"/promotions"}>Promotions</Link>
                <Link href={"/about"}>About Us</Link>
                <Link href={"/blog"}>Blog</Link>
                <Link href={"/FAQ"}>FAQ</Link>
                <Link href={"/contact"}>Contact</Link>
                <select value="categories"> 
                    <option value="phone">All Categories</option>
                    <option value="smartphone">Smart Phone</option>
                    <option value="classicphone">Classic Phone</option>
                </select>
               <div className=" gap-2">
                <input type="text" placeholder="Brand..."/>
                <button className=" w-[50px] h-[50px] p-3 rounded bg-btn-color"><img src="/imgNavBar/searchNav.svg" alt="search" /></button>
               </div>
            </div>
        </div>
    )
}
export default NavBar;