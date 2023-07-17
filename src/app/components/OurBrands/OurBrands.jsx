import { useState, useEffect } from 'react';
import Swiper from 'src/app/components/Swiper';
import useGetAllBrands from 'src/app/hooks/useGetAllBrands.js';
import useGetByBrand from 'src/app/hooks/useGetByBrand';

export default function OurBrands() {

    const brandsss = useGetAllBrands();

    const { products, handleClickBrand } = useGetByBrand();

    const [tabel, setTabel] = useState();
    const [brand, setBrand] = useState(brandsss[0]);

    const onClickHandle = (event) => {
        // const found = brandsss.find(element => element.brand == event.target.innerHTML);
        handleClickBrand(event.target.innerHTML);
        setBrand(event.target.innerHTML);
        setTabel(products.collectionData);
    }

    useEffect(() => {
    }, [products]);

    return ( 
    <div className='w-full py-14 px-16 flex justify-center items-center flex-col gap-5 bg-white'>
        <h2 className='flex justify-center font-bold'>Discover our Brands</h2>
        <div className='flex text-xs gap-2 justify-center underline'>
          {brandsss.map((brand)=>{
            return (<div className='cursor-pointer' value={brand} onClick={onClickHandle}>{brand}</div>);
          })}
        </div>
     	    
           {
            <Swiper tabel={tabel}
            slidesPerView={3}
            breakpoints={{ 768: {slidesPerView: 3 },
                           500: {slidesPerView: 2 },   
                           280: {slidesPerView: 1 },
                             0: {slidesPerView: 1 }}}></Swiper>            
            
           }
            {/*
            {(brand === 'Samsung')? setTabel(products.collectionData);
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
            : null} */
          }
    </div>);
}
