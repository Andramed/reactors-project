'use client'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';


export const useAddItemToCart = () => {
	
	const [message, setMessage] = useState('product not added to cart');
	const [idItem, setIdItem] = useState([]);
	let [item, setItem] = useState([]);

	const getIdItem = (parentRef) => {
		setIdItem((previousId) => [...previousId, parentRef.id] );
	}
	// console.log(idItem, 'hook');
	
	useEffect(() => {
		const getSortedProducts = async () => {
			
		  try {
			const response = await axios.get('/api/getSortedProducts', {
			  params: {
				param: {_id: idItem},
			  },
			  headers: {
				'Cache-Control': 'no-store',
			  },
			});
			setItem(response.data)
		  } catch (error) {
			console.log('Error loading documents: ', error);
		  }
		};
		
	idItem.length > 0? getSortedProducts() : null
	}, [idItem])
		console.log(item);
	useEffect(() => {
		
		localStorage.setItem('item', JSON.stringify(item))
	}, [item])
	return {getIdItem, message, idItem, item}
}