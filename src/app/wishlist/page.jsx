'use client'
import React, { useState } from 'react'
import { ItemCart } from '../cart/components/ItemCart';
import useAddToSessionStorage from '../hooks/useAddToSessionStorage';
import Product from '../components/Product';
import useGetProduct from '../hooks/useGetProduct';

export default function wishlist() {
	const product = JSON.parse(sessionStorage.getItem('wishItems'));
	console.log(product);
	const {removeItemFromCart} = useAddToSessionStorage();
	const {getProduct} = useGetProduct()
  return (
	<div className='flex justify-between px-20 gap-4 '>
				<div className=' w-[70%] flex flex-col'>
					<div className='flex'>
						<div className=' w-[61%]'>Products</div>
						<div className='flex w-[39%] justify-around h-auto mb-5'>
							
	
						</div>
					</div>
					<div className='flex py-4 gap-3'>
						{(product)? product.map((product) =>{
							return <Product 
								key={product._id}  
								item= {product}
								removeItemFromCart={removeItemFromCart}
								getProduct={getProduct}
								// deleteProductFromCart={deleteProductFromCart}						
								/>
						}): <h1>loading</h1>}
					</div>
				</div>
	</div>
  )
}
