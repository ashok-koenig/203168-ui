import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicForm from './components/BasicForm'
import StateFrom from './components/StateFrom'
import RefStateForm from './components/RefStateForm'

function App() {
 
  return (
    <>
      {/* <BasicForm /> */}
      {/* <StateFrom /> */}
      <RefStateForm />
    </>
  )
}

export default App
