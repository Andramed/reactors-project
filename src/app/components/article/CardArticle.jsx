

export  function CardArticle(props) {
	console.log();
	const blackImage = props.article.color_image.silver
	return (
	<div className=''>CardArticle
		{
			blackImage.map((image) => {
				return <img src={image} alt="phone" key={image} />
			})
		}
	</div>
	
  )
}
