import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import PlanBuddy from './PlanBuddy'

export default function Welcome() {
  const user = useSelector((state) => state.user)
  const { type } = useParams()
  const navigate = useNavigate()
  function handleRedirect() {
    if (fadeOut) {
      if (type === 'new') navigate('/newgoal/new')
      if (type === 'veteran') navigate('/veteranview')
    }
  }
  const [fadeOut, setFadeOut] = useState(false)

  window.addEventListener('mouseup', () => {
    setFadeOut(!fadeOut)
  })

  // useEffect(() => {
  //   onmouseup(setFadeOut(!fadeOut))
  //   // setTimeout(() => {
  //   //   setFadeOut(!fadeOut)
  //   //   // handleRedirect()
  //   // }, 3000)
  // }, [])

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div className="WelcomeMessage">
        <h1
          className={fadeOut ? 'fade-out' : 'fade-in'}
          onAnimationEnd={handleRedirect}
        >
          Hi {capitalizeFirstLetter(user.name)}!
        </h1>
        <p className={fadeOut ? 'fade-out' : 'fade-in'}>I'm Buddy</p>
        <p className={fadeOut ? 'fade-out' : 'fade-in'}>Let's get learning!</p>
        <p className={fadeOut ? 'fade-out' : 'fade-in'}>
          Click on me at any time for help and the menu
        </p>
        <p className={fadeOut ? 'fade-out' : 'fade-in'}>you are {type} </p>
        <p className={fadeOut ? 'fade-out' : 'fade-in'}>
          Click anywhere to begin!
        </p>
      </div>
      <div className="planbuddy-welcome">
        <PlanBuddy />
      </div>
    </>
  )
}
