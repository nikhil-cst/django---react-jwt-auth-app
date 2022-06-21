import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// import { useAuth } from './useAuth'

export const ProtectedRoutes = () =>{
  // const { authenticated } = useAuth()

  const auth = localStorage.getItem('auth')

  return (auth ? <Outlet /> : <Navigate to ='/login' />)
}