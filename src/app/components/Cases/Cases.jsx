import BtnDiscover from "../Discover"

export default function Cases (){
    return(
        <div className=" w-full bg-white sm:flex px-10 gap-6 " >
            <div className=' md:w-5/6 md:h-4/6 flex flex-col justify-center text-center items-center md:items-start  gap-2 xxs:gap-4 xs:gap-6 pt-2 xs:pt-4  md:pt-6 lg:pt-10 xl:pt-20' >
                <h1 className=' text-base xs:text-xl md:text-3xl lg:text-6xl font-bold'>Accessories for your phone</h1>
                <h5 className=' text-xs xxs:text-sm  md:text-xl'> Donec sit amet libero eros. Vestibulum nec pharetra nibh. Etiam sit amet lectus vel ipsum placerat laoreet vel ut magna.</h5>
                <BtnDiscover/>
            </div>
            <div className=" md:w-5/6 md:h-4/6">
                <img className="  py-4 xxs:py-6  xs:py-8 sm:pt-16" src="/imgPageHuse/cases.jpg" alt="cases" />
            </div>
        </div>
    )
}