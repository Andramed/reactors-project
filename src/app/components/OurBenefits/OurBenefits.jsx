import Benefit from "./Benefit"
export default function OurBenefits () {

    return (
        <div className=" flex flex-col bg-header-bg items-center text-center text-white my-4 px-10">
            <h1 className=" text-2xl xs:text-3xl md:text-4xl lg:text-5xl  py-4 sm:py-8">Our benefits !</h1>
            <div className=' sm:flex gap-6'>
                <div className="lg:flex ">
                    <Benefit img ={'/imgBenefits/hour.svg'} />
                    <Benefit img={'/imgBenefits/check.svg'} />
                </div>
                <div className=" lg:flex ">
                    <Benefit img={'/imgBenefits/manufacturer.svg'}  />
                    <Benefit img={'/imgBenefits/star.svg'}  />
                </div>
            </div>
        </div>
    )
}