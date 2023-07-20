'use client'

import { useProductContext } from '../hooks/useContext';

const Page = () => {

    const { cartItem, setCartItem } = useProductContext();

    
    console.log(cartItem + 'from page Brands');

    return (
        <div>
            <h1>Brands</h1>
        </div>
    )
}
export default Page;