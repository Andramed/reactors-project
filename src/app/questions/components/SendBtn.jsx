import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SendBtn() {

	const showSuccesToast = (e) =>{
		e.preventDefault();
		toast.success("Form accepted successfully!!", {
			autoClose:true ,
		})
	}

	return(
	<>
			<button onClick={showSuccesToast} type='reset'   className='bg-btn-color w-9.5 h-3.2 px-8 py-2 text-sm rounded'>Send</button>
			<ToastContainer />
			
	</>
	)	
}
