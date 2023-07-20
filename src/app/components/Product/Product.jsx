'use client'
import React, { useRef } from 'react'
// import { useAddItemToCart } from '../hooks/useAddItemToCart';

export default function Product({item}) {
  // const {getIdItem, item} = useAddItemToCart();
  const parentRef = useRef(0);
  
  let imageUrl = '';
  for (const [key, value] of Object.entries(item.color_image)) {
    imageUrl = value[0];
    break;
  }

  return ( <>
    {/* <div className=' flex justify-center m-10'>
        <div ref={parentRef} className=' w-[500px] h-10 bg-red-100 rounded-sm  flex flex-col items-center justify-center p-24' id='64ad3ab32d26c5b877875dd3'>
            {item? item : 'loading'}
            <button  onClick={()=>getIdItem(parentRef.current)} className=' p-3 bg-red-200 rounded-3xl'>add to cart</button>
        </div>
    </div> */}
  
    <div id={item._id} ref={parentRef} className='border hover:border-yellow-300 drop-shadow-[0rem_0.1rem_0rem_rgba(0,0,0,0.25)] rounded-[0.75rem] flex flex-col gap-1 p-2'>
        <div className=' flex justify-center'>
          <img className='w-40 hover:w-50' src={imageUrl}/>
        </div>
        <div className='flex flex-col content-end gap-3'>
          <div className='flex justify-center text-xs'>
            {item.brand}{item.model}
          </div>
          <div className='flex justify-evenly px-5 text-sm'>
            <div>{item.price} lei </div>
            <button className='bg-btn-color px-1 py-1 rounded-[0.5rem]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[20px] h-[20px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </button>
          </div>
        </div>
    </div>


  </>)
}
