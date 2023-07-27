'use client'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import Link from 'next/link'
import BlackLine from './components/BlackLine'
import Footer from './components/Footer'

import useSWR from 'swr'
import { CartNumProvider, useNumOfProductInCart } from './context/NumberOfProductInCartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
	

  return (
    <html lang="en">
      <body className={inter.className}>
	  <CartNumProvider>
			<Header  />
		
			<NavBar/>
			<BlackLine/>
				
					{children}
				
			<Footer/>
		</CartNumProvider>
      </body>
    </html>
  )
}
