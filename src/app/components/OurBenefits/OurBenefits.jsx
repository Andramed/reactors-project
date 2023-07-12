import Benefit from "./Benefit";

export default function OurBenefits () {

    return (
       <div className=" w-[1204px] h-[621px] bg-header-bg items-center text-white p-10">
         <h1 className=" flex justify-center text-5xl pt-20 pb-16">Our benefits !</h1>
        <div className=''>
            <div className=' flex justify-around '>
                <Benefit img ={'/imgBenefits/hour.svg'} />
                <Benefit img={'/imgBenefits/check.svg'} />
                <Benefit img={'/imgBenefits/manufacturer.svg'}  />
                <Benefit img={'/imgBenefits/star.svg'}  />
            </div>
        </div>
       </div>
    )
}