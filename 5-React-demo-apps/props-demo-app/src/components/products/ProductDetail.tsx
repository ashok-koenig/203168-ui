import React from 'react'
import PromoOffer from './PromoOffer'

export interface ProductDetailProps {
    id: number
    title: string
    category: string
    price: number
    discount?: boolean
}

export default function ProductDetail(props: ProductDetailProps) {
    // De-structuring values from props
    const {title, category, price, discount= false} = props
    let cartCount = 0;
    const handleAddToCart = () =>{
        cartCount++
        console.log(cartCount);        
    }
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
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </td>
            </tr>
        </table>
    </div>
  )
}
