import { createContext, useState, useContext, useEffect } from 'react';

const CartItemContext = createContext();

export function useCart() {
	return useContext(CartItemContext);
}

 export const CartItemProvider = ({children}) => {
	const [numCartItem, setNumCartItem] = useState(0);
	
	

	return(
		<CartItemContext.Provider value={{
			numCartItem,
			setNumCartItem
		}}  > {children} </CartItemContext.Provider>
	)
	
}


