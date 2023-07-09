"use client"
import Image from 'next/image'
import Header from './components/Header'
import OurBrands from './components/OurBrands'
import ClassicPhones from './components/ClassicPhones'
import NewProducts from './components/NewProducts'
import CaseDesigner from './components/CaseDesigner'


export default function Home() {

	return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-grey">
		<Header/>
		<OurBrands />
		<ClassicPhones />
		<NewProducts />
		<CaseDesigner />
		<div className='  bg-cyan-400  rounded-3xl shadow-2xl p-20'>
		
			<h1 className=' text-3xl '>
				Hello reactors team
			</h1>
			<div className=' w-[200px] bg-cyan-200'>
				<h3>
					ready ? click start an download repository wit starter code 
					an install loacal this project, 
					all instructions in github.
				</h3>
			</div>
			<a className=' hover:bg-white' href="https://github.com/Andramed/reactors-project" target='blank'>click to acces repository</a>
		</div>
    </main>
  )
}
