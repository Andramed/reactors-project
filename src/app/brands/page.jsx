'use client'
// import React, { useState, useRef } from 'react';

import axios from 'axios';
import useSWR from 'swr';

const Page = () => {

  const brands = [];
  {
    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const { data, error } = useSWR(`/api/getBrandsCollection`, fetcher);     

    (data)? data.forEach((item)=>{brands.push(item)}): null;
  }
      

    return (
        <div className='pb-8 w-full flex justify-center items-center flex-col bg-white'>
            <div className='w-full h-12 pl-36 pt-2 bg-[#F9F6F2]'>Brands</div>
            <div className='flex gap-5 flex-wrap py-8'>
            {(brands)? 
                brands.map((brand, index)=>{ 
             return <div key={index} className='w-48 border rounded flex items-center px-8 py-4'>
                       <img className='object-cover' src={brand.imageUrl}/> 
                    </div>
                }) : 
                <p>Loading...</p>}
            </div>
        </div>
    )
}
export default Page;