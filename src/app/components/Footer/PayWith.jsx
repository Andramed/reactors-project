'use clinet'
import { useState } from "react";

export default function PayWith () {
    return(
       <>
       <div className=" flex flex-col gap-2 "> 
            <h5 className=" text-sm sm:text-lg lg:text-xl">Pay With</h5>
            < div className=" sm:flex gap-2 ">
                <div className=" flex justify-center items-center gap-2 pt-2 xs:pt-0 ">
                    <img className=" pay-with" src="/imgFooter/PayPal.svg" alt="paypal" />
                    <img className=" pay-with"  src="/imgFooter/GooglePay.svg" alt="gpay" />
                    <img  className=" pay-with" src="/imgFooter/Amex.svg" alt="amex" />
                    <img className=" pay-with" src="/imgFooter/Bancontact.svg" alt="bnc" />
                </div>
                <div className=" flex justify-center items-center gap-2 pt-2 xs:pt-0">
                    <img className=" pay-with" src="/imgFooter/Maestro.svg" alt="maestro" />
                    <img className=" pay-with" src="/imgFooter/Visa.svg" alt="visa" />
                    <img className=" pay-with" src="/imgFooter/Mastercard.svg" alt="masterCars" />
                </div>
            </div>
       </div>
       <div>
       </div>
       </>
    )
}