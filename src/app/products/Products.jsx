import axios from 'axios';
import useSWR from 'swr';

export default function Products ({ limit }) {
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`http://localhost:3000/api/getAllProdPag?results=${limit}`, fetcher);   

    return ( <>
     { (data)?
        data.map((item,index) => {
          return (
              <div key={index} className='border  hover:bg-white hover:border-yellow-300 odd:bg-green-100 drop-shadow-[0.1rem_0.1rem_0.12rem_rgba(0,0,0,0.25)] rounded-[0.75rem] flex flex-col lg:w-48 lg:h-68 md:w-32 md:h-42 sm:w-32 sm:h-42 xxs:w-32 xxs:h-42 gap-1 bg-yellow-100 p-2'>
                  <div className=' flex justify-center'>
                    <img className='w-40 hover:w-50' src={item.url}/>
                  </div>
                  <div className='flex justify-center'>
                    {item.brand}
                  </div>
                  <div className='flex justify-center'>
                    <button className='rounded-[0.5rem] hover:bg-yellow-300 border-yellow-300 border m-1 px-3 py-2 text-xs' >Add to Cart</button>
                  </div>
              </div> )
          }) :null 
        } </> )
  }
   
