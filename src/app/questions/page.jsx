'use client'
import SendBtn from './components/SendBtn';
import { useState } from 'react';
import questions from '../questions/components/questions.json';
console.log(Object.entries(questions));



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

		<div className=' flex justify-center gap-10 px-10 py-10'>
			<div className='flex flex-col text-xl gap-12'>
				<h3 className=' font-semibold'>Here you will find the answer to the most frequently asked questions </h3>
				<div className='bg-slate-50 p-10'>
					{
						Object.entries(questions).map((questions, index) => {
							return (
								<div className='flex flex-col bg-white p-3 rounded-sm mb-3' key={index}>
									<button className=' ' onClick={() => showAnswer(index)}>
										<div className=' flex justify-between '> 
											<p className=' text-justify '>{questions[1][0]}</p> 
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="  w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
										</div>
									</button>
									
										<div className=' relative w-[90%]'>
											{isAnswerSet[index] && (
												<li className=' w-[40rem] h-auto px-6 text-justify'>
													{questions[1][1]}
												</li>
											)}
										</div>
								
								</div>
							)
						})
					
					}
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
			<div>
				
				<div className=' flex flex-col gap-12'>
					<h3 className=' font-semibold text-xl'>Do you have any questions?</h3>
					<form type="reset">
						<div className=' flex flex-col text-lg gap-2 bg-slate-50'>
							<label> Name</label>
							<input className='border-solid border-2 rounded' type="text" />
							<label>Last Name</label>
							<input className='border-solid border-2 rounded' type="text" />
							<label> Email</label>
							<input className='border-solid border-2 rounded' type="text" />
							<label> Object</label>
							<input className='border-solid border-2 rounded' type="text" />
							<label> Message</label>
							<input className='border-solid border-2 rounded mb-10' type="text" />
							<SendBtn/>
						</div>
					</form>
				</div>
			</div>
		</div>

    )
}
export default Page;