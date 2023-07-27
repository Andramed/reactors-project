'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function Product({item}) {
  // const {getIdItem, item} = useAddItemToCart();
  const parentRef = useRef(0);
  const [imageUrl, setImageUrl] = useState('');
  const colorArray = useRef([]);
  let oneTime = 1;

  const handleClickImage = (e) => {
    const newUrl = item.color_image[e.target.id][0];
    setImageUrl(newUrl);
    
  }

  useEffect(()=>{
    colorArray.current = [];  

    for (const [key, value] of Object.entries(item.color_image)) {
      if (oneTime) {setImageUrl(value[0]); oneTime =0;}

      colorArray.current.push(key);
    }}
  ,[item]);

  return ( <>
     <div id={item._id} ref={parentRef} className='border hover:border-yellow-300 drop-shadow-[0rem_0.1rem_0rem_rgba(0,0,0,0.25)] rounded-[0.75rem] flex flex-col gap-1 p-2'>
        <div className=' flex justify-center'>
          <img className='w-40 hover:w-50' src={imageUrl}/>
        </div>
        <div className='flex flex-col content-end gap-3'>
          <div className='flex justify-center text-xs'>
            {item.brand} {item.model}
          </div>
          <div className='flex justify-center gap-2'>
            {
              colorArray.current.map((color,index)=>{ 
                return <div key={index} id={color} onClick={handleClickImage} style={{height: "1rem", width: "1rem", backgroundColor: color, borderRadius: "5rem", border: "1px solid grey"}}></div> })
            }
          </div>
          <div className='flex justify-evenly items-center px-5 text-sm'>
            <div>{item.price} lei </div>
            <div className='flex justify-between'>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-red-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
              <button className='bg-btn-color px-1 py-1 rounded-[0.5rem]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[20px] h-[20px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
    </div>


  </>);
}
