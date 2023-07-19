"use client"
import React, { useState, useMemo } from 'react';
import Pagination from 'src/app/components/Pagination';
import 'src/app/components/Pagination/pagination.scss';

let PageSize = 9;

const data = [
  {id: 1,
   first_name: 'Elena',
   last_name : 'Teaca',
   email     : 'ririteaca@gmail.com',
   phone     : '078053747',
   price     : 100
  },
   {id: 2,
    first_name: 'Elena2',
    last_name : 'Teaca2',
    email     : 'ririteaca@gmail.com',
    phone     : '078053747',
    price     : 150, 
  },
    {id: 3,
      first_name: 'Elena3',
      last_name : 'Teaca3',
      email     : 'ririteaca@gmail.com',
      phone     : '078053747',
      price     : 125
    },    
      {id: 4,
        first_name: 'Elena4',
        last_name : 'Teaca4',
        email     : 'ririteaca@gmail.com',
        phone     : '078053747',
        price     : 250  
      },      
        {id: 5,
          first_name: 'Elena5',
          last_name : 'Teaca5',
          email     : 'ririteaca@gmail.com',
          phone     : '078053747',
          price     : 100 
        },        
          {id: 6,
            first_name: 'Elena6',
            last_name : 'Teaca6',
            email     : 'ririteaca@gmail.com',
            phone     : '078053747',
            price     : 300
          },          
            {id: 7,
              first_name: 'Elena7',
              last_name : 'Teaca7',
              email     : 'ririteaca@gmail.com',
              phone     : '078053747',
              price     : 350
              },            
              {id: 8,
                first_name: 'Elena8',
                last_name : 'Teaca8',
                email     : 'ririteaca@gmail.com',
                phone     : '078053747',
                price     : 400
              },              
                {id: 9,
                  first_name: 'Elena9',
                  last_name : 'Teaca9',
                  email     : 'ririteaca@gmail.com',
                  phone     : '078053747',
                  price     : 270
                },                
                  {id: 10,
                    first_name: 'Elena10',
                    last_name : 'Teaca10',
                    email     : 'ririteaca@gmail.com',
                    phone     : '078053747',
                    price     : 90
                  },                  
];


const data_sort =
data.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.first_name > b.first_name) ? 1 : -1) : -1 );

const Page = () => {

    const [sortType, setSortType] = useState('');

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data_sort.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);


    return (
        <div className='w-full flex justify-center items-center flex-col bg-white'>
            <div className='w-full pl-36 py-3 bg-gray-500 text-white font-bold text-xs'>
              BreadCrumbs - if possible
            </div>
            <div className='w-full  xxs:pl-4 lg:pl-36 md:pl-36 sm:pl-16 pt-12 pb-6 font-bold bg-gray-300'>
              Products
            </div>
            <div className='w-full lg:px-36 md:px-36 sm:px-16 pt-12 flex item-start text-base '>
                <div className='xxs:pl-2 pr-2 w-1/4 font-medium flex flex-col gap-3'>
                  <p>Filters: </p>
                  <div className='flex flex-col text-xs gap-1'>
                    <p>Brands</p>
                    <label><input type="checkbox" /> Nokia</label>
                    <label><input type="checkbox" /> Samsung</label>
                    <label><input type="checkbox" /> Xiaomi</label>
                    <label><input type="checkbox" /> Philips</label>
                    <label><input type="checkbox" /> iPhone</label>
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

                <div className='w-full flex-col'>
                  <div className='flex justify-between'>
                    <div>{data.length} items</div>
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
                  {currentTableData.map(item => {
                      return (
                          <div className='border  hover:bg-white hover:border-yellow-300 odd:bg-green-100 drop-shadow-[0.1rem_0.1rem_0.12rem_rgba(0,0,0,0.25)] rounded-[0.75rem] flex flex-col lg:w-48 lg:h-68 md:w-32 md:h-42 sm:w-32 sm:h-42 xxs:w-32 xxs:h-42 gap-1 bg-yellow-100 p-2' key={item.id}>
                              <div className=' flex justify-center'>
                                <img className='w-40 hover:w-50' src='https://drive.google.com/uc?export=view&id=1Wp28srt-cp6LP2nkfAwXbx08BoniRAsj'/>
                              </div>
                              <div className='flex justify-center'>
                                {item.id}{item.first_name} 
                              </div>
                              <div className='flex justify-center'>
                                <button className='rounded-[0.5rem] hover:bg-yellow-300 border-yellow-300 border m-1 px-3 py-2 text-xs'>Add to Cart</button>
                              </div>
                          </div> );
                      })}
                      
                  </div>
                  <div className='flex justify-center'>
                    <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={data.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}/> 
                  </div>
                </div>
		    </div>
        </div>
    )
}
export default Page;