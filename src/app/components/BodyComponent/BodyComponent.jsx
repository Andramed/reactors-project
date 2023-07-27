'use client'

import React from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import Footer from '../Footer'
import BlackLine from '../BlackLine'
import { CartNumProvider} from '@/app/context/NumberOfProductInCartContext'


// import { CartNumProvider, useNumOfProductInCart } from './context/NumberOfProductInCartContext'

export default function BodyComponent({children}) {

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
