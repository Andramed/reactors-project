'use client'
import useSignIn from '@/app/hooks/useSignIn';
import { useState } from "react";

export const SignIn = () => {
  

   const {handleSigniIn} = useSignIn()
    

    return (
        <div className=" flex bg-[#0f6161] px-5 py-1 rounded-lg text-white"> 
           <button onClick={(e) => handleSigniIn(e)}>Sign In</button>
        </div>
    )
}
export default SignIn;