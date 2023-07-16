import BtnDiscover from "../Buttons1"

export default function Cases (){
    return(
        <div className=' bg-white flex justify-between '>
            <div >
				<div className=' flex flex-col flex-grow justify-center items-start gap-8 ' >
					<h1 className=' text-6xl'>Accessories for your phone</h1>
					<h5 className=' text-2xl'> Donec sit amet libero eros. Vestibulum nec pharetra nibh. <br /> Etiam sit amet lectus vel ipsum placerat laoreet vel ut magna.</h5>
					<BtnDiscover/>
				</div>
			</div>
			<div >
				<img className="" src="/imgPageHuse/cases.jpg" alt="cases" />
			</div>
        </div>
    )
}