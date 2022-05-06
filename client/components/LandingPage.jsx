import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function LandingPage() {
  const {logout, loginWithRedirect, isAuthenticated} = useAuth0()
  
  function handleLogin(event){
    event.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}`
    })
  }
  function handleRegister(event){
    event.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`
    })
  }
  return (
    <>
      <h1>PlanBuddy</h1>
      <h2>Helping you with the planning so you can focus on the learning!</h2>
      {!isAuthenticated && <div className='flex'>
        <button onClick={handleLogin}>Sign In</button>
        <button onClick={handleRegister}>New User</button>
      </div>}
    </>
  )
}

export default LandingPage
