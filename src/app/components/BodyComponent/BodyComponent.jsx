'use client'

import React, { useEffect } from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import Footer from '../Footer'
import BlackLine from '../BlackLine'
import { CartNumProvider} from '@/app/context/NumberOfProductInCartContext'
import useDeleteCart from '@/app/hooks/useDeleteCart'




export default function BodyComponent({children}) {
	
	const logLocation = () => {
		console.log("locatia", window.location.href);
		const fetcher = (url) => axios.delete(url);
		const {data, error} = useSWR(fetcher)
	
	}
	
	
		
		window.addEventListener('beforeunload', (e) => {
			console.log('set');
			const fetcher = (url) => axios.delete(url, {
				param: {
					param: 'delete pina la inchidere'
				}
			});
			const {data, error} = useSWR('api/delete_cart',fetcher)
			e.returnValue = 'ferestra va fi inchisa'
		});
		
	
	
  return (
	<div>
		<CartNumProvider>
		<Header  />
		<NavBar/>
		<BlackLine/>
			
		{children}
	
		 
		<Footer/>
		</CartNumProvider>
	</div>
  )
}
 