import { format } from 'prettier'
import React, { useState , useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchTask } from '../actions/tasks'

function DailyLearning() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const task = useSelector(state=>state.task)
  const subgoal = useSelector(state=>state.subgoal)
  const resources = useSelector(state=>state.resources)
  const reflections = useSelector(state=>state.reflections)
  const {taskid} = useParams()

  useEffect(()=>{
    dispatch(fetchTask(Number(taskid)))

  }, [])
  return (
    <>
      <div className="subGoalCreator">
        <img className="pencilButtonImg" src="/images/Pencil.png"></img>
        <p className="pencilButtonText">**subgoal name**</p>
      </div>
      <h1> Task: </h1>
      <label>
        <input type="checkbox" />
        **Sit down and play some guitar **
      </label>
      <div className='left'>
        <span>Resources:</span>
        <ul>

        </ul>
      </div>
    </>
  )
}

// need the logic to redirect upon ticking the textbox

export default DailyLearning
