import './App.css'
import ProductDetail from './components/products/ProductDetail'
// import MyClassComponent from './components/MyClassComponent'
// import MyFunctionalComponent from './components/MyFunctionalComponent'

function App() {
  

  return (
    <>
     <h1>Working with Props - Products demo</h1>
     <ProductDetail title="iPhone 16" category="Smartphone" price={67678}/>
     <ProductDetail title="iPhone 15" category="Smartphone" price={56767}/>
     <ProductDetail title="iPhone 14" category="Smartphone" price={45678}/>
     {/* <MyClassComponent />
     <MyFunctionalComponent /> */}
    </>
  )
}

export default App
