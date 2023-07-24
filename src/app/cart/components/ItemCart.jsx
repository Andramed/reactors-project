import React, { useEffect, useRef } from 'react'
import { useAddItemToCart } from '../../hooks/useAddItemToCart';
import Image from 'next/image';
import useSetPrice from '@/app/hooks/useSetPrice';


export const ItemCart = (props) => {
 
	const {product} = props;
	const {state, handleCounter, handleMemory, handleRam, dispatch} = useSetPrice(product)
	useEffect(() => {
		dispatch({type:'price', value:product.price})
	}, [product])
	const parentRef = useRef(0);
	const {price, selectedMemory, selectedRam, counter} = state;
	
  return (
	<>
		<div id={product._id}  ref={parentRef} className=' mb-4 justify-between bg-slate-100 rounded-1xl flex  items-center ' >
			
			<div className=' px-4 py-3 flex flex-col justify-center w-[61%]'>
				
				<div className='flex items-center gap-3'>
					<div className='flex w-40 h-40 bg-white p-4 rounded-1xl '>
						<img className=' w-full  h-auto' src={Object.entries(product.color_image)[0][1][0]} alt="phone photo" />
					</div>
					<div className=' flex flex-col justify-between'>
						<h4>{product.brand} <span className='text-sm text-black font-semibold'>{product.model}</span></h4>
						<div>
							<h4> Select intern memory:</h4>
							<div className=' flex gap-2 '>
								{product.memory.map((memory, index) => {
									return (
										<button id= {index} value={memory} onClick={(e) => handleMemory(e)}  className={`${selectedMemory === memory ? 'bg-slate-300' : 'bg-slate-200'} bg-slate-200 px-3 py-1 text-xs rounded-2xl hover:bg-yellow-100 transition duration-500`} key={memory}>{memory}</button>
									)
								})}
							</div>
							<h4>Select ram</h4>
							<div className=' flex gap-2'>
								{product.ram.map((ram, index) => {
									return (
										<button value={ram} id={index} onClick={(e) => handleRam(e)} className={`${selectedRam === ram ? 'bg-slate-300': 'bg-slate-200'} bg-slate-200 px-3 py-1 text-xs rounded-2xl hover:bg-yellow-100 transition duration-500`} key={ram}>{ram}</button>
									)
								})}
							</div>
							<h4>Select color</h4>
							<div className='flex w-full gap-4 px-10'>
								{ 
									Object.entries(product.color_image).map((element, index) => {
										return <div key={index} className={` bg-[${element[0]}] h-6 w-6 rounded`}></div>
									})
								}
							</div>
						</div>
					</div>
					
				</div>
			</div>

			<div className='flex w-[39%] flex-col  space-y-10  h-auto'>
				<div className=' flex justify-around '>
					<div>
						<span> {product.price} lei</span>
					</div>

					<div>
						<div className='flex gap-4'>
							<button data-value={'-'} onClick={(e) => handleCounter(e)}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-green-300">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</button>
							<p><span>{counter}</span></p>
							<button data-value={'+'} onClick={(e) => handleCounter(e)}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-green-300">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</button>
						</div>
					</div>

					<div>
						<h3>{price} lei</h3>
					
					</div>
				</div>
				<div className=' w-auto flex justify-around'>
					<button className=' flex gap-3'>
						add to wihslist
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-red-500">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
						</svg>
					</button>
					<button className=' flex gap-3'>
						delete
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-red-400">
							<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
						</svg>

					</button>
				</div>
			</div>
			
		</div>
	</>
  )
}
