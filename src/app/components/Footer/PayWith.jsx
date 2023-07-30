'use clinet'
import { useState } from "react";

export default function PayWith () {
    const [showFormPay, setshowFormPay] = useState(false)

    const openFormPay = () => {
        setshowFormPay(true)
        return console.log('am facut click');
        
    }

    const processPayment = () => {
        alert('Plata a fost efectuată cu succes!');
      };


    return(
       <>
       <div className=" flex flex-col gap-2 "> 
            <h5 className=" text-sm sm:text-lg lg:text-xl">Pay With</h5>
            < div className=" sm:flex gap-2 ">
                <div className=" flex justify-center items-center gap-2 pt-2 xs:pt-0 ">
                    <button onClick={openFormPay}>
                    <img src="/imgFooter/PayPal.svg" alt="paypal" />
                    </button>
                    <img src="/imgFooter/GooglePay.svg" alt="gpay" />
                    <img src="/imgFooter/Amex.svg" alt="amex" />
                    <img src="/imgFooter/Bancontact.svg" alt="bnc" />
                </div>
                <div className=" flex justify-center items-center gap-2 pt-2 xs:pt-0">
                    <img src="/imgFooter/Maestro.svg" alt="maestro" />
                    <img src="/imgFooter/Visa.svg" alt="visa" />
                    <img src="/imgFooter/Mastercard.svg" alt="masterCars" />
                </div>
            </div>
       </div>
       <div>
       {showFormPay && (
        <div>
          <h2>Payment Form</h2>
          <p>Introduceți detaliile de plată:</p>
          <input type="text" placeholder="Nume pe card" /><br />
          <input type="text" placeholder="Număr card" /><br />
          <input type="text" placeholder="Data expirării" /><br />
          <button onClick={processPayment}>Pay</button>
        </div>
      )}
       </div>
       </>
    )
}