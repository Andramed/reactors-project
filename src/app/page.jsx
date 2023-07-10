
'use client'
import dataArticle from '../../public/dataForArticle/article';
import Article from './components/article';


export default function Home() {
	console.log(dataArticle);
  return (
  
		<>
			{ dataArticle.map((article) => 
				 <Article article={article} key={article.id} />
			)}
		</>
  
  )
}
