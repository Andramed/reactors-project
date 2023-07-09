import { useEffect, useState, useRef} from 'react';
import { register } from 'swiper/element/bundle';

register();

export default function Swiper(props) {

  const swiperRef = useRef(null);
  const {
    tabel,
    ...rest
  } = props;

  const swiperArray =
  tabel.map((brand) => {   
         return <swiper-slide key={brand.model}>
                  <img src={brand.img} />
                  <p>{brand.model}</p>
                </swiper-slide> ;});


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
