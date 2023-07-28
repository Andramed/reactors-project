import axios from 'axios';
import useSWR from 'swr';
import Product from '../components/Product';
import { useAddItemToCart } from '../hooks/useAddItemToCart';
import useGetProduct from '../hooks/useGetProduct';



export default function Products ({ limit ,colors , brands, types, minPrice, maxPrice, sortPrice}) {

  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`/api/getAllProdPag?colors=${colors}&results=${limit}&brands=${brands}&types=${types}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortPrice=${sortPrice}`, fetcher);     
   const {getProductToCart} = useAddItemToCart();
   const {getProduct} = useGetProduct()
	
     return ( <>
     { (data)? data.map((item,index) => {
                return ( <Product getProduct={getProduct} getProductToCart = {getProductToCart}    key={index} item={item} showElements={1}/>)}) 
              :"Loading products..."
        } </> )
  }


  
   
