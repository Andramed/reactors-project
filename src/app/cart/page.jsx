'use client'
import React, { useEffect, useState } from 'react'
import { useAddItemToCart } from '../hooks/useAddItemToCart'
import { ItemCart } from '../test/ItemCart';

export default function Page() {
	let [product, setProduct] = useState();
	useEffect(() => {
		const getLocalVar = () => {
			const item = localStorage.getItem('item');
			
			setProduct(JSON.parse(item));
		};
		getLocalVar()
	}, []);
		
	return(
		<>
			{(product)? product.map((product) =>{
				return <ItemCart key={product._id}  product= {product}/>
			}): <h1>loading</h1>}
		</>
	)

	// if (!item) {
	// 	return(
	// 		<h1>You don't have any items in Cart go to <a className=' hover:bg-slate-400' href="/products">products</a> to add product</h1>
	// 	)
	// } else {
	// 	return(
	// 		<h1>{item} aici item</h1>
	// 	)
	// }
	
	
	// if (idItem) {
	// 	getLocalVar(idItem)
	// }
	
}