"use client"
import Header from './components/Header'
import OurBrands from './components/OurBrands'
import ClassicPhones from './components/ClassicPhones'
import NewProducts from './components/NewProducts'
import CaseDesigner from './components/CaseDesigner'
import OurBenefits from './components/OurBenefits'
import OurSmartphones from './components/OurSmartphones'
import Cases from './components/Cases'
import Reviews from './components/Reviews'
import Newsletter from './components/Newsletter'
import Articles from './components/Articles'

export default function Home() {

	return (
	<>
		<main className=" w-5/6 flex justify-center m-auto min-h-screen flex-col items-center  p-4 bg-grey">
			<OurSmartphones/>
			<OurBrands />
			<ClassicPhones />
			<Cases/>
			<NewProducts />
			<CaseDesigner />
			<Reviews/>
			<OurBenefits />
			<Articles/>
			<Newsletter/>
		</main>
	</>
  )
}
