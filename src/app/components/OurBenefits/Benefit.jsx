export default function Benefit (props) {
    const {img} = props
    return(
        <div className=" px-3 py-3  m-2 flex flex-col items-center">
					<img className=' w-20 h-16 mb-5' src={img} alt="hour" />
					<h5 className=' mb-5 text-2xl items-center pl-12'>Free and fast delivery</h5>
					<p className=" text-base  w-48 "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
		</div>
    )
}