import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicForm from './components/BasicForm'
import StateFrom from './components/StateFrom'
import RefStateForm from './components/RefStateForm'
import FormikForm from './components/FormikForm'
import FormikYupForm from './components/FormikYupForm'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children:[
        {index: true, element: <BasicForm />},
        {path: 'state-form', element: <StateFrom />},
        {path: 'ref-state-form', element: <RefStateForm />},
        {path: 'formik-form', element: <FormikForm />},
        {path: 'formik-yup-form', element: <FormikYupForm />}
      ]
    }
  ])
 
  return ( <RouterProvider router={router}/> )
}

export default App
