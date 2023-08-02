'use client'

import React, { useEffect } from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import Footer from '../Footer'
import BlackLine from '../BlackLine'
import { CartNumProvider} from '@/app/context/NumberOfProductInCartContext'
import useDeleteCart from '@/app/hooks/useDeleteCart'
import Providers from '../Providers'
import { WishNumProvider } from '@/app/context/NumberOfItemInWishList'




export default function BodyComponent({children}) {
	
  return (
	<div>
		<Providers>
			<CartNumProvider>
			<WishNumProvider>
				<Header  />
				<NavBar/>
				<BlackLine/>
					
				{children}
			
				
				<Footer/>
			</WishNumProvider>
			</CartNumProvider>
		</Providers>
	</div>
  )
}
 