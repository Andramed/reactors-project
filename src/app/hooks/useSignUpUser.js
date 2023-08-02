import useSWR from 'swr'
import { useState } from 'react'
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const useSignUpUser = () => {
	const [dataGoogle, setDataGoogle] = useState({});
	const [dataCredentials, setDataCredentials] = useState({})

	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get('callback') || '/'

	const handleUserSignUp = async (e, data) => {

		switch (e) {
			case 'google':
				console.log('google');
				signIn('google', )
				const res = axios.post('api/signUp', data)
				console.log(error);
				break;
			default:
				break;
		}
		
	}
	if (Object.entries(dataGoogle)>0) {
		console.log(dataGoogle);
	}
	return {handleUserSignUp, dataGoogle}
}

export default useSignUpUser