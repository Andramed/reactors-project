import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectPayment from './SelectPayment';

export default function PaymentFormModal (props){ 
    const {isOpen, onClose, onSubmit } = props
    

    const handleClose = () => {
        onClose();
      };
    
      const handleSubmit = () => {
        onSubmit();
        onClose();
      };
    
      if (!isOpen) return null;

  return (
    <div className=" fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className=" flex flex-col bg-white gap-2 p-6 w-[30%] rounded-md z-10">
        <div className="flex flex-col gap-2 p-2">
        <div className="flex justify-end ">
          <button onClick={handleClose} className=" text-gray-950  p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.293 10l4.647-4.646a.5.5 0 0 0-.708-.708L11.585 9.293 6.938 4.646a.5.5 0 0 0-.708.708L10.293 10l-4.647 4.646a.5.5 0 0 0 .708.708L11.585 10.707l4.647 4.647a.5.5 0 0 0 .708-.708L12.293 10z"
              />
            </svg>
          </button>
        </div>
          <h2 className=' text-lg font-semibold'>Payment Form</h2>
          <div>
            <h3 className=' text-base'>How would like to pay?</h3>
            <SelectPayment/>
          </div>
          <p className=' text-base font-semibold pt-2'>Enter your payment details:</p>
        </div >
        <div className=' flex flex-col text-base '>
            <input type="text" placeholder="Name on card" className=" p-2" />
            <input type="text" placeholder="Card number" className="p-2" />
            <input type="text" placeholder="Expiration date" className="p-2" />
            <div className=' w-full flex flex-col  items-center '>
                <button onClick={handleSubmit} className="border-2 border-green-900 bg-header-bg text-white p-1 w-full m-2">Pay</button>
            </div>
        </div>
      </div>
    </div>
  );
};

