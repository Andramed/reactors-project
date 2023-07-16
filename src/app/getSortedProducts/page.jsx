'use client'
import React, { useEffect } from 'react';
import useSortedProducts from '../hooks/useSortedProducts';

export default function GetSortedProducts() {
  const { products, handleChange, handleBtn } = useSortedProducts();

  useEffect(() => {
    console.log(products); // Afișați valoarea actualizată a products
  }, [products]);

  return (
    <div>
      <div className='bg-orange-50 rounded-3xl w-max px-12 py-2'>
        <label>get phone by model and or brand</label>
        <input
          name='brand'
          placeholder='ex: iPhone(brand) 14(model) '
          className='border'
          type='text'
          onChange={handleChange}
        />{' '}
        <button>get sorted product by input</button>
        <button value='gt' onClick={handleChange}>
          send param
        </button>
      </div>
	  

      <div className='bg-orange-50 rounded-3xl w-max px-12 py-2'>
        get phone by price
        <input
          onChange={handleChange}
          name='price'
          type='text'
          placeholder='ex: 1000'
        />
        <button>get sorted phone by price</button>
      </div>
      <div className='bg-orange-50 rounded-3xl w-max px-12 py-2'>
        <button name='newPhone' value={new Date()} onClick={handleBtn}>get new phone</button>
      </div>
      <div className='bg-orange-50 rounded-3xl w-max px-12 py-2'>
        <select onChange={handleChange} name='operator' id=''>
          <option value=''>Sort item: </option>
          <option value='gt'>Price Low to high</option>
          <option value='lt'>Price high to low</option>
        </select>
      </div>
    </div>
  );
}
