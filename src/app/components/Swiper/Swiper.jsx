import { useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';

export default function Swiper({tabel}) {
    useEffect(() => {
        register();
      },[]);

      const swiperArray =
      tabel.map((brand) => {   
             return <swiper-slide key={brand.model}>
                      <img src={brand.img} />
                      <p>{brand.model}</p>
                    </swiper-slide> ;})
      
  
      return (<div style={{background: '#F9F6F2', width: '500px'}}>
      <swiper-container 
        slides-per-view="3" 
        loopedSlidesLimit="false"
        speed="500" 
        loop="true" 
        autoPlay="true" 
        spaceBetween="100"
        centered-slides="true"
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        style={{
          "--swiper-navigation-color": "#974619",
          "--swiper-navigation-size": "10px"
        }}
      >
        {swiperArray}
        </swiper-container>
        </div>
      );
      
}    