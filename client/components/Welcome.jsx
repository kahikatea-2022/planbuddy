import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

export default function Welcome() {
  const user = useSelector((state) => state.user)
  const { type } = useParams()
  const navigate = useNavigate()
  function handleRedirect() {
    if (type === 'new') navigate('/newgoal')
    if (type === 'veteran') navigate('/veteranview')
  }

  useEffect(() => {
    setTimeout(() => {
      handleRedirect()
    }, 3000)
  }, [])
  return (
    <>
      <p>Hi, {user.name}!</p>
      <p>I'm Buddy</p>
      <p>Let's get learning!</p>
      <p>you are {type} </p>
    </>
  )
}
