import BtnDiscover from "../Discover";

import Link from "next/link";

export default function ClassicPhones() {
    return ( 
    <div className='w-full py-10 px-10 bg-white flex'>
        <div className='max-sm:hidden lg:visible h-auto max-w-lg rounded-lg  md:w-5/6 md:h-4/6'>
            <img src='https://noypigeeks.gumlet.io/wp-content/uploads/2023/06/Nokia-2660-Flip-Pop-Pink.jpg?compress=true&quality=80&w=376&dpr=2.6' />
        </div>    
        <div className=' md:w-5/6  flex flex-col justify-center  items-center max-sm:pl-0 pl-8 pr-8 gap-4 bg-[#F9F6F2]'>
            <h2 className='text-base xs:text-xl md:text-3xl lg:text-5xl font-bold'>Classic Phones</h2>
            <p className=" text-xs xxs:text-sm  md:text-xl text-center"> - yes, they are still out there</p>
            <Link href={"/classicPhones"}>
                <BtnDiscover/>
            </Link>
        </div>        
    </div>

    );
}