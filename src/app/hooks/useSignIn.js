import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useSignUp from './useSignUp';

const useSignIn = () => {
	const router = useRouter()
	const {showModalSignUp, setShowModalSignUp} = useSignUp()
	const [showModal, setShowModal] = useState(false)
	const handleSigniIn = () => {
		console.log('sign in', showModalSignUp, 'modal sign uo');
		setShowModalSignUp(false)
		if (showModal) {
			setShowModal(false)
		} else {
			setShowModal(true)
		}
	}
	console.log(showModalSignUp, 'sign up permaneent');
	const handleForm = async (e) => {
		e.preventDefault();
		console.log(e.currentTarget);
		const formData = new FormData(e.currentTarget);
			console.log(formData);
			const res = await signIn('credentials', {
				email: formData.get('email'),
				password: formData.get('password'),
				redirect: false
			});
			console.log(res.error);
			if (res && !res.error) {
				router.push('/products');
			}
		
		
		
	}
	
	return {handleSigniIn, showModal, setShowModal, handleForm}
}


export default useSignIn