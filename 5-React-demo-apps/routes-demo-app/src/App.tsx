import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Contact from './components/Contact'
import BlogLayout from './layouts/BlogLayout'
import BlogList from './components/blogs/BlogList'
import AddBlog from './components/blogs/AddBlog'
import BlogPost from './components/blogs/BlogPost'

function App() {  
  const router = createBrowserRouter([
    {
      path:'/',
      element: <DefaultLayout />,
      errorElement: <NotFound />,
      children:[
        {index: true, element: <Home />},
        {path: 'about', element: <About />},
        {path: 'contact', element: <Contact />},
        {path: 'blogs', element: <BlogLayout />, children:[
          {index: true, element: <BlogList />},
          {path: 'add', element: <AddBlog />},
          {path: ':id', element: <BlogPost />}
        ]}
      ]
    },
    // {
    //   path:'/blogs',
    //   element: <BlogLayout />
    // }
  ])
  return (<RouterProvider router={router} /> )
}

export default App
