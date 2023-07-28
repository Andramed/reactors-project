export default function NewProducts() {

    return ( 
        <div className='w-full py-20 px-16 flex justify-center items-center flex-col gap-2 bg-white'>
            <h2 className='flex justify-center text-base xs:text-xl md:text-3xl lg:text-5xl font-bold'>New in our Shop</h2>
            <div className='flex text-xs xxs:text-sm  md:text-xl gap-2 justify-center underline'>
                <div>Product1</div>
                <div>Product2</div>
                <div>Product3</div>
            </div>
            <div className=" flex justify-center">
                <button className= 'bg-btn-color w-9.5 font-semibold h-3.2 px-8 py-2 my-2 text-sm rounded'>Shop</button>
            </div>
    </div>
    );
}