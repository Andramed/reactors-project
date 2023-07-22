'use client'
import React, { useState, useRef } from 'react';
import useGetAllBrands from 'src/app/hooks/useGetAllBrands.js';
import Products from './Products';
import styles  from 'src/app/products/range.module.css';


// const data_sort =
// data.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.first_name > b.first_name) ? 1 : -1) : -1 );

const Page = () => {
  const [count, setCount ] = useState(8);
  const [brandsArray, setBrandsArray] = useState([]);
  const [typesArray, setTypesArray] = useState([]);
  
  const [priceRange, setPriceRange] = useState(2000);
  const brandsCheck = useRef([]);
  const typesCheck = useRef([]);
  const range = useRef(0);
  

  const handleChangeBrand = (e) => {
    if (e.target.checked === true){
      brandsCheck.current.push(e.target.id);
      setBrandsArray([...brandsCheck.current]);
    } else {

      const index = brandsCheck.current.indexOf(e.target.id);      
      const newArray = brandsCheck.current.splice(index, 1);
      console.log(newArray);
      setBrandsArray([...brandsCheck.current]);
    }
  };

  const handleChangeType = (e) => {
    if (e.target.checked === true){
      typesCheck.current.push(e.target.id);
      setTypesArray([...typesCheck.current]);
    } else {

      const index = typesCheck.current.indexOf(e.target.id);      
      const newArray = typesCheck.current.splice(index, 1);
      console.log(newArray);
      setTypesArray([...typesCheck.current]);
    }
  };  

  const onInputHandle = (e) => {
    range.current = e.target.value;
    setPriceRange(range.current);
  }

   
  const brands = useGetAllBrands();
    

    return (
        <div className='pb-8 w-full flex justify-center items-center flex-col bg-white'>
            {/* <div className='w-full pl-36 py-3 bg-gray-500 text-white font-bold text-xs'>
              BreadCrumbs - if possible
            </div> */}
            <div className='w-full xxs:pl-4 lg:pl-36 md:pl-36 sm:pl-16 pt-12 pb-6 font-bold bg-gray-100'>
              Products
            </div>
            <div className='w-full lg:pl-36 lg:pr-24 md:pl-36 md:pr-24 sm:px-16 pt-12 flex item-start text-base '>
                <div className='min-w-max border rounded xxs:pl-2 pr-2 w-1/4 font-small flex flex-col gap-3'>
                  <p>Filters: </p>
                  <div className='border rounded px-2 py-2 flex flex-col text-xs gap-1'>
                    <p>Brands</p>
                    {brands.map((brand,index) => (
                      <label key={index}><input
                        type="checkbox"
                        id={brand}
                        label={brand}
                        onChange={handleChangeBrand}
                      /> {brand}</label>
                    ))}                    
                  </div>
                  <div className='border rounded px-2 py-2 flex flex-col text-xs gap-1'>
                    <p>Type</p>
                      <label><input
                        type="checkbox"
                        id="smart"
                        label="smart"
                        onChange={handleChangeType}
                      /> Smart</label>
                      <label><input
                        type="checkbox"
                        id="classic"
                        label="classic"
                        onChange={handleChangeType}
                      /> Classic</label>
                  </div>

                  <div className={styles.slidecontainer}>
                    <input onInput={onInputHandle} type="range" min="1" max="50000" value={priceRange} className={styles.slider} id='myRange' />
                    <p>Value: <span id="demo">{priceRange}</span></p>
                  </div>                  
                </div>

                <div className='w-full flex-col w-3/4 border'>
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
                  <div className='flex justify-center last-of-type:justify-start flex-wrap gap-4 pl-4 border'>
                    <Products limit={count} brands={brandsArray} types={typesArray} priceRange={priceRange}/>
                    <div style={{ display: 'none' }}>
                      <Products limit={count + 4} brands={brandsArray} types={typesArray} priceRange={priceRange}/>
                    </div>
                  </div>
                  <footer>

                    <div className='pt-8 flex justify-center'>
                      <button className='bg-btn-color w-9.5 h-3.2 px-8 py-2 text-sm rounded ' onClick={() => setCount(count + 4)}>
                        more products...
                      </button>
                    </div>
                  </footer>
                </div>
		    </div>
        </div>
    )
}
export default Page;