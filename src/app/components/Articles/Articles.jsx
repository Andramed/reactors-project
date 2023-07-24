import Article from "./Article";
import SeeArticles from "./SeeArticles";

export default function Articles (){
    return (
        <div className=" flex flex-col gap-6 items-center text-center px-10 py-4">
            <div className=" sm:flex  gap-2"> 
                <Article/>
                <Article/>
                <Article/>
            </div>
            <div>
                <SeeArticles/>
            </div>
        </div>
    )
}