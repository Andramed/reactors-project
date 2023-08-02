'use client'
import useSignIn from '@/app/hooks/useSignIn';
import { useEffect, useState } from "react";
import { ModalWindow } from './ModalWindowSignIn';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export const SignIn = ({showModalSignUp, setShowModalSignUp}) => {
  

   const {handleSigniIn, showModal, setShowModal, handleForm} = useSignIn()

	
    return (
        <div className=" flex text-teal-500 underline "> 
           <button className=' ' onClick={handleSigniIn}>Log In</button>
		   <ModalWindow  showModal={showModal} handleSigniIn={() => handleSigniIn(showModalSignUp, setShowModalSignUp)}  handleForm={handleForm}/>
        </div>
    )
}
export default SignIn;