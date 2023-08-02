import { useState } from 'react'


const useSignUp = () => {
	const [showModalSignUp, setShowModalSignUp] = useState(false)
	const handleSignUp = (e) => {
		console.log('sign up');
		if (showModalSignUp) {
			setShowModalSignUp(false)
		} else { 	 	
			setShowModalSignUp(true)
		}
		console.log(showModalSignUp, 'modal sign up');
	}
	const handleForm = () => {
		console.log('handle form');
	}
	return {showModalSignUp, setShowModalSignUp, handleSignUp, handleForm}
}


export default useSignUp