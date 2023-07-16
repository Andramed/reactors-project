import Link from "next/link";

export const NavBar = () => {
    return(
        <div className=" m-auto w-full h-28 bg-white flex justify-between items-center px-10 gap-2 xs:gap-2 md:justify-around">
           
			<img className=' w-[4.8rem]  lg:w-28' src="/logo/logo.jpg" alt="logo"/>

            <div className=" gap-3 justify-between text-sm lg:text-base lg:gap-4 items-center  hidden md:flex ">
                <Link href={"/"}>Home</Link>
                <Link href={"/products"}>Products</Link>
                <Link href={"/brands"}>Brands</Link>
                <Link href={"/promotions"}>Promotions</Link>
                <Link className='hidden w-max lg:flex' href={"/about"}>About Us</Link>
                <Link className='hidden lg:flex' href={"/blog"}>Blog</Link>
                <Link className='hidden lg:flex' href={"/FAQ"}>FAQ</Link>
                <Link  className='hidden lg:flex' href={"/contact"}>Contact</Link>
                
            </div>
			<select  className=' text-sm hidden xs:flex lg:text-base '> 
                    <option value="phone">All Categories</option>
                    <option value="smartphone">Smart Phone</option>
                    <option value="classicphone">Classic Phone</option>
            </select>
			<div className=' md:hidden  '>
				<button>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 17" strokeWidth={1.5} stroke="currentColor" className="w-6 h-10">
  					<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>

				</button>
			</div>
			<div className=" gap-2 flex w-full  md:w-full lg:text-sm   ">
                <input className=' border w-full md:w-full ' type="text" placeholder="Brand..."/>
                <button className=" w-14 h-8 flex items-center justify-center  rounded bg-btn-color"><img className=' w-1/2 h-1/2' src="/imgNavBar/searchNav.svg" alt="search" /></button>
            </div>
        </div>
    )
}
export default NavBar;