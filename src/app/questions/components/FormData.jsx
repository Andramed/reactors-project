'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast,  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormData() {
  const [formData, setFormData] = useState({});
  const[responseServer, setResponseServer] = useState(null);

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
	console.log(formData);
      const senDataToApi = async () => {
         try {
          const res = await axios({
            url: '/api/postFormData',
            data: formData,
            method: 'POST',
          })
         setResponseServer(res.data)
         } catch (error) {
          console.error(error);
         }
      }
      senDataToApi()
	  const sendEmail = async () => {
		try {
			const res = await axios({
				url:'api/nodemailer',
				data: formData,
				method: 'POST'
			})
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	  }
	  sendEmail();
    };

   useEffect(() => {
    console.log('sa exutata');
    if (responseServer) {
      toast.success(responseServer.message)

    }
   }, [responseServer])

  return (
    <div>
      <div className=' flex flex-col gap-10'>
        <h3 className=' font-semibold text-xl'>Do you have any questions?</h3>
        <form onSubmit={(e) => handleForm(e)}>
          <div className=' flex flex-col text-lg gap-2 bg-slate-50'>
            <label> Name</label>
            <input name='name' onChange={(e) => handleInput(e)} className='border-solid border-2 rounded' type="text" />
            <label>Last Name</label>
            <input name='last_name' onChange={(e) => handleInput(e)} className='border-solid border-2 rounded' type="text" />
            <label> Email</label>
            <input name='email' onChange={(e) => handleInput(e)} className='border-solid border-2 rounded' type="text" />
            <label> Object</label>
            <input name='object' onChange={(e) => handleInput(e)} className='border-solid border-2 rounded' type="text" />
            <label> Message</label>
            <textarea name='message' onChange={(e) => handleInput(e)} className='border-solid border-2 rounded w-80 h-24 p-2' type="text" />
            <button className='bg-btn-color w-9.5 h-3.2 px-8 py-2 text-sm rounded'>Send</button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}