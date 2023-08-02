'use client'
import Header from './components/Header'
import OurBrands from './components/OurBrands'
import ClassicPhones from './components/ClassicPhones'
import NewProducts from './components/NewProducts'
import CaseDesigner from './components/CaseDesigner'
import OurBenefits from './components/OurBenefits'
import OurSmartphones from './components/OurSmartphones'
import Cases from './components/Cases'
import Reviews from './components/Reviews'
import Newsletter from './components/Newsletter'
import Articles from './components/Articles'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import useSignUp from './hooks/useSignUp'
import useSignUpUser from './hooks/useSignUpUser'


export default function Home() {
	
	useEffect(() => {
		console.log('mounted');
		return () => {
			console.log('unmounted');
		}
	}, [])
	const session = useSession();
	// const {handleUserSignUp} = useSignUpUser();
	// useEffect(() => {
	// 	if (session) {
	// 		handleUserSignUp('google', {
	// 			name: session.data?.user.name,
	// 			email: session.data?.user.email,
	// 			method: 'google'
	// 		})
	// 	}
	// }, [session])
	return (
	<>
		<main className=" w-5/6 flex justify-center m-auto min-h-screen flex-col items-center bg-grey py-2">
			<OurSmartphones/>
			<OurBrands />
			<ClassicPhones />
			<NewProducts />
			<Cases/>
			
			<Reviews/>
			<OurBenefits />
			<Articles/>
			<Newsletter/>
		</main>
	</>
  )
}
