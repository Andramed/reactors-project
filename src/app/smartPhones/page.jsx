'use client'
import React, { useState, useRef } from 'react';
import MultiRangeSlider from "multi-range-slider-react";
import Products from 'src/app/products/Products.jsx';

import axios from 'axios';
import useSWR from 'swr';

const Page = () => {

  const [selectedData, setSelectedData] = useState();
  const disableButton = useRef(0);
  const countRecords = useRef(0);


  if (selectedData && (selectedData.length === 0)) {
    disableButton.current = 1;
  }

  if (selectedData && (selectedData.length > 0)) {

    disableButton.current = 0;
  
    if (selectedData.length === countRecords.current) { disableButton.current = 1 } 

  } 

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [count, setCount ] = useState(8);
  const [brandsArray, setBrandsArray] = useState([]);
  const [colorsArray, setColorsArray] = useState([]);
  const [sortPrice, setSortPrice] = useState('');
  
  const brandsCheck = useRef([]);
  const colorsCheck = useRef([]);


  const handleInput = (e) => {
    setMinPrice(e.minValue);
    setMaxPrice(e.maxValue);
};

  const handleOnChangeSort = (e) => {
    console.log(e.target.value);
    if (e.target.value == 'low') {setSortPrice(1)}
    else if (e.target.value == 'high') {setSortPrice(-1)}
    else {setSortPrice('')}
  }

  const handleChangeBrand = (e) => {
    if (e.target.checked === true){
      brandsCheck.current.push(e.target.id);
      setBrandsArray([...brandsCheck.current]);
    } else {

      const index = brandsCheck.current.indexOf(e.target.id);      
      const newArray = brandsCheck.current.splice(index, 1);
      setBrandsArray([...brandsCheck.current]);
    }
  };

  const handleChangeColor = (e) => {
    if (e.target.checked === true){
      colorsCheck.current.push(e.target.id);
      setColorsArray([...colorsCheck.current]);
    } else {

      const index = colorsCheck.current.indexOf(e.target.id);      
      const newArray = colorsCheck.current.splice(index, 1);
      setColorsArray([...colorsCheck.current]);
    }
  };  


  let brands = [];
  {
    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const { data, error } = useSWR(`/api/getAllBrands?type=smart`, fetcher);     
    
    (data)? data.forEach((item)=>{brands.push(item)}): null;
  }
  
  let colors = [];
  {
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, errorColors } = useSWR(`/api/getAllColors?type=smart`, fetcher);       
  
  (data)? data.forEach((item)=>{colors.push(item)}): null;
  }  


  {
    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const { data, error } = useSWR(`/api/getAllProdPag?colors=${colorsArray}&brands=${brandsArray}&types=smart&minPrice=${minPrice}&maxPrice=${maxPrice}&sortPrice=${sortPrice}`, fetcher);     
  
      if (data) {
        countRecords.current = data.length; 
        console.log(data.length);
      }  
    }

    return (
        <div className='pb-8 w-full flex justify-center items-center flex-col bg-white'>
            <div className='w-full h-12 pl-36 pt-2 bg-[#F9F6F2]'>Smart Phones</div>
            <div className='w-full lg:pl-36 lg:pr-24 md:pl-36 md:pr-24 sm:px-16 pt-12 flex item-start text-base '>
                <div className='min-w-max xxs:pl-2 pr-2 w-1/4 font-small flex flex-col gap-3'>
                  <p>Filters: </p>
                  <div className='border rounded px-2 py-2 flex flex-col text-xs gap-1'>
                    <p>Brands</p>
                    { (brands)?
                      brands.map((brand,index) => (
                      <label key={index}><input
                        type="checkbox"
                        id={brand}
                        label={brand}
                        onChange={handleChangeBrand}
                      /> {brand}</label>
                    )) : null
                  }
                  </div>
                  
                  <div className='border rounded px-2 py-2 text-xs gap-1'>
                    <MultiRangeSlider
                      min={0}
                      max={50000}
                      step={1}
                      minValue={minPrice}
                      maxValue={maxPrice}
                      onInput={(e) => {
                        handleInput(e);
                      }}
                      // onChange={()=>{console.log(maxPrice)}}
                      label={false}
                      ruler={false}
                      style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
                      // barLeftColor="red"
                      barInnerColor="white"
                      // barRightColor="green"
                      thumbLeftColor="yellow"
                      thumbRightColor="yellow"
                    / >
                      <div>
                        <label> from <input className='w-12 border text-sm' type="text" id="minP" value={minPrice} readOnly/></label>
                        <label> to <input className='w-12 border text-sm' type="text" id="maxP" value={maxPrice} readOnly/></label>
                      </div>
                  </div>
                  <div className='border rounded px-2 py-2 flex flex-col text-xs gap-1'>
                    <p>Colors</p>
                    { (colors)? 
                      colors.map((color,index) => (
                      <label key={index}><input
                        type="checkbox"
                        id={color["_id"]}
                        label={color["_id"]}
                        onChange={handleChangeColor}
                      /> {color["_id"]}</label>
                    )) : null}                                        
                  </div>    
                </div>

                <div className='w-full flex-col w-3/4'>
                  <div className='flex justify-end pb-3'>
                    <div className=''>
                      <div className='inline mr-2'>sort by Price: </div>
                      <select name="price_sort" id="price_sort" onChange={handleOnChangeSort}>
                        <option value="">--choose an option--</option>
                        <option value="low">from the Lowest</option>
                        <option value="high">from the Highest</option>
                      </select>    
                    </div>
                  </div>  
                  {/* <div className='flex justify-center last-of-type:justify-start flex-wrap gap-8 pl-4'>
                    <Products setCount={setCount} limit={count} brands={brandsArray} colors={colorsArray} types='smart' minPrice={minPrice} maxPrice={maxPrice} sortPrice={sortPrice}/>
                    <div style={{ display: 'none' }}>
                      <Products setCount={setCount} limit={count + 4} brands={brandsArray} colors={colorsArray} types='smart' minPrice={minPrice} maxPrice={maxPrice} sortPrice={sortPrice}/>
                    </div>
                  </div> */}
                  <div className='flex justify-center last-of-type:justify-start flex-wrap gap-8 pl-4'>
                    <Products setSelectedData={setSelectedData} limit={count} brands={brandsArray} colors={colorsArray} types='smart' minPrice={minPrice} maxPrice={maxPrice} sortPrice={sortPrice}/>
                    <div style={{ display: 'none' }}>
                      <Products setSelectedData={setSelectedData} limit={count + 4} brands={brandsArray} colors={colorsArray} types='smart' minPrice={minPrice} maxPrice={maxPrice} sortPrice={sortPrice}/>
                    </div>
                  </div>
                  

                  { (!disableButton.current && selectedData )?
                  <footer>
                    <div className='pt-8 flex justify-center'>
                      <button className='bg-btn-color w-9.5 h-3.2 px-8 py-2 text-sm rounded ' onClick={() => {setCount(count + 4);}}>
                        more products...
                      </button>
                    </div>
                    
                  </footer>  : null
                }   

                {(selectedData && selectedData.length == 0)? "No Phones found for this criteria": null}

                </div>
		    </div>
        </div>
    )
}
export default Page;