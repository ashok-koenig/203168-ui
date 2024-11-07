import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './components/Home'
import About from './components/About'

function App() {  
  const router = createBrowserRouter([
    {
      path:'/',
      element: <DefaultLayout />,
      children:[
        {index: true, element: <Home />},
        {path: 'about', element: <About />}
      ]
    }
  ])
  return (<RouterProvider router={router} /> )
}

export default App
