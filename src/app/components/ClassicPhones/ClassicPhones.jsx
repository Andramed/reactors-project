export default function ClassicPhones() {
    return ( 
    <div className='w-full bg-white flex '>
        <div className='w-3/5'>
            <img src='https://noypigeeks.gumlet.io/wp-content/uploads/2023/06/Nokia-2660-Flip-Pop-Pink.jpg?compress=true&quality=80&w=376&dpr=2.6' />
        </div>    
        <div className='pl-8 flex flex-col justify-center flex-grow items-start gap-4 bg-[#F9F6F2]'>
            <h2 className='font-bold'>
                Classic Phones
            </h2>
            <p> - yes, they are still out there</p>
            <button className='bg-[#EFAF65] px-8 py-2 text-xs'>Discover</button>
        </div>        
    </div>);
}