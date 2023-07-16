import FollowUs from "./FollowUs";
import PayWith from "./PayWith";
import Adress from "./Adress";
// import { Neonderthaw } from "next/font/google";
import SubscriebNewsletter from "./SubscribeNewsletter";
import Buy from "./Buy";
// import CustomerService from "./CustomerService";
import Account from "./Account";
import Links from "./Links";


export default function Footer (){
    return(
        <div className=" flex bg-header-bg text-white justify-center items-center">
            <div className=" flex ">
                   <div className=" flex flex-col gap-4">
                    <div> TOP_PHONE</div>
                        <Adress/>
                        <FollowUs/>
                        <PayWith/>
                        <div> © Company - All rights reserved </div>
                   </div>
                    <div>
                        <SubscriebNewsletter/>
                        <div className=" flex gap-4">
                            <Buy/>
                            {/* <CustomerService/> */}
                            <Account/>
                            <Links/>
                        </div>
                    </div>
            </div>
        </div>
    )
}