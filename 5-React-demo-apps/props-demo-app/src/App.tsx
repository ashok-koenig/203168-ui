import { createContext, useState } from 'react';
import './App.css'
import ProductList from './components/products/ProductList'
// import MyClassComponent from './components/MyClassComponent'
// import MyFunctionalComponent from './components/MyFunctionalComponent'

interface IOffer {
  offerPercentage: number
  offerMessage: string
}

export const Offer = createContext<IOffer>({offerPercentage: 0, offerMessage: 'No message'})
export const Data = createContext("Initial data")

function App() {  
  console.log(useState(0));
  const offerData:IOffer = {offerPercentage:10, offerMessage: "Additional Offer"};
  const products = [
    {id: 1, title: "iPhone 16", category: "SmartPhone", price: 76778, discount: true},
    {id: 2, title: "iPhone 15", category: "SmartPhone", price: 56565},
    {id: 3, title: "iPhone 14", category: "SmartPhone", price: 45454}
  ]
  const handleClick = (msg: string)=>{alert("Button click works..."+ msg)}
  return (
    <>
    <button onClick={()=>handleClick("Welcome")}>Click me</button>
     <h1>Working with Props - Products demo</h1>
     <Offer.Provider value={offerData}>
      <Data.Provider value='Actual data'>
         <ProductList products = {products}>
          <h1>Special Offer: 20%</h1>
        </ProductList>
      </Data.Provider>
       
     </Offer.Provider>
    
     {/* <MyClassComponent />
     <MyFunctionalComponent /> */}
    </>
  )
}

export default App
