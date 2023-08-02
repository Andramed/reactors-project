import React from 'react';

const EmptyCart = () => {
  return (
    <div className="flex items-center justify-center w-[80%]  ">
      <div className="max-w-md bg-white border border-gray-300 p-8 rounded-lg shadow-lg">
        <img className='w-full' src="/emptyCart/emptyCart.png" alt="empty cart" />
		<h2 className="text-2xl font-semibold mb-4">Empty Cart</h2>
       <div className=' flex gap-3 items-center '>
		<p className="text-gray-600">Your shopping cart is empty. Add products to continue shopping.</p>
			<a href="/products"> 
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:fill-btn-color hover:w-12 hover:h-12">
				<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
			</svg>
			</a>
	   </div>
      </div>
    </div>
  );
};

export default EmptyCart;