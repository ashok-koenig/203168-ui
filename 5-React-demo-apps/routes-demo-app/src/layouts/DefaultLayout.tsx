import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <div>
        <p>Header / Navbar comes here...</p>
            <Outlet />
        <p>Footer content comes here...</p>
    </div>
  )
}
