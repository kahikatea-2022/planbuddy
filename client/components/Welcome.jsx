import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { thunkUpdateUser, updateUser } from '../actions/user'
import { addUserId } from '../auth0-utils'
import PlanBuddy from './PlanBuddy'

export default function Welcome() {
  const user = useSelector((state) => state.user)
  const { type } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function handleRedirect() {
    if (fadeOut) {
      if (type === 'new') navigate('/newgoal/new')
      if (type === 'veteran') navigate('/veteranview')
    }
  }
  useEffect(()=>{
    if(user.email === '') return
    return ()=> {dispatch(thunkUpdateUser(user))
      console.log(user)
    }
  },[user])
  function clickToAdvance() {
    setFadeOut(true)
    return removeEventListener('click', clickToAdvance)
  }
  document.addEventListener('click', clickToAdvance)
  const [fadeOut, setFadeOut] = useState(false)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
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
        <p className={fadeOut ? 'fade-out' : 'fade-in'}>
          {' '}
          {type != 'new' ? 'Welcome back,' : 'Welcome!'}{' '}
        </p>
        {type == 'new' && (
          <p className={fadeOut ? 'fade-out' : 'fade-in'}>I'm Buddy,</p>
        )}
        <p className={fadeOut ? 'fade-out' : 'fade-in'}>let's get learning.</p>
        <p className={fadeOut ? 'fade-out' : 'fade-in'}></p>
        <p className={fadeOut ? 'fade-out' : 'fade-in'}>
          Click anywhere to begin...
        </p>
      </div>
      <div className={`planbuddy-welcome ${fadeOut ? 'fade-out' : 'fade-in'}`}>
        <PlanBuddy />
      </div>
    </>
  )
}
