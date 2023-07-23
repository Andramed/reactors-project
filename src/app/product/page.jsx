'use client'
import React, { useEffect, useState } from 'react'
import { ItemCart } from '../test/ItemCart'
import { useAddItemToCart } from '../hooks/useAddItemToCart'


export default function Page() {
	const [product, setProduct] = useState()
	useEffect(() => {
		const itemLocal = sessionStorage.getItem('item');
		setProduct(JSON.parse(itemLocal));
	}, [])
	console.log(product);

	const {getIdItem} = useAddItemToCart()
  return (
	<div>
		{
			(product)? <ItemCart onClick={getIdItem} product={product} /> : <h1>loading</h1>
		}
	</div>
  )
}