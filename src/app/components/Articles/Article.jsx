export default function Article (){
    return(
        <div className=" flex flex-col gap-4">
            <div>
                <img src="/imgArticles/article1.jpg" alt="article" />
            </div>
            <div className=" flex flex-col gap-4">
                <div>
                    name data
                </div>
                <div className=" gap-4">
                    <h3 className=" font-bold">Article Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat lacus...</p>
                </div>
                <div>
                    <a className=" underline" href="#" >Read the article</a>
                </div>
            </div>
        </div>
    )
}