import { format } from 'prettier'
import React, { useState , useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchReflections } from '../actions/reflections'
import { fetchResources } from '../actions/resources'
import { fetchTask } from '../actions/tasks'
import { updateTaskCompletion } from '../apis/tasks'
import PlanBuddy from './PlanBuddy'

function DailyLearning() {
// TODO Add funcitonality to buddy to accept on the fly reflections
// pass buddy ?task id?

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const task = useSelector(state=>state.task)
  const subgoal = useSelector(state=>state.subgoal)
  const resources = useSelector(state=>state.resources)
  const reflections = useSelector(state=>state.reflections)
  const {taskid} = useParams()

  const [checkboxState, setCheckboxState] = useState(false)
  useEffect(()=>{
    dispatch(fetchTask(Number(taskid)))
    

  }, [checkboxState])
  useEffect(()=>{
    dispatch(fetchResources(task.subgoalId))
    dispatch(fetchReflections(task.taskId))
    setCheckboxState(task.completed)
  }, [task])

  function endSessionHandler(e){
    e.preventDefault()
    navigate('/reflection/' + task.taskId)
    updateTaskCompletion(task, true).then(res=>{
      
    }).catch(console.error)
  }
  function checkboxHandler(task){
    setCheckboxState(!checkboxState)
    console.log('wut')
    // console.log(!checkboxState)
    updateTaskCompletion(task, !checkboxState)
  }
  return (
    <>
      <div className="subGoalCreator">
        <img className="pencilButtonImg" src="/images/Pencil.png"></img>
        <p className="pencilButtonText">**subgoal name**</p>
      </div>
      <h1> Task: </h1>
      <label>
        <input onChange={(e)=>checkboxHandler(task)} type={'checkbox'} defaultChecked={task.completed} />
        **Sit down and play some guitar **
      </label>
      <button onClick={endSessionHandler}>{task.completed?'Complete Task':'Finish Session'}</button>
      {/* refactor into own component */}
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
      {/* refactor into own component */}
        <span>Reflections:</span>
        <ul>
          {reflections.map(reflection=>{
            return(
              <li key={reflection.reflection + reflection.reflectionId}>{reflection.reflection.slice(0, 15) + '...'}</li>
            )
          })}
        </ul>
      </div>
      <PlanBuddy/>
    </>
  )
}

// need the logic to redirect upon ticking the textbox

export default DailyLearning
