'use client'
import React, { useState } from 'react'

export default function Search() {
	const [searchQuery, setSearchQuery] = useState();

	const onchangeSearch = (e) => {
		const {value} = e.target;
		
		setSearchQuery(value)
	}


	const handleSearch = (e) => {
		e.preventDefault();
		
		console.log(searchQuery);
		let res = fetch('api/findDocument', {
			method: 'POST',
			body: JSON.stringify(searchQuery),
		 
		  });
	}
  return (
	<div>
		<form onSubmit={handleSearch}>
			<label> search a document </label> <br />
			<input className=' border' onChange={onchangeSearch} type="text" name="searchQuery" id="search" />
			<button>Search</button>
	  	</form>
	</div>
  )
}
