import React, { useState } from 'react'

export default function FriendsList() {
    const [friends, setFriends] = useState(["John", "Ana", "July"])
    const handleAddName= (newFriend: string)=>{
        setFriends(((friends)=> [...friends, newFriend]))
    }
    const removeAFriend = (index:number)=>{
        setFriends((friends)=> friends.filter((f, i)=> i != index))
    }
  return (
    <div>
        <h3>Friends List</h3>
        <ol>
            {
                friends.map((name, index)=> <li key={index}>
                                            {name}
                                            <button onClick={()=>removeAFriend(index)}>Delete</button>
                                            </li>)
            }
        </ol>
        <button onClick={()=>handleAddName('Smith')}>Add Smith</button>
    </div>
  )
}
