import React, { useState } from 'react'
import ProductDetail, { ProductDetailProps } from './ProductDetail'
import useCartCounter from '../../custom-hooks/useCartCounter'

interface ProductListProps{
    children:any
    products: ProductDetailProps[]
}

export default function ProductList(props: ProductListProps) {
    // const [totalCartCount, setTotalCartCount]=useState(0)
    const {children, products} = props
    let {cartCount: totalCartCount, addCartCount: addTotalCartCount} = useCartCounter(0)
    // const addTotalCartCount =()=>{
    //     setTotalCartCount()
    // }
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
