'use client'
import { useState } from 'react';
import questions from '../questions/components/questions.json';
import FormData from './components/FormData';

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
					<FormData/>
			</div>
		</div>

    )
}
export default Page;