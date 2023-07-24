
'use client'
import Adress from "../components/Footer/Adress"
import FollowUs from "../components/Footer/FollowUs"
import PayWith from "../components/Footer/PayWith"
import SubscriebNewsletter from "../components/Footer/SubscribeNewsletter"
import Buy from "../components/Footer/Buy"
import Account from "../components/Footer/Account"
import Links from "../components/Footer/Links"

export default function Page (){
    return(
            <div className=" sm:flex bg-header-bg text-white py-6 px-10 ">
                    <div className=" flex flex-col">
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
