import { useState } from "react"


function useCartCounter(initialValue: number){
    const [cartCount, setCartCount] = useState<number>(initialValue)
    const addCartCount = () =>{
        setCartCount((cartCount)=> cartCount + 1)
    }
    const clearCartCount = ()=>{
        setCartCount(0)
    }
    return {cartCount, addCartCount, clearCartCount}
}

export default useCartCounter