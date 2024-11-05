import { useState } from 'react'
import './App.css'

function App() { 
  const welcome = <h1>Welcome to React</h1>
  const message = 'This is my Message'
  let num1 = 100
  let num2 = 200
  let show = false
  const nameList = [
    {id:1, firstName: 'John'},
    {id:2, firstName: 'Peter'},
    {id:3, firstName: 'Smith'},
    {id:4, firstName: 'Ana'}    
  ]
  const showNameList=()=>{
    if(nameList.length>0){
        return (<div>
        <h3>Name list</h3>
        <ol>
          {
            nameList.map((item)=>{
              return <li key={item.id}>{item.firstName}</li>
            })
          }
        </ol>
      </div>)
    }else{
      return <div>No Names</div>
    }
  }

  return (
    <div>
      {welcome}
      <hr />
      <p>{message}</p>
      <p>Sum of {num1} and {num2} is {num1 + num2}</p>
      <hr/>
      {showNameList()}
      {/* {nameList.length>0?<div>
        <h3>Name list</h3>
        <ol>
          {
            nameList.map((item)=>{
              return <li key={item.id}>{item.firstName}</li>
            })
          }
        </ol>
      </div>:<div>No Names</div>
      } */}
      
    </div>
  )
}

export default App
