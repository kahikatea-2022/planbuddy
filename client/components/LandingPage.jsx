import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PlanBuddy from './PlanBuddy'

function LandingPage() {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0()
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    isAuthenticated
      ? setTimeout(() => {
          navigate(`/welcome/veteran`)
        }, 3000)
      : null
  }, [])

  function handleLogin(event) {
    event.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/welcome/veteran`,
    })
  }
  function handleRegister(event) {
    event.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
      screen_hint: 'signup',
    })
  }

  return (
    <>
      <img className="MainLogo" src="/images/PlanBuddyLogo0.png"></img>
      <p>Helping you with the planning so you can focus on the learning!</p>
      {!isAuthenticated && (
        <div className="buttons">
          <button onClick={handleLogin}>Sign In</button>
          <button onClick={handleRegister}>New User</button>
        </div>
      )}
    </>
  )
}

export default LandingPage
