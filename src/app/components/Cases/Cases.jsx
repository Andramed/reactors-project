import BtnDiscover from "../Discover"

export default function Cases (){
    return(
        <div className=" w-full bg-[#F9F6F2]  sm:flex px-10 gap-6 items-center" >
            <div className= ' pb-16 md:w-5/6 md:h-4/6 flex flex-col justify-center  items-center text-center  gap-2 xxs:gap-4 xs:gap-6 pt-2 xs:pt-4  md:pt-6 lg:pt-10 ' >
                <h1 className=' text-base xs:text-xl md:text-3xl lg:text-5xl font-bold'>Accessories for your phone</h1>
                <h5 className=' text-justify text-xs xxs:text-sm  md:text-xl '> Donec sit amet libero eros. Vestibulum nec pharetra nibh. Etiam sit amet lectus vel ipsum placerat laoreet vel ut magna.</h5>
                <BtnDiscover/>
            </div>
            <div className=" md:w-5/6 md:h-4/6">
                <img className="  py-4 xxs:py-6  xs:py-8 sm:pt-10" src="/imgPageHuse/cases.jpg" alt="cases" />
            </div>
        </div>
    )
}