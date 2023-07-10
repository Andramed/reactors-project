

export  function CardArticle({article}) {
	// console.log(article);
	const {img, information, datacreation, articleTitle} = article
  return (
	<div>CardArticle
		<img src={img} alt="" />
	</div>
	
  )
}
