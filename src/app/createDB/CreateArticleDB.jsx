'use client'

import React, { useState } from 'react'

export default function CreateArticleDB() {
	const [formData, setFormData] = useState({});
	const onChangeInput = (e) => {
		const {name, value} = e.target;
		setFormData((prevFormdat) => ({
			...prevFormdat,
			[name]: value
		}))
	}
	const createArticle = (e) => {
		e.preventDefault();
		console.log(formData); 
		let res = fetch('http://localhost:3000/api/insertDocument', { // de create un fetcher hook
			method: 'POST',
			body: JSON.stringify(formData),
		  //   headers: {
		  //     'Content-type': 'application/json; charset=UTF-8',
		  //   },
		  });
	  

	}
  return (
	<div >
		<form onSubmit={createArticle}>
			<div>
				<label> DB name</label>
				<br />
				<input onChange={onChangeInput}  className=' border' type="text" name='dbName' placeholder='articleDB' />
				
			</div>
			<div>
				<label> colection name</label>
				<br />
				<input onChange={onChangeInput} className=' border' type="text" name='collectionName' placeholder='articles_by_users' />
			</div>
			<div>
				<label> article title</label>
				<br />
				<input onChange={onChangeInput} className=' border' type="text" name='article_tittle' />
			</div>
			<div>
				<label> descriptions</label>
				<br />
				<input onChange={onChangeInput} className=' border' type="text" name='descriptions' />
			</div>
			<div>
				<label>data creation</label>
				<br />
				<input onChange={onChangeInput} className=' border' type="datetime-local"name='data_creation' />
			</div>
			<div>
				<label> authot</label>
				<br />
				<input onChange={onChangeInput} className=' border' type="text" name='author' />
			</div>
			<div>
				<label> link image</label>
				<br />
				<input onChange={onChangeInput} className=' border' type="text" name='link_image' />
				
			</div>
			<button> create</button>
		</form>
	</div>
  )
}
