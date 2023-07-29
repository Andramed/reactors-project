import axios from 'axios';
import useSWR from 'swr';
import Product from '../components/Product';
import { useAddItemToCart } from '../hooks/useAddItemToCart';
import useGetProduct from '../hooks/useGetProduct';
import { useRef } from 'react';


export default function Products ({setCount, limit ,colors , brands, types, minPrice, maxPrice, sortPrice}) {
  
  const disableButton = useRef(0);

  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`/api/getAllProdPag?colors=${colors}&results=${limit}&brands=${brands}&types=${types}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortPrice=${sortPrice}`, fetcher);     
  const {getProductToCart} = useAddItemToCart();
  const {getProduct} = useGetProduct();

  if (data && (data.length === 0)) {disableButton.current = 1}

     return ( <>
     { (data)? data.map((item,index) => {
                return ( <Product getProduct={getProduct} getProductToCart = {getProductToCart}    key={index} item={item} showElements={1}/>)}) 
              :"Loading products..."
        } 
     { (!disableButton.current && data)?
        <footer>
          <div className='pt-8 flex justify-center'>
            <button className='bg-btn-color w-9.5 h-3.2 px-8 py-2 text-sm rounded ' onClick={() => {setCount(limit + 4);}}>
              more products...
            </button>
          </div>
          
        </footer> : null
      }   

      {(data && data.length == 0)? "No Phones found for this criteria": null}      
        </> )
  }


  
   
