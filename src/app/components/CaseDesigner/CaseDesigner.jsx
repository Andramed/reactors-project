import { useEffect, useState } from 'react';
import Swiper from 'src/app/components/Swiper';

export default function CaseDesigner() {

    const brands = [
    { brand: 'Nokia', Nokia: [{"model": '123'},{"model": '789'},{"model": '963'},
    {"model": '1234'},{"model": '7894'},{"model": '9634'}, {"model": '1235'},{"model": '7895'},{"model": '9635'}]}, 

    { brand: 'Samsung', Samsung: [{"model": '452'},{"model": '453'},{"model": '454'},{"model": '455'},
    {"model": '456'},{"model": '457'},{"model": '458'},{"model": '459'}, {"model": '123'},{"model": '789'},{"model": '963'}]},
  
    { brand: 'Xiaomi',
        Xiaomi: [
      {'model':'123',
       'img':'https://darwin.md/images/product/thumbs/2022/06/husa-pentru-smartphone-xiaomi-redmi-10c-frosted-shield-peacock-blue-07.webp'
      },
      {'model':'234',
       'img':'https://darwin.md/images/product/thumbs/2022/01/husa-pentru-smartphone-apple-iphone-13-pro-neon-x-luxo-multicolor-089.webp'  
      },
      {'model':'345',
       'img':'https://darwin.md/images/product/thumbs/2022/12/darwin-husa-pentru-smartphone-apple-iphone-12-mini-aoge-brown-053.webp'  
      },
      {'model':'456',
       'img':'https://darwin.md/images/product/thumbs/2022/08/husa-pentru-smartphone-samsung-galaxy-s10-crvdgs10105-black-red-058.webp'  
      },
      {'model':'567',
       'img':'https://darwin.md/images/product/thumbs/2022/12/husa-pentru-smartphone-xiaomi-redmi-note-7-nature-transparent-white-095.webp'  
      },
      {'model':'678',
       'img':'https://darwin.md/images/product/thumbs/2022/04/husa-pentru-smartphone-apple-iphone-xs-max-brilliance-multicolor-black-04.webp'  
      },
    ]}];

    // const [tabel, setTabel] =  useState(brands[2].Xiaomi);
    const tabel = brands[2].Xiaomi;
    // useEffect(()=>{
    //     setTabel(brands[2].Xiaomi);
    // },[]);


    return ( 
    <div className='w-full py-14 px-16 flex justify-center items-center flex-col gap-5 bg-white'>
        <h2 className='flex justify-center font-bold'>Case Designer</h2>
        <Swiper tabel={tabel}
            slidesPerView={3}
            breakpoints={{ 768: {slidesPerView: 3 },
                           500: {slidesPerView: 2 },   
                           280: {slidesPerView: 1 },
                             0: {slidesPerView: 1 }}}></Swiper>
        <div>
            <button className='bg-[#FFFFFF] px-8 py-2 text-xs border-gray-900 border'>See all Products</button>
        </div>
    </div>);
}