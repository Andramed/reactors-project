'use client'
import React, {useState, useMemo, useEffect } from 'react';
// import Pagination from 'src/app/components/Pagination';
import 'src/app/components/Pagination/pagination.scss';

import useGetAllBrands from 'src/app/hooks/useGetAllBrands.js';
import { useGetAllProducts } from 'src/app/hooks/useGetAllProducts';
import { useProductContext } from '../hooks/useContext';


// let PageSize = 20;

// const data_sort =
// data.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.first_name > b.first_name) ? 1 : -1) : -1 );

const Page = () => {
  const brands = useGetAllBrands();
  const phones =  useGetAllProducts();

  const { cartItem, setCartItem } = useProductContext();

  const handleOnClickCart = () => {
    setCartItem('qwerty');
  }
  
  console.log(cartItem + 'from page Product');
  const list = phones.Phones;

    // const [sortType, setSortType] = useState('');
    // const [currentPage, setCurrentPage] = useState(1);
    // const currentTableData = useMemo(() => {
    //   const firstPageIndex = (currentPage - 1) * PageSize;
    //   const lastPageIndex = firstPageIndex + PageSize;
    //   return (list != undefined)? list.slice(firstPageIndex, lastPageIndex): null;
    // }, [currentPage]);


    const handleChangeBrand = () => {

    }

    return (
        <div className='w-full flex justify-center items-center flex-col bg-white'>
            <div className='w-full pl-36 py-3 bg-gray-500 text-white font-bold text-xs'>
              BreadCrumbs - if possible
            </div>
            <div className='w-full  xxs:pl-4 lg:pl-36 md:pl-36 sm:pl-16 pt-12 pb-6 font-bold bg-gray-300'>
              Products
            </div>
            <div className='w-full lg:pl-36 lg:pr-24 md:pl-36 md:pr-24 sm:px-16 pt-12 flex item-start text-base '>
                <div className='xxs:pl-2 pr-2 w-1/4 font-medium flex flex-col gap-3'>
                  <p>Filters: </p>
                  <div className='flex flex-col text-xs gap-1'>
                    <p>Brands</p>
                    {brands.map((brand) => (
                      <label><input
                        type="checkbox"
                        key={brand}
                        label={brand}
                        onChange={handleChangeBrand}
                      /> {brand}</label>
                    ))}                    
                  </div>
                  <div className='flex flex-col text-xs gap-1'>
                    <p>Colors</p>
                    <label><input type="checkbox" /> black</label>
                    <label><input type="checkbox" /> blue</label>
                    <label><input type="checkbox" /> pink</label>
                    <label><input type="checkbox" /> red</label>
                    <label><input type="checkbox" /> white</label>
                  </div>
                </div>

                <div className='w-full flex-col w-3/4'>
                  <div className='flex justify-between'>
                    <div>{(list != undefined) ? list.length : 'calculating number of'} items</div>
                    <div className=''>
                      <div className='inline mr-2'>sort by Price: </div>
                      <select name="price_sort" id="price_sort">
                        <option value="">--choose an option--</option>
                        <option value="low">from the Lowest</option>
                        <option value="high">from the Highest</option>
                      </select>    
                    </div>
                  </div>  
                  <div className='py-8 flex justify-start flex-wrap gap-3'>
                  { (list != null) ?
                    list.map(item => {
                      return (
                          <div className='border  hover:bg-white hover:border-yellow-300 odd:bg-green-100 drop-shadow-[0.1rem_0.1rem_0.12rem_rgba(0,0,0,0.25)] rounded-[0.75rem] flex flex-col lg:w-48 lg:h-68 md:w-32 md:h-42 sm:w-32 sm:h-42 xxs:w-32 xxs:h-42 gap-1 bg-yellow-100 p-2' key={item._id}>
                              <div className=' flex justify-center'>
                                <img className='w-40 hover:w-50' src={item.url}/>
                              </div>
                              <div className='flex justify-center'>
                                {item.brand}
                              </div>
                              <div className='flex justify-center'>
                                <button className='rounded-[0.5rem] hover:bg-yellow-300 border-yellow-300 border m-1 px-3 py-2 text-xs' onClick={handleOnClickCart}>Add to Cart</button>
                              </div>
                          </div> );
                      })  : null
                    } 
                      
                  </div>
                  {/* <div className='flex justify-center'>
                    {(list != undefined) ? (
                    <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={list.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}/>  ) : null }
                  </div> */}
                </div>
		    </div>
        </div>
    )
}
export default Page;