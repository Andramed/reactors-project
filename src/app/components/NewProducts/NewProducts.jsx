import axios from 'axios';
import useSWR from 'swr';
import Link from "next/link";
import Product from '../Product';

export default function NewProducts() {
    
    const limit = 3;
    const order = -1;

    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const { data, error } = useSWR(`/api/getRecentProducts?limit=${limit}&order=${order}`, fetcher);     
    // process error here  
    console.log(data);
      
    return ( 
        <div className='w-full py-14 px-16 flex justify-center items-center flex-col gap-2 bg-white'>
            <h2 className='flex justify-center font-bold'>New in our Shop</h2>
            <div className='flex text-xs gap-2 justify-center underline'>
            {   
                (data) ?
                data.map((item,index)=>{
                    return <Product key={index} item={item} />
                }) : null
            }            
            </div>
            <div>
                <Link href={"/products"}>
                    <button className='bg-btn-color px-8 py-2 text-sm rounded w-9.5 h-3.2'>Shop</button>
                </Link>
            </div>
        </div>);
}