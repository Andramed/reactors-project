import axios from 'axios';
import useSWR from 'swr';
import Product from '../components/Product';

export default function Products ({ limit , brands, types, priceRange}) {
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`/api/getAllProdPag?results=${limit}&brands=${brands}&types=${types}&priceRange=${priceRange}`, fetcher);   
    
    // process error here  

    return ( <>
     { (data)? data.map((item,index) => {
                return ( <Product key={index} item={item} />)}) 
              :"Loading products..."
        } </> )
  }
   
