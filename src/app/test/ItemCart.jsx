import React, { useRef } from 'react'
import { useAddItemToCart } from '../hooks/useAddItemToCart';


export const ItemCart = (props) => {
	
	const {product,  getProduct, onClick} = props;
	
	
	const parentRef = useRef(0);
  return (
	<>
	
		<div className=' flex justify-center m-10'>
				<div onClick={() => getProduct(product)} id={product._id}  ref={parentRef} className=' w-[500px] h-10 bg-red-100 rounded-sm  flex flex-col items-center justify-center p-24' >
					{product.type} 
					{product.brand}
					<h4>{product.model}</h4>
				</div>
				<button onClick={()=>onClick(parentRef.current)} >add to cart</button>
		</div> 
	</>
  )
}
