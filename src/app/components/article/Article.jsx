'use client'

import {CardArticle} from './CardArticle';



export  function Article({article}) {
	
	// const {img, information, dataCreation, articleTitle} = article
	// console.log(img, information, dataCreation, articleTitle);
  return (
	<div>
		<h1>
			Last articles 
		</h1>
		<CardArticle article = {article} />
		<button>See our articles</button>
	</div>
  )
}

