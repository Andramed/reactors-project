import axios from 'axios';
import useSWR from 'swr';
import Product from '../components/Product';
import { useAddItemToCart } from '../hooks/useAddItemToCart';
import useGetProduct from '../hooks/useGetProduct';


export default function Products ({ limit , brands, types, priceRange}) {
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`/api/getAllProdPag?results=${limit}`, fetcher);   
   const {getIdItem} = useAddItemToCart();
   const {getProduct} = useGetProduct()
     return ( <>
     { (data)? data.map((item,index) => {
                return ( <Product getProduct={getProduct} onClick = {getIdItem}   key={index} item={item} />)}) 
              :"Loading products..."
        } </> )
  }
   
