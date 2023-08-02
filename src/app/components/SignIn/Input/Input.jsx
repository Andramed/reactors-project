import React, { useState } from 'react'
import styles from './input.module.css'

export default function InputComponent({destination, showPassword, placeHolder}) {
	console.log(showPassword);
  return (
	<div className={`${styles.inputGroup} `} >
		{destination === 'password' ? <input name={destination} type={showPassword? 'text' : 'password'} required autoComplete="off"/> : <input name={destination} type="text" required autoComplete="off"/>}
		
		<label htmlFor={destination}>{placeHolder}</label>
	</div>
  )
}
