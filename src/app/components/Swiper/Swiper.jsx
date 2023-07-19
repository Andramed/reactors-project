import { useEffect, useRef, useState} from 'react';
import { register } from 'swiper/element/bundle';

register();

export default function Swiper(props) {
 
  const swiperRef = useRef(null);
  const { tabel, ...rest } = props;

  const swiperArray = (tabel !== undefined) ?
  tabel.map((brand,index) => {   
         return <swiper-slide key={index}>
                  <div className='flex flex-col justify-center text-sm px-3 py-2'>
                    <img src={brand.url} />
                    <div className=''>{brand.brand}{brand.model}</div>
                    <div className='flex justify-between px-8'>
                      <p className='flex space-between'>{brand.price} lei</p>
                      <button className='bg-yellow-300 px-1 py-1 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </swiper-slide> ;}) : [] ;

  useEffect(() => {
    const params = { ...rest };
    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);


  return ( 
  	<div className='w-3/4'>
	    <swiper-container 
	    init="false" 
	    autoplay = "true"
	    loop = "true"
	  
	    navigation={{
	      prevEl: ".swiper-button-prev",
	      nextEl: ".swiper-button-next",
	    }}
	    style={{
	      "--swiper-navigation-color": "#974619",
	      "--swiper-navigation-size": "10px"
	    }}  
	    
	    ref={swiperRef}>
	      {swiperArray}
	    </swiper-container>
    	</div>
  );     
}    
