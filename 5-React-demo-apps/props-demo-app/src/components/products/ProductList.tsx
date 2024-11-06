import React from 'react'
import ProductDetail, { ProductDetailProps } from './ProductDetail'

interface ProductListProps{
    products: ProductDetailProps[]
}

export default function ProductList(props: ProductListProps) {
    const {products} = props
  return (
    <div>
        <h1>Products List</h1>
        {
            products.map((product)=>{
                return <ProductDetail key={product.id} id={product.id} title={product.title} category={product.category} price={product.price}/>
            })
        }
        
    </div>
  )
}
