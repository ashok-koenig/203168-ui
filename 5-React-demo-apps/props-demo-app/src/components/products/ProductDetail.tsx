import React from 'react'

interface ProductDetailProps {
    title: string
    category: string
    price: number
}

export default function ProductDetail(props: ProductDetailProps) {
    // De-structuring values from props
    const {title, category, price} = props
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
        </table>
    </div>
  )
}
