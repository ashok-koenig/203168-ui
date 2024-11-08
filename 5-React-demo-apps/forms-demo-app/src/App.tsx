import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicForm from './components/BasicForm'
import StateFrom from './components/StateFrom'
import RefStateForm from './components/RefStateForm'
import FormikForm from './components/FormikForm'
import FormikYupForm from './components/FormikYupForm'

function App() {
 
  return (
    <>
      {/* <BasicForm /> */}
      {/* <StateFrom /> */}
      {/* <RefStateForm /> */}
      {/* <FormikForm /> */}
      <FormikYupForm />
    </>
  )
}

export default App
