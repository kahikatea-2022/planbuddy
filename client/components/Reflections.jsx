import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux'
// import { addGoal, ADD_GOAL, fetchGoals } from '../actions/goals'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchSubGoal } from '../actions/subGoals'
import { fetchTask } from '../actions/tasks'
import { addNewReflection } from '../apis/reflections'
// import { addResource } from '../actions/resources'
// import { addTask, setTasks } from '../actions/tasks'

function Reflections() {
const navigate = useNavigate()
const dispatch = useDispatch()
const task = useSelector(state=>state.task)
const subgoal = useSelector(state=>state.subgoal)
const {taskId} = useParams()

const [reflection, setReflection] = useState('')

useEffect(()=>{
  dispatch(fetchTask(Number(taskId)))
}, [])

useEffect(()=>{
  dispatch(fetchSubGoal(task.subgoalId))
}, [task])


function inputHandler(e){
  setReflection(e.target.value)
  console.log(reflection)
}

function logoutAndComplete(e){
  e.preventDefault()
  const newReflection = {
    subgoalId: subgoal.subgoalId,
    taskId: task.taskId,
    reflection: reflection
  }
  addNewReflection()
}

function toGoalsAndComplete(e){
  e.preventDefault()
  
}
  return (
    <>
      <h1>Reflections</h1>
      <div className="subGoalCreator">
        {/* <a href='' > */}
        <img src="/images/Pencil.png"></img>
        <p>{task.taskName}</p>
        {/* </a> */}
      </div>
      <textarea onChange={inputHandler} value={reflection} rows="5" cols="50"></textarea>
      <button onClick={logoutAndComplete}>Complete Reflection and Log out</button>
      <button onClick={toGoalsAndComplete}>Complete Reflection and return to learning plan</button>
    </>
  )
}

export default Reflections

//to do ---
//Nav component
//Prompt text for reflection: What went well, what didn't go well, what do you need to work on?
//Buddy could say the above ^
