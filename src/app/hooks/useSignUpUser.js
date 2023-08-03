// import useSWR from 'swr'
// import { useState } from 'react'
// import axios from 'axios';
// import { signIn, useSession } from 'next-auth/react';
// import { useSearchParams } from 'next/navigation';

// const useSignUpUser = () => {
// 	const [dataGoogle, setDataGoogle] = useState({});
// 	const [dataCredentials, setDataCredentials] = useState({})

// 	const searchParams = useSearchParams();
// 	const callbackUrl = searchParams.get('callback') || '/'

// 	const handleUserSignUp = async (e) => {
// 		console.log(e);
		
// 		switch (e) {
// 			case 'google':
// 				console.log('google');
				
				
				
// 				break;
// 			default:
// 				break;
// 		}
		
// 	}
// 	if (Object.entries(dataGoogle)>0) {
// 		console.log(dataGoogle);
// 	}
// 	return {handleUserSignUp, dataGoogle}
// }

// export default useSignUpUser