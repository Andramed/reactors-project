import BtnDiscover from "../Buttons1"

export default function Cases (){
    return(
        <div>
            <div className=' bg-page-bg flex '>
			<div className=' w-[1017x] h-[716px] flex flex-col flex-grow justify-center items-start p-14 gap-8 ' >
				<h1 className=' text-6xl'>Accessories for your phone</h1>
				<h5 className=' text-2xl'> Donec sit amet libero eros. Vestibulum nec pharetra nibh. <br /> Etiam sit amet lectus vel ipsum placerat laoreet vel ut magna.</h5>
				<BtnDiscover/>
			</div>
			<div >
				<img className=' w-[716px] h-[716px]' src="/imgPageHuse/cases.avif" alt="cases" />
			</div>
		</div>
        </div>
    )
}