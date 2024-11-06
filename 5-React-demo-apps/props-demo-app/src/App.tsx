import './App.css'
import ProductList from './components/products/ProductList'
// import MyClassComponent from './components/MyClassComponent'
// import MyFunctionalComponent from './components/MyFunctionalComponent'


function App() {  
  const products = [
    {id: 1, title: "iPhone 16", category: "SmartPhone", price: 76778},
    {id: 2, title: "iPhone 15", category: "SmartPhone", price: 56565},
    {id: 3, title: "iPhone 14", category: "SmartPhone", price: 45454}
  ]
  return (
    <>
     <h1>Working with Props - Products demo</h1>
     <ProductList products = {products}/>
     {/* <MyClassComponent />
     <MyFunctionalComponent /> */}
    </>
  )
}

export default App
