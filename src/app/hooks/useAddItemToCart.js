'use client'
import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import { CartItemContext, useCart } from './CartItemContext';


export const useAddItemToCart = () => {
	
	const {setNumCartItem} = useCart();
	const [message, setMessage] = useState('product not added to cart');
	const [idItem, setIdItem] = useState([]);
	
	let [itemCurent, setItemCurent] = useState([]);
	const [itemPrevious, setItemPrevious] = useState([]);
	
	
	

	const getIdItem = (parentRef) => {
		
		console.log('add to cart');
		console.log(parentRef.id);
		
		setIdItem((previousId) => [...previousId, parentRef.id] );
	}
	
	useEffect(() => {
		const previousItem = JSON.parse(localStorage.getItem('item'));
		if (previousItem) {
		  setItemPrevious(previousItem);
		}
	  }, []);
	
	
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
			// setItemCurent(response.data.collectionData);
			setItemCurent((prevCurent) => [ ...response.data.collectionData]);
			setItemCurent((prevCurent) => [...prevCurent, ...itemPrevious]);
       		
			
		  } catch (error) {
			console.log('Error loading documents: ', error);
		  }
		};
		
	idItem.length > 0 && getSortedProducts();
	}, [idItem])
	

	
	useEffect(() => {
		
		if (itemCurent.length>0) {
			localStorage.setItem('item', JSON.stringify(itemCurent));
			console.log('noul item sa salvat');
			setNumCartItem(itemCurent.length)
		}
	}, [itemCurent])
	
	
	return {getIdItem, message, idItem, itemCurent }
}


