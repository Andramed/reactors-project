'use client'
import React, { useEffect, useState } from 'react'
import ToolTip from '../ToolTip';
import { signIn, useSession } from 'next-auth/react';

import { useSearchParams } from 'next/navigation';
import InputComponent from '../SignIn/Input';
import SignIn from '../SignIn';
import useSignIn from '@/app/hooks/useSignIn';
import useSignUpUser from '@/app/hooks/useSignUpUser';


export const  ModalWindowSignUp = ({showModalSignUp, handleSignUp, handleForm, setShowModalSignUp}) => {
	
	
	const [showPassword, setShowPassword] = useState(false);
	// const searchParams = useSearchParams();
	// const callbackUrl = searchParams.get('callback') || '/'
	const setVisiblePassword = () => {
		showPassword ? setShowPassword(false) : setShowPassword(true)
	}
	const session = useSession()
	const {handleUserSignUp} = useSignUpUser();
	
	
  return (
	<div className={`${showModalSignUp? ' fixed flex items-center justify-center top-0 left-0 w-full h-full bg-slate-200  bg-opacity-50  z-20': 'hidden'}`}>
		<div className={`${showModalSignUp ? 
			'flex flex-col bg-white w-[500px] h-[600px] text-black ' 
			: 'hidden'}`}> 
				
			<div className=' w-full h-10  flex justify-between p-4'>
				<img className=' w-15 h-10' src="/logo/logo.jpg" alt="" />
				<ToolTip descriptions='close window'>
					<button className=' p-2 bg-slate-200' onClick={handleSignUp}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-red-500  hover:transition-colors">
							<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</button>
				</ToolTip>
			</div>
			<div>
				<h1 className=' text-center text-2xl'>Sign Up</h1>
				<div className='flex w-[70%] m-auto mt-2 gap-4'>
					<h3>Already a member ?  </h3>  <button><SignIn/></button>
				</div>
			</div>
			<form onSubmit={(e) => handleForm(e)}  className=' mt-[1%] ' >
			
				<InputComponent destination='email' placeHolder='Email'/>
				<InputComponent destination='password' placeHolder='Password' showPassword = {showPassword}/>
				<InputComponent destination='password' placeHolder='Confirm Password' showPassword={showPassword} />
				<div className='  flex  items-center gap-4 w-[70%] m-auto mb-4 p-4'>
					<input onChange={setVisiblePassword} type='checkbox' />	
					<label htmlFor="showPassword">show password</label>
				</div>
				<button type='submit' className=' bg-btn-color px-5 py-2 w-[70%] m-auto flex justify-center mb-2 hover:text-lg'>Sign Up</button>
			</form>
			<div className=' flex justify-center '> 
				<button id='google' className=' w-[70%] justify-center hover:w-[75%] hover:text-lg flex items-center bg-slate-100 px-4 py-2 rounded-lg' onClick={(e)=> handleSignUp(e.target.id) }>Sign Up with google
					<img className='h-10 w-10 hover:w-12' src="/logo/google.png" alt="google logo" />
				</button>
			</div>
		</div>

	</div>
  )
}
