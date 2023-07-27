'use client'
import React, {useEffect, useState } from 'react';
import useGetAllBrands from 'src/app/hooks/useGetAllBrands.js';
import Products from './Products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useSWR from 'swr';
import { useNumOfProductInCart } from '../context/NumberOfProductInCartContext';

// const data_sort =
// data.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.first_name > b.first_name) ? 1 : -1) : -1 );

const Page = () => {
  const [count, setCount ] = useState(8);

  const handleChangeBrand = () => {};
  const brands = useGetAllBrands();
    return (
        <div className='pb-8 w-full flex justify-center items-center flex-col bg-white'>
            {/* <div className='w-full pl-36 py-3 bg-gray-500 text-white font-bold text-xs'>
              BreadCrumbs - if possible
            </div> */}
            <div className='w-full  xxs:pl-4 lg:pl-36 md:pl-36 sm:pl-16 pt-12 pb-6 font-bold bg-gray-300'>
              Products
            </div>
            <div className='w-full lg:pl-36 lg:pr-24 md:pl-36 md:pr-24 sm:px-16 pt-12 flex item-start text-base '>
                <div className='xxs:pl-2 pr-2 w-1/4 font-medium flex flex-col gap-3'>
                  <p>Filters: </p>
                  <div className='flex flex-col text-xs gap-1'>
                    <p>Brands</p>
                    {brands.map((brand,index) => (
                      <label key={index}><input
                        type="radio"
                        name="allBrands"
                        label={brand}
                        onChange={handleChangeBrand}
                      /> {brand}</label>
                    ))}                    
                  </div>
                </div>

                <div className=' flex-col w-3/4'>
                  {/* <div className='flex justify-between'>
                    <div>{(list != undefined) ? '' : 'loading '}items...</div>
                    <div className=''>
                      <div className='inline mr-2'>sort by Price: </div>
                      <select name="price_sort" id="price_sort">
                        <option value="">--choose an option--</option>
                        <option value="low">from the Lowest</option>
                        <option value="high">from the Highest</option>
                      </select>    
                    </div>
                  </div>   */}
                  <div className='py-2 flex justify-start flex-wrap gap-3'>
                    <Products limit={count}/>
                    <div style={{ display: 'none' }}><Products limit={count + 4}/></div>
                  </div>
                  <footer>

                    <div className='pt-8'>
                      <button className='bg-btn-color w-9.5 h-3.2 px-8 py-2 text-sm rounded ' onClick={() => setCount(count + 4)}>
                        more products...
                      </button>
                    </div>
                  </footer>
                </div>
		    </div>
			
			
			<ToastContainer
				position="top-right"
				autoClose={900}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover='false'
				theme="light"
			/>
        </div>
    )
}
export default Page;