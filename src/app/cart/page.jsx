'use client'
import React, { useEffect, useState } from 'react'

import { ItemCart } from './components/ItemCart';
import PayWith from '../components/Footer/PayWith';

export default function Page() {
	const [promocod, setPromocod] = useState(false);
	const addPromocod = () => {
		if (!promocod) {
			setPromocod(true);
		} else {
			setPromocod(false);
		}
	}
	let [product, setProduct] = useState();
	useEffect(() => {
		const getLocalVar = () => {
			const item = localStorage.getItem('item');
			setProduct(JSON.parse(item));
		};
		getLocalVar()
	}, []);
		
	// const day = Math.floor(Math.random() * 20)

	return(
		<>
			<div className='flex justify-between px-20 gap-4 '>
				<div className=' w-[70%] flex flex-col'>
					<div className='flex'>
						<div className=' w-[61%]'>Products</div>
						<div className='flex w-[39%] justify-around h-auto mb-5'>
							<div>
								<h3>Price</h3>
							</div>

							<div>
								<h3>Quantity</h3>
							</div>

							<div>
								<h3>Total</h3>
							</div>

						</div>
					</div>
					{(product)? product.map((product) =>{
						return <ItemCart 
							key={product._id}  
							product= {product}						
							/>
					}): <h1>loading</h1>}
				</div>
				<div className='w-[30%] bg-slate-50 p-5  items-center flex flex-col'>
					
						<div className=' w-full p-2 bg-white'>
						<ul className='flex w-full justify-between'>
								<li>Total order to buy:</li>
								<li>3</li> 
							</ul>
							<ul className='flex w-full justify-between'>
								<li>Total price:</li>
								<li >total price</li>
							</ul>
							<ul className=''>
								<div className='flex gap-5 mt-5'>
									<li>
										Add a promocod
									</li>
									<li>
										<button onClick={addPromocod}>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
										</button>
									</li>
								</div>
								{promocod && (
											<div className=' w-full flex flex-col justify-center gap-2'>
												<input className='border rounded-lg w-full p-2'  type="text" />
												<button  className=' m-auto bg-btn-color p-1 text-xs'>check promo</button>
											</div>
											
									)}
									
							</ul>
							<button className=' bg-btn-color w-full p-2 my-3'>Continue to payment</button>
						</div>

					
					<div className='w-full p-5'>
						<h4 className=' text-justify'>Order now and get your products</h4>
						<h4>Order will be estimative in <span className=' text-red-500'>14</span> day</h4>
						<span className=' text-slate-700 text-sm'>maximum in 20 Day</span>
					</div>
					<div className=" flex flex-col gap-2 bg-white rounded-md p-5 "> 
						<h5>Pay With: </h5>
						< div className=" flex gap-2 flex-wrap justify-center">
							<div className=' hover:bg-slate-400 p-4 flex justify-center items-center'><img className='h-10 ' src="/imgFooter/PayPal.svg" alt="paypal" /></div>
							<div className='hover:bg-slate-400 p-4 flex justify-center items-center'> <img className='h-10' src="/imgFooter/GooglePay.svg" alt="gpay" /></div>
							<div className='hover:bg-slate-400 p-4 flex justify-center items-center'><img className='h-10' src="/imgFooter/Amex.svg" alt="amex" /></div>
							<div className='hover:bg-slate-400 p-4 flex justify-center items-center'><img  className='h-10' src="/imgFooter/Bancontact.svg" alt="bnc" /></div>
							<div className='hover:bg-slate-400 p-4 flex justify-center items-center'><img className='h-10' src="/imgFooter/Maestro.svg" alt="maestro" /></div>
							<div className='hover:bg-slate-400 p-4 flex justify-center items-center'><img className='h-10'  src="/imgFooter/Visa.svg" alt="visa" /></div>
							<div className='hover:bg-slate-400 p-4 flex justify-center items-center'><img className='h-10' src="/imgFooter/Mastercard.svg" alt="masterCars" /></div>
						</div>
      				 </div>
				</div>
			</div>
			<button className=' bg-red-500 p-10' onClick={()=>{
				localStorage.removeItem('item')
			}}>delete local item</button>
		</>
	)


	
}
