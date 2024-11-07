import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <div>
        <p>Header Content</p>
        <Link to='/'>Home</Link> | 
        <Link to='/about'>About</Link> |   
        <Link to='/blogs'>Blogs</Link> |   
        <Link to='/contact'>Contact</Link> |        
        <hr/> 
            <Outlet />
        <p>Footer content comes here...</p>
    </div>
  )
}
