import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTask } from '../actions/tasks'
import { useNavigate } from 'react-router-dom'
import PlanBuddy from './PlanBuddy'
import { addUserId } from '../auth0-utils'
import { updateUser } from '../actions/user'

function VeteranView() {
  const chatter = 'Hello, what are we learning today?'
  const user = useSelector((state) => state.user)
  const task = useSelector((state) => state.task)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //not returning the current task
  useEffect(() => {
    dispatch(fetchTask(Number(user.currentTask)))
    dispatch(updateUser(addUserId(user)))
  }, [user])

  //site doesnt know what user.currentTask is
  function handleClickCont() {
    navigate(`/dailylearning/${user.currentTask}`)
  }

  function handleClickNew() {
    navigate('/goals/' + user.id)
  }

  return (
    <>
      <div className="blank-nav"></div>
      {task?.taskName && (
        <button onClick={handleClickCont}>
          {' '}
          Continue with: {task.taskName}{' '}
        </button>
      )}
      <button onClick={handleClickNew}>
        {task?.taskName ? "I'm learning something else today" : 'Get Started!'}
      </button>
      <PlanBuddy id={1} message={chatter} />
    </>
  )
}

// Todo - add logic for *current goal*
//  - add routes on the buttons
//  - add nav

export default VeteranView
