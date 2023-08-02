
import { createContext, useContext, useState } from 'react';


export const WishNumContext = createContext();

export function WishNumProvider (props) {
	const {children} = props;
	
	const [numOfProductInWish, setNumOfProductInWish] =useState(0);
	return(
		<WishNumContext.Provider value={{numOfProductInWish, setNumOfProductInWish}}>
			{children}
		</WishNumContext.Provider>
	)
}
export function useNumOfProductInWish () {
	const numProductContext = useContext(WishNumContext);
	
	if (numProductContext === undefined) {
		throw Error('useNumOfProduct should be used in User Provider')
	}
	return numProductContext
}