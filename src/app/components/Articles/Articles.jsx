import Article from "./Article";
import SeeArticles from "./SeeArticles";

export default function Articles (){
    return (
        <div className=" flex flex-col gap-4">
            <div className=" flex gap-2"> 
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