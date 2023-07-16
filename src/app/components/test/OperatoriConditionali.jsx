// import { useProductsSortedByPrice } from '@/app/hooks/useProductSortedByPrice';
import React, { useEffect, useState } from 'react'
import DataByPrice from './DataByPrice';

export default  function OperatoriConditionali() {
	const [operator, setOperators] = useState();
	// const [data, setData] = useState()
	
	const sendOperator = (e) => {
		setOperators( e.target.value);
		
		
	}
		
	
	const data =   useProductsSortedByPrice(operator);
	console.log(data);
	console.log(operator);
  return (
	<div>OperatoriConditionali

       <button value={'gt'} onClick={sendOperator}>de la mic la mare</button>
	   {/* <DataByPrice sorted={data} ></DataByPrice> */}
	</div>
  )
}
