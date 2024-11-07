import React from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
    isLoggedIn: boolean
    children: any
}

export default function ProtectedRoute(props: ProtectedRouteProps) {
    const {isLoggedIn, children} = props
    if(!isLoggedIn){
        return <Navigate to='/login'/>;
    }
  return children;
}
