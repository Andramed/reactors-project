'use client'


import useSignUp from '@/app/hooks/useSignUp';
import React from 'react'
import { ModalWindowSignUp } from './ModalWindowSignUp';


export default function SignUp() {
	const {handleSignUp, handleForm, showModalSignUp, setShowModalSignUp} = useSignUp()
	return (
        <div className=" flex bg-[#0f6161] px-5 py-1 rounded-lg text-white"> 
           <button onClick={handleSignUp}>Sign Up</button>
		   <ModalWindowSignUp setShowModalSignUp={setShowModalSignUp}  showModalSignUp={showModalSignUp} handleSignUp={handleSignUp}  handleForm={handleForm} />
        </div>
    )
  
}
