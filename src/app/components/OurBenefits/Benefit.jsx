export default function Benefit (props) {
    const {img} = props
    return(
        <div className=" flex flex-col justify-center text-center  items-center gap-4 py-4 lg:gap-6">
			<img className=' w-14 sm:w-16 md:w-18 lg:w-20 h-10 sm:h-12 md:h-14 lg:h-16' src={img} alt="hour" />
			<h5 className=' text-base md:text-xl lg:text-2xl items-center lg:px-4'>Free and fast delivery</h5>
			<p className=" text-xs xxs:text-sm  md:text-base w-48 "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
		</div>
    )
}