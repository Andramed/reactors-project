import FollowUs from "./FollowUs";
import PayWith from "./PayWith";
import Adress from "./Adress";
import SubscriebNewsletter from "./SubscribeNewsletter";
import Buy from "./Buy";
import Account from "./Account";
import Links from "./Links";


export default function Footer (){
    return(
        <div className=" sm:flex  px-10 sm:px-15  lg:px-20  py-10 bg-header-bg text-white ">
                    <div className=" flex flex-col gap-2 justify-center text-center md:text-left ">
                        <Adress/>
                        <FollowUs/>
                        <PayWith/>
                        <div className=" hidden md:flex text-sm xxs:text-base  md:text-xl"> © Company - All rights reserved </div>
                    </div>
                    <div className=" -ml-44 flex flex-col gap-15 ">
                            <SubscriebNewsletter/>
                            <div className="flex justify-center text-center md:text-left gap-4">
                                <div className=" flex  gap-4">
                                    <Buy/>
                                    <Account/>
                                </div>
                                <div className="">
                                    <Links/>
                                </div>
                            </div>
                    </div>
            </div>
    )
}