
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useGetProduct =  () => {
	const router = useRouter()
	const [item, setItem] = useState();
	const getProduct = (product) => {
		setItem(product)
	}
	useEffect(() => {	
			console.log('sa executat');	
			sessionStorage.setItem('item', JSON.stringify(item))
			
	}, [item])

	useEffect(() => {
		if(item){
			router.push('/productPage');
		}
	})
	return {getProduct, item}
	
}

export default useGetProduct