import Link from "next/link";

export default function Cart (){
    return(
        <div className=" gap-1 xxs:gap-2 flex justify-center items-center ml-2 xxs:ml-4 ">
                <img src="/imgHeader/shop.svg" alt="shop" />
                <Link href={"/cart"}>Cart</Link>
        </div>
    )
}
