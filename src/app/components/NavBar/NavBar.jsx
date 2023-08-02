'use client'
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";


import Link from "next/link";
import { useState } from 'react';

// import "rsuite/dist/rsuite.min.css";


export const NavBar = () => {
	
	const [selectedLink, setSelectedLink] = useState(null);

	const getClickedLink = (e) => {
	  // Eliminăm clasa de la elementele anterioare
	  const previousSelected = document.querySelector('.selected');
	  if (previousSelected) {
		previousSelected.classList.remove('selected');
	  }
  
	  // Adăugăm clasa la elementul curent
	  const currentElement = e.target;
	  currentElement.classList.add('selected');
  
	  // Actualizăm starea componentei cu elementul selectat
	  setSelectedLink(currentElement.textContent);
	};
    return(
        <div className=" m-auto w-full h-28 bg-white flex justify-between items-center px-10  xs:gap-7 md:justify-around">
           
			<img className=' w-[4.8rem]  lg:w-28' src="/logo/logo.jpg" alt="logo"/>

            <div onClick={getClickedLink} className={`  gap-3 justify-between text-sm lg:text-base lg:gap-4 items-center  hidden md:flex `}>
                <Link className=' selected link-navbar' href={"/"}>Home</Link>
                <Link className=' link-navbar' href={"/products"}>Products</Link>
                <Link className=' link-navbar' href={"/brands"}>Brands</Link>
                <Link className='hidden w-max lg:flex link-navbar ' href={"/about"}>About Us</Link>
                <Link className='hidden lg:flex link-navbar' href={"/questions"}>FAQ</Link>
                <Link  className='hidden lg:flex link-navbar' href={"/contact"}>Contact</Link>
            </div>
			{/* <select  className=' link-navbar text-sm hidden xs:flex lg:text-base '> 
                    <option value="phone">All Categories</option>
                    <option value="smartphone">Smart Phone</option>
                    <option value="classicphone">
						Classic Phone
					</option>
            </select> */}
			<div className=' link-navbar text-sm hidden xs:flex lg:text-base '>
			<Dropdown title="All Categories"> 
				{/* <Dropdown.Item>
                    Phone Types:
                </Dropdown.Item> */}
                <Dropdown.Item as="a" href="/classicPhones">
                    Classic Phones
                </Dropdown.Item>
                <Dropdown.Item as="a" href="/smartPhones">
                    Smart Phones
                </Dropdown.Item>
            </Dropdown>
			</div>
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