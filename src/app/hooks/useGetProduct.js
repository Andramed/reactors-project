
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useGetProduct =  () => {
	const router = useRouter()
	const [item, setItem] = useState();
	const getProduct = (product) => {
		setItem(product)
	}
	useEffect(() => {		
			localStorage.setItem('item', JSON.stringify(item))
	}, [item])

	useEffect(() => {
		if(item){
			router.push('/product');
		}
	})
	return {getProduct, item}
	
}

export default useGetProduct