'use client'
import { useAddItemToCart } from '@/app/hooks/useAddItemToCart';
// import Cart from "./components/Cart";
import WishList from "./components/WishList";
import { useEffect, useState } from 'react';
import { CartItemProvider, useCart } from '@/app/hooks/useCartItemContext';
import useSWR from 'swr'
import { useNumOfProductInCart } from '@/app/context/NumberOfProductInCartContext';
import axios from 'axios';
import SignIn from '../SignIn';
import useAddToSessionStorage from '@/app/hooks/useAddToSessionStorage';
import {useSession, signIn, signOut} from 'next-auth/react'
import Link from 'next/link';
import SignUp from '../SignUp';





export const Header = () => {
	
	
	const {numOfProductInCart} = useNumOfProductInCart()
 	console.log(numOfProductInCart);
	const session = useSession()
	// console.log(session);

    return (
		
	

				<div className="  flex w-full h-16 text-xs xxs:text-base md:text-sm lg:text-base gap-48 max-[1248px]:gap-0 px-5 lg:px-10 bg-header-bg text-white  justify-between items-center  ">
							<div className=" lg:flex items-center gap-4 md:gap-4 md:w-[35%]">
								<div className="hidden xl:flex gap-2">
									<img src="/imgHeader/email.svg" alt="email" />
									<a href="mailto:top_phone@gmail.com">top_phone@gmail.com</a>                
								</div>
								<div className=" hidden md:flex gap-2 w-60  " >
									<img src="/imgHeader/phone.svg" alt="phone" />
									<a href="tel:+123 (12345)67890">+123 (12345)67890</a>
								</div>
							</div>
							<div className=" flex w-max xs:w-[30%] md:w-[35%] lg:w-[25%]  ">
								<div className=' hidden sm:flex'>
									<img src="/imgHeader/search.svg" alt="search" />
									<input  className=" bg-header-bg w-full  xs:w-full " type="text" placeholder="Search on this website"/>
								</div>
							</div>
							<div className=" min-w-max flex justify-between xs:w-max items-center md:flex">
								<div className="flex w-full justify-between xs:w-auto  gap-2">
									<div className="  gap-1 xxs:gap-2 flex ml-auto  items-center">
										<img src="/imgHeader/heart.svg" alt="heart" />
										<a href="/wishlist">wishlist</a>
									</div>
									
										<div className=" gap-1 xxs:gap-2 flex ml-2 xxs:ml-4 items-center ">
											<img src="/imgHeader/shop.svg" alt="shop" />
											<span>{numOfProductInCart}</span>
											<a href="/cart">Cart</a>
										</div>
									
									<div className=" hidden xs:flex ml-2 xs:ml-4">
										{session.data ? (
											<div className=' flex gap-3 items-center justify-around'>
												<Link href='/profile'>Profile</Link>
												<button onClick={() => signOut({
													redirect: '/'
												})} href='/' className='bg-[#0f6161] px-5 py-1 rounded-lg text-white' >Sign Out</button>
											</div>
										): <SignUp/> }
									</div>
								</div>
							</div>
						</div>


		
		
    )
}
export default Header;