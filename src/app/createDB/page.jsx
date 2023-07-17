'use client'
import React, { useState } from 'react';
import Search from './Search';
import GetData from './GetData';
import CreateArticleDB from './CreateArticleDB';
function transformDriveLink(value) {
	// const fileId = value.match(/\/d\/(.+?)\//)[1];
	// return `https://drive.google.com/uc?export=view&id=${fileId}`;
	return value
  }

export default function Page() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
	
    const { name, value } = event.target;
	
	if (value.includes('B,') ) {
		const valueArr = value.split(',');
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: valueArr,
		  }));
	} else if(value.includes(':h')) {
		
				
				const getImageColorLink = () => {
					let colorLinks = {}
					const valueColorLink = value.split(',');
					valueColorLink.forEach((color) => {
					const colorProduct = color.slice(0, color.indexOf(':h'))
					const linkArr = color.slice(color.indexOf(':h')+1).split(';').map((link) => transformDriveLink(link))
					colorLinks = {
						...colorLinks,
						[colorProduct]: linkArr
					}
					})
					return colorLinks
				}
				setFormData((prevFormData) => ({
					...prevFormData,
					[name]: getImageColorLink(),
				  }));
	}  else{
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		  }));
	}
    
  };
  

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('submitted');
    console.log(formData);
    let res = fetch('http://localhost:3000/api/insertDocument', {
      method: 'POST',
      body: JSON.stringify(formData),
	  headers: {
		"Content-type": "application/json",
	  },
    });
  };
 
  return (
    <div className=' flex pl-10'>
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
            name='type'
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
            name='brand'
            type='text'
            placeholder='Xiaomi/iphone or other'
          />
        </div>
		<div>
          <label>price</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            name='price'
            type='text'
          />
        </div>

		<div>
          <label>memory</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            name='memory'
            type='text'
			placeholder='introdu prin virgula daca sun mai multe'
          />
        </div>
		<div>
          <label>RAM</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            name='ram'
            type='text'
			placeholder='introdu pri virgula daca sun mai multe'
          />
        </div>
		<div>
          <label>resolution</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            name='resolution'
            type='text'
          />
        </div>
		<div>
          <label>color</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            name='color_image'
            type='text'
			placeholder='culloare:link;link;link,culoare....'
          />
        </div>
		<div>
          <label>data crearii</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            name='date'
            type='date'
          />
        </div>
		<div>
          <label>model</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            name='model'
            type='text'
          />
        </div>
		<div>
          <label>anul productie</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            name='year_production'
            type='text'
          />
        </div>
		<div>
          <label>model procesor</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            name='model_procesor'
            type='text'
          />
        </div>
		<div>
          <label>capacitate acumalator</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            name='acumulator'
            type='text'
          />
        </div>
		<div>
          <label>sistem de operare</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            name='operating_system'
            type='text'
          />
        </div>
		<div>
          <label>retea</label>
          <br />
          <input
            onChange={handleChange}
            className='border'
            name='network'
            type='text'
			placeholder='4G, 5G'
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
	  <Search />
	  < GetData />	
	  <div className=' ml-10'>
			<CreateArticleDB />
	  </div>

    </div>
  );
}