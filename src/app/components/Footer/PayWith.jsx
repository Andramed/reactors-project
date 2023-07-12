export default function PayWith () {
    return(
       <div className=" flex flex-col gap-2 "> 
            <h5>Pay With</h5>
            < div className=" flex gap-2">
                <img src="/imgFooter/PayPal.svg" alt="paypal" />
                <img src="/imgFooter/GooglePay.svg" alt="gpay" />
                <img src="/imgFooter/Amex.svg" alt="amex" />
                <img src="/imgFooter/Bancontact.svg" alt="bnc" />
                <img src="/imgFooter/Maestro.svg" alt="maestro" />
                <img src="/imgFooter/Visa.svg" alt="visa" />
                <img src="/imgFooter/Mastercard.svg" alt="masterCars" />
            </div>
       </div>
    )
}