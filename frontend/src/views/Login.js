import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../useAuth'
// import { useAuth } from '../useAuth'
import { apiCall } from '../_apiConfig/Apicall'

export const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const { login } = useAuth()

  if (localStorage.getItem('user')) {
    navigate('/')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const header = new Headers()
    header.append('Content-Type', 'application/json')

    const response = await apiCall(
      'accounts-api/login/',
      'POST',
      header,
      JSON.stringify({
        email: email,
        password: password,
      }),
    )
    const jsonobj = await response.json()

    if (response.status === 200) {
      let details = {
        userId: jsonobj.userId,
        firstName: jsonobj.firstName,
        lastName: jsonobj.lastName,
        email: jsonobj.email,
        accessToken: jsonobj.accessToken,
        refreshToken: jsonobj.refreshToken,
      }
      login(details)
      navigate('/')
    }
  }

  return (
    <div className='container mt-4'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control w-25" id="email" name='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control w-25" id="password" name='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
