export default function Benefit (props) {
    const {img} = props
    return(
        <div className=" m-2">
					<img className=' mb-5' src={img} alt="hour" />
					<h5 className=' mb-5'>Free and fast delivery</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
		</div>
    )
}