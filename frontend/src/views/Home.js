import React from 'react'
import { useAuth } from '../useAuth'

export const Home = () => {
  const { authenticated } = useAuth()

  return (
    <div className='container mt-4'>
      {authenticated ?(
        <div>Home {authenticated.firstName}{' '}{authenticated.lastName}</div>
      ):(
        <div>Home</div>
      )}
    </div>
  )
}
