export default function Newsletter (){
    return(
        <div className=" flex bg-btn-color "> 
            <div className=" flex flex-col justify-center">
                <h3 className=" font-bold">Subscribe to our newsletter and get -5 % off of your next purchase !</h3>
                <p> Insert your e-mail adress</p>
                <div className=" flex justify-around items-center gap-2">
                        <div>
                            <input className=" w-80 h-12 pt-5" type="text" />
                        </div>
                        <button className=" w-56 h-12 bg-header-bg text-white">Yes, I want -5%</button>
                </div>
            </div>
            <img src="/imgNewsletter/newsletter.svg" alt="news" />
        </div>
    )
}