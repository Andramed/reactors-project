export default function FollowUs (){
    return(
        <div className=" flex flex-col justify-center sm:justify-start  gap-2">
            <p className=" text-sm sm:text-lg lg:text-xl">Follow Us</p>
            <div className=" flex gap-2 justify-center sm:justify-start ">
                <img src="/imgFooter/fb.svg" alt="fb" />
                <img src="/imgFooter/insta.svg" alt="insta" />
                <img src="/imgFooter/twitter.svg" alt="twitter" />
            </div>
        </div>
    )
}