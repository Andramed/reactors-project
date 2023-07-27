import axios from 'axios';
import useSWR from 'swr';
import Product from '../components/Product';

export default function Products ({ limit ,colors , brands, types, minPrice, maxPrice, sortPrice}) {

  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`/api/getAllProdPag?colors=${colors}&results=${limit}&brands=${brands}&types=${types}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortPrice=${sortPrice}`, fetcher);     
    // process error here  

    return ( <>
     { (data)? data.map((item,index) => {
                return ( <Product key={index} item={item} />)}) 
              :"Loading products..."
        } </> )
  }


  
   
