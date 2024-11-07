import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function BlogLayout() {
  return (
    <div>
        <p>Featured post comes here...</p>
        <Link to='/blogs'>All Blog</Link> |
        <Link to='/blogs/add'>Add New Blog</Link> |
        <Outlet />
    </div>
  )
}
