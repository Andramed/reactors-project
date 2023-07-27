import BtnDiscover from "../Buttons1";
import Link from "next/link";

export default function OurSmartphones (){
    return(
        <div>
		<div className=' bg-white flex xxs:flex-col '>
			<div className='flex flex-grow justify-center items-start p-14 gap-8 ' >
				<h1 className=' text-6xl'>Our Smartphones</h1>
				<h5 className=' text-2xl'> Designed by Charles and Ray Eames, the plastic <br />
				Eames chairs are true design icons of the 1950s.</h5>
				<Link href={"/smartPhones"}>
					<BtnDiscover/>
				</Link>
			</div>
			<div className="">
				<img className='' src="/imgPage1/phone.jpg" alt="smart" />
			</div>
		</div>
        </div>
    )
}