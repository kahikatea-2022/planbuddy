import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTask } from '../actions/tasks'
import { useNavigate } from 'react-router-dom'

function VeteranView() {
  const user = useSelector((state) => state.user)
  const task = useSelector((state) => state.task)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //not returning the current task
  useEffect(() => {
    dispatch(fetchTask(Number(user.currentTask)))
  }, [])

  //site doesnt know what user.currentTask is
  function handleClickCont() {
    navigate(`/dailylearning/${user.currentTask}`)
  }

  function handleClickNew() {
    navigate('/goalsoverview')
  }

  return (
    <>
      <div className="blank-nav"></div>
      <button onClick={handleClickCont}>Continue with: {task?.taskName}</button>
      <button onClick={handleClickNew}>
        I'm learning something else today
      </button>
    </>
  )
}

// Todo - add logic for *current goal*
//  - add routes on the buttons
//  - add nav

export default VeteranView
