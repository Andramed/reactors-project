'use client'
// import Link from "next/link"
// import { useState } from "react";
// import HamburgerMenu from "react-hamburger-menu";


// export default function NavBar (){
//     const [hidden, setHidden] = useState(true)
//   const handlerClick = () => {
//     setHidden(false)
//     console.log("am apasat pe menu");

//   };
//             if (hidden) {
//                 return(
//                      <div className="flex items-center justify-between  md:justify-between gap-2 h-10" >
//                         <div className="w-max">
//                             <div className=" flex items-center text-sm  md:text-base">
//                                 <div className=" text-xs w-max lg:text-base ">
//                                     <h2>Top Phone</h2>
//                                 </div>

//                             <button onClick={handlerClick} className=" md:hidden ml-4  ">
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" h-8">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                                     </svg>
//                             </button>
//                         </div> 
//                         </div>
//                         <div className="hidden lg:text-base md:flex text-xs w-11/12 justify-between">
//                             <Link href={"/"}>Home</Link>
//                             <Link href={"/products"}>Products</Link>
//                             <Link href={"/brands"}>Brands</Link>
//                             <Link href={"/promotions"}>Promotions</Link>
//                             <Link href={"/about"}>About Us</Link>
//                             <Link href={"/blog"}>Blog</Link>
//                             <Link href={"/FAQ"}>FAQ</Link>
//                             <Link href={"/contact"}>Contact</Link>
//                             <select value="categories"> 
//                                 <option value="phone">All Categories</option>
//                                 <option value="smartphone">Smart Phone</option>
//                                 <option value="classicphone">Classic Phone</option>
//                             </select>
//                         </div>

//                         <div className="flex w-full md:w-max justify-between  ">
//                             <input className=" w-full md:w-auto  border" type="text" placeholder="Brand..."/>
//                             <button className="  flex w-5 h-6 items-center justify-center rounded bg-btn-color md:w-6 md:h-6 lg:w-8 lg:h-8 "><img  className= 'w-1/2 h/12'src="/imgNavBar/searchNav.svg" alt="search" /></button>                        
//                         </div>
//                      </div>   

//                 )
//             } else {
//                 return(
//                     <div className=" md:gap-0 lg:gap-44 bg-white flex items-center">
//                     <div className="">
//                         <h2>Top Phone</h2>
//                     </div>
//                     <div className="flex gap-7 items-center">
//                         <Link href={"/"}>Home</Link>
//                         <Link href={"/products"}>Products</Link>
//                         <Link href={"/brands"}>Brands</Link>
//                         <Link href={"/promotions"}>Promotions</Link>
//                         <Link href={"/about"}>About Us</Link>
//                         <Link href={"/blog"}>Blog</Link>
//                         <Link href={"/FAQ"}>FAQ</Link>
//                         <Link href={"/contact"}>Contact</Link>
//                         <select value="categories"> 
//                             <option value="phone">All Categories</option>
//                             <option value="smartphone">Smart Phone</option>
//                             <option value="classicphone">Classic Phone</option>
//                         </select>
//                        <div className=" gap-2">
//                         <input type="text" placeholder="Brand..."/>
//                         <button className=" w-[50px] h-[50px] p-3 rounded bg-btn-color"><img src="/imgNavBar/searchNav.svg" alt="search" /></button>
//                        </div>
//                     </div>
//                 </div>
        
//                 )
//             }
    
// } 
import Link from "next/link"
import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const [showLinks, setShowLinks] = useState(false);


  const handleClick = () => {
    setHidden(!hidden);
  };    

  const handleCloseLinks = () => {
    console.log("am apasat btn close");
    setShowLinks(false);
  };


  return (
    <div className="flex items-center md:justify-between md:gap-2 h-10 s:px-10">
      <div className="w-max">
        <div className="flex items-center text-sm md:text-base">
          <div className="text-xs w-max lg:text-base hidden  lg:flex">
            <h2>Top Phone</h2>
          </div>

          <button onClick={handleClick} className="md:hidden ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {!hidden && (
        <div className="hidden  lg:text-base md:flex  w-11/12 justify-between md:text-[0.7rem]">
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
        </div>
      )}

      {!hidden && (
        <div className="flex w-full md:w-max justify-between">
          <input className="w-full md:w-auto border" type="text" placeholder="Brand..." />
          <button className="flex w-5 h-6 items-center justify-center rounded bg-btn-color md:w-6 md:h-6 lg:w-8 lg:h-8">
            <img className="w-1/2 h/12" src="/imgNavBar/searchNav.svg" alt="search" />
          </button>
        </div>
      )}

      {hidden && (
        <div className="flex flex-col mt-10 ml-auto items-center s:flex-row s:text-[0.6rem] s:mt-0 s:w-[80%] s:justify-between bg-white p-5 text-base ">
          <button onClick={handleCloseLinks} className=" px-4 py-2 rounded bg-red-500 text-white">Close</button>
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
      </div>
    )}
    </div>
  );
}
