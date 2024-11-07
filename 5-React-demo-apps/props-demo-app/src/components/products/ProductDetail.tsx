import React, { useState } from 'react'
import PromoOffer from './PromoOffer'
import useCartCounter from '../../custom-hooks/useCartCounter'

export interface ProductDetailProps {
    id: number
    title: string
    category: string
    price: number
    discount?: boolean
    addTotalCartCount?: ()=>void
}

export default function ProductDetail(props: ProductDetailProps) {
    // De-structuring values from props
    const {title, category, price, discount= false, addTotalCartCount = ()=>{}} = props
    // let cartCount = 0;
    // const [cartCount, setCartCount] = useState(0)
    // const handleAddToCart = () =>{
    //   setCartCount((count)=> count + 1)   
    //    addTotalCartCount();
    // }
    let {cartCount: cartCount, addCartCount: handleAddToCart} = useCartCounter(0)

  return (

    <div>
        <table border={1}>
            <tr>
                <td>Product Title</td>
                <th>{title}</th>
            </tr>
            <tr>
                <td>Product Category</td>
                <th>{category}</th>
            </tr>
            <tr>
                <td>Product price</td>
                <th>{price}</th>
            </tr>
            {discount && <PromoOffer />}
            <tr>
                <td>
                    Count: {cartCount}
                </td>
                <td>
                    <button onClick={()=>{handleAddToCart(); addTotalCartCount();}}>Add to Cart</button>
                </td>
            </tr>
        </table>
    </div>
  )
}
