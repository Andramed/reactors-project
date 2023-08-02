'use client'
import React, { useEffect, useState } from 'react'
import { toast,  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ItemCart } from './components/ItemCart';


import useSWR from 'swr'
import axios from 'axios';
import { useNumOfProductInCart } from '../context/NumberOfProductInCartContext';
import { useAddItemToCart } from '../hooks/useAddItemToCart';
import PaymentFormModal from './components/PaymentFormModal';

import useAddToSessionStorage from '../hooks/useAddToSessionStorage';

import EmptyCart from './components/EmptyCart';

const fetcher = async (url) => await axios.get(url).then((res)=> res.data)

export default function Page() {
	const data = sessionStorage.getItem('cartItems')
	const [showPayForm, setShowPayForm] = useState(false);
	let product = JSON.parse(data)

	const openPayForm = () => {
		setShowPayForm(true)
		console.log('am facut click');
	}
	const paymentProcess = () => {
		toast.success('Payment went through successfully ')
	}
		
	const {numOfProductInCart, setNumOfProductInCart} = useNumOfProductInCart() 
		useEffect(() => {
			product ? setNumOfProductInCart(product.length) : product = []
			
		}, [data])
	const [promocod, setPromocod] = useState(false);
	const addPromocod = () => {
		if (!promocod) {
			setPromocod(true);
		} else {
			setPromocod(false);
		}
	}
	   const  {removeItemFromCart} = useAddToSessionStorage();
	 useEffect(() => {
		console.log(product);
	 }, [])
		return(
		<>  
		<div className='w-full h-12 pl-36 pt-2 mb-5 bg-[#F9F6F2]'>Cart</div>
		
		{
			
			numOfProductInCart === 0 ? ( 
				<div className=' flex justify-center p-10'>
					<EmptyCart/>
				</div>	
			):data ? (
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
							removeItemFromCart={removeItemFromCart}
							// deleteProductFromCart={deleteProductFromCart}						
							/>
					}): <h1>loading</h1>}
				</div>
				<div className='w-[30%] bg-slate-50 p-5  items-center flex flex-col'>
					
						<div className=' w-full p-2 bg-white'>
						<ul className='flex w-full justify-between'>
								<li>Total order to buy:</li>
								<li>{numOfProductInCart}</li> 
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
								<button onClick={openPayForm} className="bg-btn-color w-full p-2 my-3">Continue to payment</button>
								<PaymentFormModal
									isOpen={showPayForm}
									onClose={() => setShowPayForm(false)}
									onSubmit={paymentProcess}
								/>
								<ToastContainer />
						</div>
	
					
					<div className='w-full p-5'>
						<h4 className=' text-justify'>Order now and get your products</h4>
						<h4>Order will be estimative in <span className=' text-red-500'>14</span> day</h4>
						<span className=' text-slate-700 text-sm'>maximum in 20 Day</span>
					</div>
					<div className=" flex flex-col gap-2 bg-white rounded-md p-5 "> 
						<h5>Pay With: </h5>
						< div className=" flex gap-2 flex-wrap justify-center">
							<div className=' hover:bg-slate-200 p-3 flex justify-center items-center'><img className='h-10 ' src="/imgFooter/PayPal.svg" alt="paypal" /></div>
							<div className='hover:bg-slate-200 p-3 flex justify-center items-center'> <img className='h-10' src="/imgFooter/GooglePay.svg" alt="gpay" /></div>
							<div className='hover:bg-slate-200 p-3 flex justify-center items-center'><img className='h-10' src="/imgFooter/Amex.svg" alt="amex" /></div>
							<div className='hover:bg-slate-200 p-3 flex justify-center items-center'><img  className='h-10' src="/imgFooter/Bancontact.svg" alt="bnc" /></div>
							<div className='hover:bg-slate-200 p-3 flex justify-center items-center'><img className='h-10' src="/imgFooter/Maestro.svg" alt="maestro" /></div>
							<div className='hover:bg-slate-200 p-3 flex justify-center items-center'><img className='h-10'  src="/imgFooter/Visa.svg" alt="visa" /></div>
							<div className='hover:bg-slate-200 p-3 flex justify-center items-center'><img className='h-10' src="/imgFooter/Mastercard.svg" alt="masterCars" /></div>
						</div>
					   </div>
				</div>
			</div>
			): (<h1>loading</h1>)}
			
			
			<ToastContainer/>
		</>
	)


	
}
