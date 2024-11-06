import React from 'react'
import ProductDetail, { ProductDetailProps } from './ProductDetail'

interface ProductListProps{
    children:any
    products: ProductDetailProps[]
}

export default function ProductList(props: ProductListProps) {
    const {children, products} = props
  return (
    <div>
        <h1>Products List</h1>
        {children}
        {
            products.map((product)=>{
                return <ProductDetail key={product.id} id={product.id} title={product.title} category={product.category} price={product.price} discount={product.discount}/>
            })
        }
        
    </div>
  )
}
