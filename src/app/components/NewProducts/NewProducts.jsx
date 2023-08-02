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
        <div className='w-full py-12 px-6 flex justify-center items-center flex-col gap-5 bg-white'>
                <h2 className='flex justify-center text-base xs:text-xl md:text-3xl lg:text-3xl font-bold'>New in our Shop</h2>
                <div className='flex flex-col md:flex-row text-xs xxs:text-sm  md:text-xl gap-2 justify-center'>
                        {(data) ? data.map((item,index)=>{
                                return <Product key={index} item={item} showElements={1}/>
                            }) : null}            
                </div>
                <div className=" flex justify-center">
                    <Link href={"/products"}>
                    <button className= 'bg-btn-color w-9.5 font-semibold h-3.2 px-8 py-2 my-2 text-sm rounded'>Shop</button>
                </Link>
                </div>
    </div>
        );
}