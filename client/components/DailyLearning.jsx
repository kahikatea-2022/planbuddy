import { format } from 'prettier'
import React, { useState , useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchResources } from '../actions/resources'
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
  useEffect(()=>{
    dispatch(fetchResources(task.subgoalId))
  }, [task])
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
          {resources.map(resource=>{
            return(
              <li key={resource.resourceName + resource.resourceId}><a href={resource.url}>{resource.resourceName}</a></li>
            )
          })}
        </ul>
      </div>
      <div className='left'>
        <span>Reflections:</span>
        <ul>
          {reflections.map(reflection=>{
            return(
              <li key={reflection.reflection + reflection.reflectionId}>{reflection.reflection.slice(15) + '...'}</li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

// need the logic to redirect upon ticking the textbox

export default DailyLearning
