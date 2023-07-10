'use client'
import React, { useState } from 'react';


export default function Page() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('submitted');
    console.log(formData);
    // Make a fetch request or perform your desired action with the form data
    // Example fetch request
    let res = fetch('http://localhost:3000/api/createdb', {
      method: 'POST',
      body: JSON.stringify(formData),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    });
	// res = await res.json()
    
  };
 
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>name of Data Base</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            type='text'
            name='dbName'
            id='dbName'
			
          />
        </div>
        <div>
          <label>name of Collection</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            type='text'
            name='collectionName'
            id='collectionName'
          />
        </div>
        <div>
          <label>Type of phone</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            type='text'
            name='typeOfPhone'
            id='type'
            placeholder='smart/classic'
          />
        </div>
        <div>
          <label>insert brand</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            name='phone_brand'
            type='text'
            placeholder='Xiaomi/iphone or other'
          />
        </div>
		<div>
          <label>memory phone</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            name='phone_memory'
            type='text'
            placeholder='Xiaomi/iphone or other'
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}