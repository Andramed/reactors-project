import { useState } from 'react';
import Swiper from 'src/app/components/Swiper';

export default function OurBrands() {
    const brands = [
    { brand: 'Nokia', Nokia: [{"model": '123'},{"model": '789'},{"model": '963'},
    {"model": '1234',
    'img':'https://darwin.md/images/product/2022/08/darwin-xiaomi-redmi-note-11-pro-6-gb-128-gb-gray-076.webp'},
     {"model": '7894'},{"model": '9634'}, {"model": '1235'},{"model": '7895'},{"model": '9635'}]}, 

    { brand: 'Samsung', Samsung: [{"model": '452'},{"model": '453'},{"model": '454'},{"model": '455'},
    {"model": '456', 
    'img':'https://darwin.md/images/product/2022/08/darwin-xiaomi-redmi-note-11-pro-6-gb-128-gb-gray-076.webp'},
    {"model": '457'},{"model": '458'},{"model": '459'}, {"model": '123'},{"model": '789'},{"model": '963'}]},
  
    { brand: 'Xiaomi',
        Xiaomi: [
      {'model':'123',
       'img':'https://darwin.md/images/product/2022/08/darwin-xiaomi-redmi-note-11-pro-6-gb-128-gb-gray-076.webp'
      },
      {'model':'234',
       'img':'https://darwin.md/images/product/2022/12/darwin-samsung-galaxy-a03-core-2-gb-32-gb-black-028.webp'  
      },
      {'model':'345',
       'img':'https://darwin.md/images/product/2022/08/darwin-xiaomi-redmi-10c-4-gb-128-gb-ocean-blue-041.webp'  
      },
      {'model':'456',
       'img':'https://darwin.md/images/product/2022/08/darwin-xiaomi-redmi-note-11-pro-6-gb-128-gb-star-blue-01.webp'  
      },
      {'model':'567',
       'img':'https://darwin.md/images/product/2022/08/darwin-xiaomi-redmi-note-11-pro-6-gb-128-gb-white-029.webp'  
      },
      {'model':'678',
       'img':'https://darwin.md/images/product/2022/08/darwin-xiaomi-redmi-note-11-pro-6-gb-128-gb-star-blue-01.webp'  
      },
      {'model':'9321',
       'img':'https://darwin.md/images/product/thumbs/2023/05/darwin-xiaomi-redmi-12c-64-gb-ocean-purple-253270.webp'
      }
    ]}];


    const [tabel, setTabel] = useState(brands[2].Xiaomi);
    const [brand, setBrand] = useState('Xiaomi');

    const onClickHandle = (event) => {

        const found = brands.find(element => element.brand == event.target.innerHTML);

        setTabel(found[event.target.innerHTML]);
        setBrand(event.target.innerHTML);
    }

    return ( 
    <div className='w-full py-14 px-16 flex justify-center items-center flex-col gap-5 bg-white'>
        <h2 className='flex justify-center font-bold'>Discover our Brands</h2>
        <div className='flex text-xs gap-2 justify-center underline'>
            <div className='cursor-pointer' onClick={onClickHandle}>Nokia</div>
            <div className='cursor-pointer' onClick={onClickHandle}>Samsung</div>
            <div className='cursor-pointer' onClick={onClickHandle}>Xiaomi</div>
        </div>
     	    {(brand === 'Nokia')? 
            <Swiper tabel={tabel}
            slidesPerView={3}
            breakpoints={{ 768: {slidesPerView: 3 },
                           500: {slidesPerView: 2 },   
                           280: {slidesPerView: 1 },
                             0: {slidesPerView: 1 }}}></Swiper>            
            : null}

            {(brand === 'Samsung')? 
            <Swiper tabel={tabel}
            slidesPerView={3}
            breakpoints={{ 768: {slidesPerView: 3 },
                           500: {slidesPerView: 2 },   
                           280: {slidesPerView: 1 },
                             0: {slidesPerView: 1 }}}></Swiper>
            : null}

            {(brand === 'Xiaomi')? 
            <Swiper tabel={tabel}
            slidesPerView={3}
            breakpoints={{ 768: {slidesPerView: 3 },
                           500: {slidesPerView: 2 },   
                           280: {slidesPerView: 1 },
                             0: {slidesPerView: 1 }}}></Swiper>
            : null}
    </div>);
}
