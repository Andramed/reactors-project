'use client'
import SendBtn from './components/SendBtn';
import { useState } from 'react';

const Page = () => {
	const [isAnswerSet, setSelectedAnswer] = useState(false);
	const showAnswer = (btnId) => {
		setSelectedAnswer((prevState) => ({
		  ...prevState,
		  [btnId]: !prevState[btnId],
		}));
		console.log(btnId);
	  };

    return (
        <div className=' flex justify-center gap-20 px-10 py-10'>
			<div className=' flex flex-col text-xl gap-12'>
				<h3 className=' font-semibold'>Here you will find the answer to the most frequently asked questions </h3>
				<div class="grid grid-cols-1 divide-y gap-2">
				<div className="grid grid-cols-1 divide-y gap-2">
          	<div className="answer-container">
            <button onClick={() => showAnswer(1)}>
              <div className='flex justify-between'>
                1. How can I order a phone from your online store?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 m-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </button>
            {isAnswerSet[1] && (
              <p>
                Ordering a phone from our online store is a simple process. Just
                browse our website and search for the desired phone. Then, click
                on the "Add to Cart" button for the selected product. Once you
                have added all the desired items to your cart, proceed to the
                checkout page. Here, you will provide the delivery and payment
                information to complete the ordering process.
              </p>
            )}
          </div>
		  <div className="answer-container">
            <button onClick={() => showAnswer(2)}>
              <div className='flex justify-between'>
                1. How can I order a phone from your online store?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 m-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </button>
            {isAnswerSet[2] && (
              <p>
                Ordering a phone from our online store is a simple process. Just
                browse our website and search for the desired phone. Then, click
                on the "Add to Cart" button for the selected product. Once you
                have added all the desired items to your cart, proceed to the
                checkout page. Here, you will provide the delivery and payment
                information to complete the ordering process.
              </p>
            )}
          </div>
					{/* <div className=' flex justify-between'>2.What payment methods are accepted for phone purchases?
					<button onClick={showAnswer} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-1"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>					
					{isAnswerSet && (
        			<p>For phone purchases, we accept the following payment methods: credit/debit cards (Visa, MasterCard, American Express), PayPal, and cash on delivery (only available for certain geographic areas). All transactions are secure and protected to ensure a safe shopping experience.</p>
      				)}
					</div>
					<div className=' flex justify-between'>3.How long does it take to receive the ordered phone?
					<button onClick={showAnswer}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-1"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>					
					{isAnswerSet && (
						<p>The delivery time may vary depending on the location and the chosen delivery method. Generally, deliveries within the country will take between 2 and 7 business days from order confirmation. For international deliveries, the delivery time may be longer and depends on the country and its customs process.</p>
					)}
					</div>
					<div className=' flex justify-between'>4.Can you deliver phones outside the country?
					<button onClick={showAnswer}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-1"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>					
					{isAnswerSet && (
						<p>Yes, we do deliver phones to locations outside the country. Please make sure to select the correct country from the available options during the checkout process. Please note that for international deliveries, there may be customs duties or additional fees imposed by the recipient's country, and the delivery time may vary.</p>
					)}
					</div>
					<div className=' flex justify-between'>5.Can I exchange or return the phone if I am not satisfied with the purchase?
					<button onClick={showAnswer}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-1"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>					
					{isAnswerSet && (
						<p> Yes, we offer a 14-calendar day return period from the date of receiving the phone to exercise your right of withdrawal without having to justify your decision. During this period, you can request the return of the product and a refund of the amount paid. Please ensure that the phone is in its original condition, with all accessories and the original packaging intact.</p>
					)}
					</div>
					<div className=' flex justify-between'>6.What are the warranty conditions for phones purchased from you?
					<button onClick={showAnswer}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-1"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>					
					{isAnswerSet && (
						<p> All phones purchased from us come with a standard 24-month warranty, as required by applicable law. The warranty covers manufacturing defects and improper functioning of the phone under normal use conditions. If any warranty-covered issues arise, please contact us, and we will resolve the problem as soon as possible.What happens if the purchased phone has defects or technical issues?</p>
					)}
					</div>
					<div className=' flex justify-between'>7.What happens if the purchased phone has defects or technical issues?
					<button ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-1"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>					
					{isAnswerSet && (
						<p> In case the purchased phone has defects or technical issues covered by the warranty, please contact us immediately. We provide technical support and will guide you through the return and replacement process. Depending on the severity of the issue, we may repair the phone or replace it with a new one, following our warranty policy.</p>
					)}*/}
					</div>
				</div> 
				<div className=' text-lg gap-2 grid grid-cols-1 divide-y '>
					<div className=' flex gap-2'>
						<h3 className=' font-medium'>Email</h3>
						<a href="mailto:servise_phone@gmail.com">service_phone@gmail.com</a>
					</div>
					<div className=' flex gap-2'>
						<h3 className=' font-medium' >Customer service</h3>
						<a href="tel:+123 (12345)9999">+123 (12345)9999</a>
					</div>
				</div>
			</div>
			<div className=' flex flex-col gap-4'>
				<h3 className=' font-semibold text-xl'>Do you have any questions?</h3>
				<form  action="">
					<div className=' flex flex-col text-lg gap-2'>
						<label> Name</label>
						<input className='border-solid border-2 rounded border-black' type="text" />
						<label>Last Name</label>
						<input className='border-solid border-2 rounded border-black' type="text" />
						<label> Email</label>
						<input className='border-solid border-2 rounded border-black' type="text" />
						<label> Object</label>
						<input className='border-solid border-2 rounded border-black' type="text" />
						<label> Message</label>
						<input className='border-solid border-2 rounded border-black' type="text" />
						<SendBtn/>
					</div>
				</form>
			</div>
        </div>
    )
}
export default Page;