import BtnDiscover from "../Discover"

export default function OurSmartphones (){
    return(
		<div>
			<div className=' bg-white sm:flex  px-10 gap-6 '>
				<div className='flex flex-col justify-center text-center items-center md:items-start  gap-2 xxs:gap-4 xs:gap-6  xs:pt-6  md:pt-8 lg:pt-10' >
					<h1 className='text-base xs:text-xl md:text-3xl lg:text-6xl font-bold '>Our Smartphones</h1>
					<h5 className=' text-xs xxs:text-sm  md:text-xl'> Designed by Charles and Ray Eames, the plastic <br />
					Eames chairs are true design icons of the 1950s.</h5>
				<BtnDiscover/>
				</div>
				<div className=" py-2 xs:py-4 sm:pt-20">
					<img src="/imgPage1/phone.jpg" alt="smart" />
				</div>
			</div>
        </div>
    )
}