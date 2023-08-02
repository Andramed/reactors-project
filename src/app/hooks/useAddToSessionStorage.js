import { useEffect, useState } from 'react'
import { useNumOfProductInCart } from '../context/NumberOfProductInCartContext';
import { toast } from 'react-toastify';



const useAddToSessionStorage = () => {
	const [cartItems, setCartItems] = useState(() => {
		const storedCartItems = sessionStorage.getItem('cartItems');
		return storedCartItems ? JSON.parse(storedCartItems) : [];
	  });
	// const [numProduct, setNumProduct] = useState(0);
		
	const {setNumOfProductInCart} = useNumOfProductInCart()
		
		
	const addItemToSessionStorage = (item) => {
		let updatedCart = []
		const check = cartItems.find((cartItem) => item._id === cartItem._id);
		if(check){
			toast.error('product exist in cart');
			updatedCart = [...cartItems]
		} else {
			updatedCart = [...cartItems, item];
			toast.success('product added in cart')
		}
		setNumOfProductInCart( updatedCart.length);
		setCartItems(updatedCart);
		sessionStorage.setItem('cartItems', JSON.stringify(updatedCart));
		//inainte de al adauga verifica daca item prezent este prezent aici
		// daca este itemul sa returneze inapoi un raspuuns ca acesta n poate fi adaugat
		//daca itemul nu exista sa il adauge in cart
		// dupa adugare sa returneze numarul de produse curente in cart
		// le adauga intrun array cu obicte
	}

	const removeItemFromCart = (id, e) => {
		const filteredArr = cartItems.filter((cartItem) => cartItem._id !== id);
		setNumOfProductInCart(filteredArr.length)
		sessionStorage.setItem('cartItems', JSON.stringify(filteredArr));
		setCartItems(filteredArr)
		// Verificăm dacă elementul a fost eliminat din coș
		const itemWasRemoved = filteredArr.find((filteredItem) => filteredItem._id === id);
		
		console.log(itemWasRemoved);
		if (itemWasRemoved) {
			toast.error('Item not deleted, please try again');
		} else {
			toast.success('Product deleted from cart');
		}
	  }
	  

	
	return {addItemToSessionStorage, removeItemFromCart}
}



export default useAddToSessionStorage