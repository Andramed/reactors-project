'use client'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';


export const useAddItemToCart = () => {
	
	const [message, setMessage] = useState('product not added to cart');
	const [idItem, setIdItem] = useState([]);

	let [itemCurent, setItemCurent] = useState([]);
	const [itemPrevious, setItemPrevious] = useState([]);
	
	
	

	const getIdItem = (parentRef) => {
		console.log(parentRef);
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
	console.log(itemPrevious);
	
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
	
	
	
	//add item curent care este compus din cel precedent + cel adaugat la click de user


	
	// useEffect(() => {
	// 	if (itemPrevious.length > 0 && itemCurent.length > 0) {
	// 		setItemCurent((prevElement) => [...prevElement, ...itemPrevious]);
	// 	  console.log('item curent salvat cu previous');
	// 	}
	//   }, [itemCurent, itemPrevious, isLoaded]);

	console.log(itemCurent);
	useEffect(() => {
		
		if (itemCurent.length>0) {
			localStorage.setItem('item', JSON.stringify(itemCurent));
			console.log('noul item sa salvat');
			console.log('item curent total', itemCurent);
		}
	}, [itemCurent])
	return {getIdItem, message, idItem, itemCurent}
}


