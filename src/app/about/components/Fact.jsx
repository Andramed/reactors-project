
// import facts from '../about/components/facts.json'
import facts from './facts.json'
export default function Fact() {

    return (
   <>
         {Object.entries(facts).map((fact, index) => {
            return (
                <div className=' flex justify-around flex-col rounded-md w-80 h-60 text-justify p-6 gap- 4 shadow-xl overlay-white bg-white opacity-80 ' key={index}>
                   <div className=' font-bold text-xl'>
                        {fact[1][0]} 
                   </div>
                    <div className=' text-base '>
                        {fact[1][1]}

                    </div>
                </div>
            );
        })}
   </>
        
    )

}