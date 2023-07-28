'use client'
import axios from 'axios';
import { useState,  } from 'react';



import {  toast } from 'react-toastify';
import { useSWRConfig } from 'swr';
import { useNumOfProductInCart } from '../context/NumberOfProductInCartContext';
import useSWR from 'swr'

export const useAddItemToCart = () => {
	
	const {mutate} = useSWRConfig();
	const {numOfProductInCart, setNumOfProductInCart} = useNumOfProductInCart();
	const [product, setProduct] =useState({})

	const getProductToCart = (product) => {
		console.log(product);
		const fetcher = async (url) => await axios.post(url, JSON.stringify(product), {
			headers: {
				"Content-type": "application/json"
			}
		}).then((res) => {
			res.data.index == 0 ? toast.warning('this product present in cart'): 
			(setProduct(res.data.data), setNumOfProductInCart(res.data.numberOfDocuments), toast.success('added to cart'));
		});
		mutate('api/cart_user_guest', fetcher('api/cart_user_guest'))
	}
	
	const deleteProductFromCart = (idItem, e) => {
		console.log(e.target);
		e.preventDefault()
		const fetcher = async (url) => await axios.delete(url, {
			params: {
				param: idItem
			}
		}).then((res) => console.log(res.data));
		mutate('api/cart_user_guest', fetcher('api/cart_user_guest'))
		
	}

	return { getProductToCart, deleteProductFromCart, product, numOfProductInCart}
}


