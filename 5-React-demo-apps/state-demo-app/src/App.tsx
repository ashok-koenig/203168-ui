import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FriendsList from './components/FriendsList'
import Movie from './components/Movie'

function App() {
  const [count, setCount] = useState<number>(0)
  const [name, setName] = useState<string>('John')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
    const currentName = localStorage.getItem('name') || 'John'
    const currentCount = Number(localStorage.getItem('count') || "0")
    setName(currentName)
    setCount(currentCount)    
  }, [])

  useEffect(()=>{
    // console.log("useEffect called..."); 
    localStorage.setItem('count', String(count))   
  },[count])

  useEffect(()=>{
        localStorage.setItem('name', name)   
  },[name])

  return (
    <>
      <h1>Working with State management</h1>
      <button onClick={()=>setIsLoggedIn((status)=> !status)}>{isLoggedIn?'Logout':'Login'}</button>
      {/* <Movie />
      <FriendsList /> */}
      <hr/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <hr />
        <h3>Name: {name}</h3>
        <button onClick={()=>setName((name)=> name+" Peter")}>Change Name</button>
       </div>
    </>
  )
}

export default App
