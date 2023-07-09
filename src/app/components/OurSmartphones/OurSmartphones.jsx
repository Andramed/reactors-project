import BtnDiscover from "../Buttons1"

export default function OurSmartphones (){
    return(
        <div>
            <div className=' bg-black w-full h-[47px]'></div>
		<div className=' bg-white flex '>
			<div className=' w-[518px] h-[279px] flex flex-col flex-grow justify-center items-start p-14 pt-64 gap-8 ' >
				<h1 className=' text-6xl'>Our Smartphones</h1>
				<h5 className=' text-2xl'> Designed by Charles and Ray Eames, the plastic <br />
				Eames chairs are true design icons of the 1950s.</h5>
				<BtnDiscover/>
			</div>
			<div>
				<img className='  w-[716px] h-[516px]' src="/imgPage1/phone.jpg" alt="smart" />
			</div>
		</div>
        </div>
    )
}