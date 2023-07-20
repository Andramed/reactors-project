import PayWith from "../components/Footer/PayWith";

const Page = () => {
    return(
        <div>
            <div>
                <div>
                    <h3>Products</h3>
                    <div>
                    <h5>Product name</h5>
                    <p>description</p>
                    <div>
                        <button>delete</button>
                        <button>add to WishList</button>
                    </div>
                    </div>
                    <div>10$ still to get free delivery</div>
                    <button>Continue my shopping</button>
                </div>
                <div>
                    <h3>Price</h3>
                    <div>
                        18$
                    </div>
                </div>
                <div>
                    <h3>Quantity</h3>
                    <div>
                        1
                    </div>
                </div>
                <div>
                    <h3>Total</h3>
                    <div>
                        18$
                    </div>
                </div>
            </div>
            <div>
                <h5>Subtotal</h5>
                <h5>Subtotal</h5>
                <h5>Subtotal</h5>
                <h3>Total</h3>
                <h5>You Save</h5>
                <button>Continue to Payment</button>
            </div>
            <div>
                <p>Order now and get your products -estimation: </p>
                <p>Mon. 11.06 -Tue. 13.06 </p>
            </div>
            <PayWith/>
       </div>

    )
}
export default Page;