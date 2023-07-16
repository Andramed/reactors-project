import Benefit from "./Benefit";

export default function OurBenefits () {

    return (
       <div className="  bg-header-bg items-center text-white">
         <h1 className=" flex justify-center text-5xl ">Our benefits !</h1>
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