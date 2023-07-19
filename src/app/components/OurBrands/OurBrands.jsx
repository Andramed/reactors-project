import { useState, useEffect } from 'react';
import Swiper from 'src/app/components/Swiper';
import useGetAllBrands from 'src/app/hooks/useGetAllBrands.js';
import useGetByBrand from 'src/app/hooks/useGetByBrand';

export default function OurBrands() {

    const brandsss = useGetAllBrands();

    const { products, handleClickBrand } = useGetByBrand();

    const [tabel, setTabel] = useState();
    const [brand, setBrand] = useState('Nokia'); //or the first from brandsss - but it is slow

    const onClickHandle = (event) => {
        handleClickBrand(event.target.innerHTML);
        setBrand(event.target.innerHTML);
    }

    useEffect(() => {
      handleClickBrand(brand);
    }, []);

    useEffect(() => {
      setTabel(products.collectionData);
    }, [products, brand]);
     
    return ( 
    <div className='w-full py-14 px-16 flex justify-center items-center flex-col gap-5 bg-white'>
        <h2 className='flex justify-center font-bold'>Discover our Brands</h2>
        <div className='flex text-xs gap-2 justify-center underline'>
          {brandsss.map((brand)=>{
            return (<div key={brand} className='cursor-pointer' value={brand} onClick={onClickHandle}>{brand}</div>);
          })}
        </div>
     	     
        <Swiper 
        key={brand}
        tabel={tabel}
        slidesPerView={3}
        breakpoints={{ 768: {slidesPerView: 3 },
                       640: {slidesPerView: 2 }, 
                       425: {slidesPerView: 2 },   
                       281: {slidesPerView: 1 },
                         0: {slidesPerView: 1 }}}></Swiper> 

    </div>);
}
