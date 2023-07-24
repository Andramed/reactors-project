'use client'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';


export const useAddItemToCart = () => {
	
	const [message, setMessage] = useState('product not added to cart');
	const [idItem, setIdItem] = useState([]);
	let [item, setItem] = useState([]);
	const [previous, setPrevious] = useState([]);

	const getIdItem = (parentRef) => {
		setIdItem((previousId) => [...previousId, parentRef.id] );
	}
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
			setItem(response.data.collectionData)
		  } catch (error) {
			console.log('Error loading documents: ', error);
		  }
		};
		
	idItem.length > 0? getSortedProducts() : null
	}, [idItem])
	
	useEffect(()=>{
		const previousItem = localStorage.getItem('item');
		
		if (previousItem) {
			console.log(JSON.parse(previousItem));
			setPrevious((rest) => [...rest, JSON.parse(previousItem)])
			console.log('previous o fost obtinut');
		}
		
	}, []);
	useEffect(() => {
		const allItems = localStorage.getItem('allItem');
		if (allItems) {
			console.log(JSON.parse(allItems));
			setPrevious((rest) => [...rest, JSON.parse(allItems)]);
		}
	}, [])

	// inca o cerere all items sa combin ce era in allItems + item (curent)
	console.log(previous);
	useEffect(()=> {
		if (previous.length>0) {
			localStorage.setItem('allItem', JSON.stringify(previous));
			console.log('previous o fost salvat');
		}
	}, [previous])

	useEffect(() => {
		console.log(item.length);
		
		if (item.length>0) {
			localStorage.setItem('item', JSON.stringify(item));
			console.log('noul item sa salvat');
		}
	}, [item])
	return {getIdItem, message, idItem, item}
}