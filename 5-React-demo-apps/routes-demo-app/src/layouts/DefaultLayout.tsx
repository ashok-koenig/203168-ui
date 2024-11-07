import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

interface DefaultLayoutProps{
    isLoggedIn: boolean,
    handleLogin: ()=> void
}

export default function DefaultLayout(props: DefaultLayoutProps) {
    const {isLoggedIn, handleLogin} = props
    const navigate = useNavigate();
    // const handleLogin = ()=>{
    //     //Your validation logic comes here...
    //     navigate('/login')
    // }
  return (
    <div>
        <p>Header Content</p>
        <Link to='/'>Home</Link> | 
        <Link to='/about'>About</Link> |   
        <Link to='/blogs'>Blogs</Link> |   
        <Link to='/contact'>Contact</Link> |    
        <button onClick={handleLogin}>{isLoggedIn?'Logout':'Login'}</button>    
        <hr/> 
            <Outlet />
        <p>Footer content comes here...</p>
    </div>
  )
}
