import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect , useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PlanBuddy from './PlanBuddy'

function LandingPage() {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0()
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const [fadeOut, setFadeOut] = useState(false)
  // useEffect(() => {
  //   isAuthenticated
  //     ? setTimeout(() => {
  //         navigate(`/welcome/veteran`)
  //       }, 3000)
  //     : null
  // }, [])

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
  function clickToAdvance() {
    if(isAuthenticated){
    setFadeOut(true)
    return removeEventListener('click', clickToAdvance)
    } else {
      removeEventListener('click', clickToAdvance)
    }
  }
  document.addEventListener('click', clickToAdvance)

  function handleRedir(e){
    if(fadeOut){
    isAuthenticated
      ? navigate(`/welcome/veteran`)
      : null
    }
  }
  return (
    <>
      <img onAnimationEnd={handleRedir} className={`MainLogo ${fadeOut?'fade-out':''}`} src="/images/PlanBuddyLogo0.png"></img>
      <p className={fadeOut?'fade-out':''}>Helping you with the planning so you can focus on the learning!</p>
      {!isAuthenticated && (
        <div className={`buttons ${fadeOut?'fade-out':''}`}>
          <button onClick={handleLogin}>Sign In</button>
          <button onClick={handleRegister}>New User</button>
        </div>
      )}
    </>
  )
}

export default LandingPage
