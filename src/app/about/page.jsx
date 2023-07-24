import Fact from "./components/Fact";

Fact

const Page = () => {
    return (
        <div className=" flex flex-col text-center justify-center items-center px-10 py-10 gap-6">
            <div className=" h-1/2">
                <img className=" w-[100rem] h-[45rem]" src="/imgAbout/white.avif" alt="phones" />
            </div>
            <div className=" flex flex-col px-60 gap-4 py-20">
                <h1 className=" font-semibold text-left text-5xl">About Us</h1>
                <p className=" text-lg text-justify">Top_Phones was born in 2007 when two Hosts welcomed three guests to their San Francisco home, and has since grown to over 4 million Hosts who have welcomed 1.4 billion guest arrivals in almost every country across the globe. Every day, Hosts offer unique stays and experiences that make it possible for guests to connect with communities in a more authentic way.</p>
            </div>
            <div className=" flex flex-col gap-6 justify-center items-center text-center bg-slate-200 px-10 py-10 ">
                <h1 className=" font-bold text-5xl p-3 bg-white">Fast Facts about Phones & Smartphones</h1>
                <div className=" flex flex-wrap justify-center gap-4">
                    <Fact/>
                </div> 
            </div>
        </div>
    )
}
export default Page;