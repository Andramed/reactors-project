export default function NewProducts() {

    return ( 
        <div className='w-full py-14 px-16 flex justify-center items-center flex-col gap-2 bg-white'>
        <h2 className='flex justify-center font-bold'>New in our Shop</h2>
        <div className='flex text-xs gap-2 justify-center underline'>
            <div>Product1</div>
            <div>Product2</div>
            <div>Product3</div>
        </div>
        <div>
            <button className='bg-btn-color px-8 py-2 text-sm rounded w-9.5 h-3.2'>Shop</button>
        </div>
    </div>);
}