import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <div>
        <h1>Working with Forms</h1>
        <hr/>
        <Link to='/'>Basic form</Link> | 
        <Link to='/state-form'>State form</Link> | 
        <Link to='/ref-state-form'>Ref State form</Link> | 
        <Link to='/formik-form'>Formik form</Link> | 
        <Link to='/formik-yup-form'>Formik with Yup form</Link> | 
        <hr />
        <Outlet />
    </div>
  )
}
