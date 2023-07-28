import BtnDiscover from "../Discover"

export default function OurSmartphones (){
    return(
		<div>
			<div className='bg-[#F9F6F2]  sm:flex  px-10 py-8 gap-6 '>
				<div className='flex flex-col justify-center text-justify items-center md:items-start   xs:pt-6  md:pt-5 lg:pt-8 lg:min-w-max lg:items-start'  >
					<div className=" flex flex-col  bg-[#F9F6F2]  gap-2 xxs:gap-4 xs:gap-6 ">
						<h1 className='text-base xs:text-xl md:text-3xl lg:text-5xl font-bold '>Our Smartphones</h1>
						<h5 className=' text-xs xxs:text-sm  md:text-xl'> Designed by Charles and Ray Eames, the plastic <br /> Eames chairs are true design icons of the 1950s.</h5>
						<BtnDiscover/>
					</div>
				</div>
				<div className=" py-2 xs:py-4 ">
					<img src="/imgPage1/phone.jpg" alt="smart" />
				</div>
			</div>
        </div>
    )
}