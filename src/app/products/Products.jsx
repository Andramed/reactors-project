import axios from 'axios';
import useSWR from 'swr';
import Product from '../components/Product';

export default function Products ({ limit }) {
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`/api/getAllProdPag?results=${limit}`, fetcher);   

    return ( <>
     { (data)? data.map((item,index) => {
                return ( <Product key={index} item={item} />)}) 
              :null 
        } </> )
  }
   
