import { useEffect, useState, useRef} from 'react';
import { register } from 'swiper/element/bundle';

register();

export default function Swiper(props) {

  const swiperRef = useRef(null);
  const {
    tabel,
    ...rest
  } = props;

  const swiperArray = (tabel !== undefined) ?
  tabel.map((brand) => {   
         return <swiper-slide key={brand._id}>
                  <div className='flex flex-col justify-center text-sm'>
                  <img src={brand.url} />
                  <p className='flex justify-center'>{brand.brand}{brand.model}</p>
                  <button>Add +</button>
                  </div>
                </swiper-slide> ;}) : [] ;


  useEffect(() => {
    const params = {     
      ...rest
    };
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
