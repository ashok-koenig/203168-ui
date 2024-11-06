import React, { useState } from 'react'
import ProductDetail, { ProductDetailProps } from './ProductDetail'

interface ProductListProps{
    children:any
    products: ProductDetailProps[]
}

export default function ProductList(props: ProductListProps) {
    const [totalCartCount, setTotalCartCount]=useState(0)
    const {children, products} = props

    const addTotalCartCount =()=>{
        setTotalCartCount((totalCartCount)=> totalCartCount + 1)
    }
  return (
    <div>
        <h1>Products List</h1>
        <h3>Total Cart Count: {totalCartCount}</h3>
        {children}
        {
            products.map((product)=>{
                return <ProductDetail key={product.id} id={product.id} title={product.title} category={product.category} price={product.price} discount={product.discount} addTotalCartCount={addTotalCartCount}/>
            })
        }
        
    </div>
  )
}
