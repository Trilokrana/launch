'use client'
import React from 'react'
import NavBar from './Components/NavBar'
import MainPage from './Components/MainPage'
import ProfileClient from './Components/UserProfile'
import { useUser } from '@auth0/nextjs-auth0/client';
import Login from './Components/Login'
const page = () => {
  const { user } = useUser()
  return (
    <div>
      {user ?
        (
          <div>
            <NavBar />
            <MainPage />
          </div>
        ) : <Login />}
    </div>
  )
}

export default page
