import { createContext, useContext, useState } from 'react';


export const CartNumContext = createContext();

export function CartNumProvider (props) {
	const {children} = props;
	
	const [numOfProductInCart, setNumOfProductInCart] =useState(0);
	return(
		<CartNumContext.Provider value={{numOfProductInCart, setNumOfProductInCart}}>
			{children}
		</CartNumContext.Provider>
	)
}
export function useNumOfProductInCart () {
	const numProductContext = useContext(CartNumContext);
	
	if (numProductContext === undefined) {
		throw Error('useNumOfProduct should be used in User Provider')
	}
	return numProductContext
}