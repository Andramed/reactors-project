

import { useEffect, useState } from 'react'

import { toast } from 'react-toastify';
import { useNumOfProductInWish } from '../context/NumberOfItemInWishList';


const useAddItemToWishlist = () => {
	const [wishItems, setWishItems] = useState(() => {
		const storedCartItems = sessionStorage.getItem('wishItems');
		return storedCartItems ? JSON.parse(storedCartItems) : [];
	  });
	const handleHeart = (e, item) => {
		console.log(item);
		let updatedWish = []
		const check = wishItems.find((wishItem) => item._id === wishItem._id);
		if(check){
			toast.error('product exist in wish list');
			updatedWish = [...wishItems]
		} else {
			updatedWish = [...wishItems, item];
			toast.success('product added in wish list')
		}
		// const {setNumOfProductInWish} = useNumOfProductInWish()

		// setNumOfProductInWish( updatedWish.length);
		setWishItems(updatedWish);
		sessionStorage.setItem('wishItems', JSON.stringify(updatedWish));
	}
	


	return {handleHeart}
 }

 export default useAddItemToWishlist