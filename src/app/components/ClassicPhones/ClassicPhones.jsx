import BtnDiscover from "../Discover";

export default function ClassicPhones() {
    return ( 
    <div className='w-full bg-white flex'>
        <div className='max-sm:hidden lg:visible h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0'>
            <img src='https://noypigeeks.gumlet.io/wp-content/uploads/2023/06/Nokia-2660-Flip-Pop-Pink.jpg?compress=true&quality=80&w=376&dpr=2.6' />
        </div>    
        <div className='max-sm:items-center max-sm:pl-0 pl-8 flex flex-col justify-center flex-grow items-start gap-4 bg-[#F9F6F2]'>
            <h2 className='font-bold'>
                Classic Phones
            </h2>
            <p> - yes, they are still out there</p>
            <BtnDiscover/>
        </div>        
    </div>);
}