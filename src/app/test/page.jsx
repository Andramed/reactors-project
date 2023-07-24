'use client'



import { useGetAllProducts } from '../hooks/useGetAllProducts';
import { ItemCart } from '../cart/components/ItemCart';
import useGetProduct from '../hooks/useGetProduct';


export default function Page() {
	
	
	const products = useGetAllProducts()
	const {getProduct, item} = useGetProduct()
		
	console.log(item);
	return (
		<>
			<div className='grid grid-cols-3  grid-rows-4'>
			{ (products)?
				products.map((product) =>  <ItemCart getProduct={getProduct}  key={product._id} product={product} />)
				: <div>loading</div>
			}
			</div>
		</>
	  )
 }
 

