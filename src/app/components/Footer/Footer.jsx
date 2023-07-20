import FollowUs from "./FollowUs";
import PayWith from "./PayWith";
import Adress from "./Adress";
// import { Neonderthaw } from "next/font/google";
import SubscriebNewsletter from "./SubscribeNewsletter";
import Buy from "./Buy";
import Account from "./Account";
import Links from "./Links";


export default function Footer (){
    return(
        <div className=" flex justify-center sm:justify-start items-center sm:items-start text-center sm:text-left  px-10 pt-5 bg-header-bg text-white ">
                    <div className=" flex flex-col ">
                        <Adress/>
                        <FollowUs/>
                        <PayWith/>
                        <div className=" hidden md:flex"> © Company - All rights reserved </div>
                    </div>
                    <div className="  flex flex-col  gap-6">
                        <SubscriebNewsletter/>
                        <div className=" sm:flex gap-4">
                            <div className=" flex justify-around">
                                <Buy/>
                                <Account/>
                            </div>
                            <div className=" py-2 xs:pt-0">
                                <Links/>
                            </div>
                        </div>
                    </div>
            </div>
    )
}