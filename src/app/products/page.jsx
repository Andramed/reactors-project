"use client"
import React, { useState, useMemo } from 'react';
import Pagination from 'src/app/components/Pagination';
import 'src/app/components/Pagination/pagination.scss';

let PageSize = 3;

const data = [
  {id: 1,
   first_name: 'Elena',
   last_name : 'Teaca',
   email     : 'ririteaca@gmail.com',
   phone     : '078053747'},
   {id: 2,
    first_name: 'Elena2',
    last_name : 'Teaca2',
    email     : 'ririteaca@gmail.com',
    phone     : '078053747'},
    {id: 3,
      first_name: 'Elena3',
      last_name : 'Teaca3',
      email     : 'ririteaca@gmail.com',
      phone     : '078053747'},    
      {id: 4,
        first_name: 'Elena4',
        last_name : 'Teaca4',
        email     : 'ririteaca@gmail.com',
        phone     : '078053747'},      
        {id: 5,
          first_name: 'Elena5',
          last_name : 'Teaca5',
          email     : 'ririteaca@gmail.com',
          phone     : '078053747'},        
          {id: 6,
            first_name: 'Elena6',
            last_name : 'Teaca6',
            email     : 'ririteaca@gmail.com',
            phone     : '078053747'},          
            {id: 7,
              first_name: 'Elena7',
              last_name : 'Teaca7',
              email     : 'ririteaca@gmail.com',
              phone     : '078053747'},            
              {id: 8,
                first_name: 'Elena8',
                last_name : 'Teaca8',
                email     : 'ririteaca@gmail.com',
                phone     : '078053747'},              
                {id: 9,
                  first_name: 'Elena9',
                  last_name : 'Teaca9',
                  email     : 'ririteaca@gmail.com',
                  phone     : '078053747'},                
                  {id: 10,
                    first_name: 'Elena10',
                    last_name : 'Teaca10',
                    email     : 'ririteaca@gmail.com',
                    phone     : '078053747'},                  
];


const Page = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);


    return (
        <div className='w-full flex justify-center items-center flex-col bg-white'>
            <div className='w-full pl-36  bg-yellow-500'>BreadCrumbs links</div>
            <div className='w-full pl-36 pt-12 pb-6 bg-yellow-400'>Products</div>
            <div className='w-full px-36 pt-12 flex item-start '>
                <div className='w-1/4 bg-purple-200'>Filter</div>
                <div className='w-full flex-col w-3/4'>
                <div className='pl-12 flex justify-center flex-wrap gap-2 bg-green-100'>
                {currentTableData.map(item => {
                    return (
                        <div className='w-36' key={item.id}>
                            <img className='w-24' src='https://drive.google.com/uc?export=view&id=1Wp28srt-cp6LP2nkfAwXbx08BoniRAsj'/>
                            {item.id}{item.first_name}
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