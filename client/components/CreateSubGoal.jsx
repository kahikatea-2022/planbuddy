//reference resources from db
//reference tasks from db
import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL, fetchGoals } from '../actions/goals'
import { useNavigate } from 'react-router-dom'
import { addResource } from '../actions/resources'
import { addTask } from '../actions/tasks'

//Steps:
//Create an add resources form
//create an add tasks form
//add the input to state

function CreateSubGoal() {
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const resources = [
    {
      resource_name: 'youtube',
      url: 'www.youtube.com',
    },
    {
      resource_name: 'udemy',
      url: 'www.udemy.com',
    },
  ]

  const tasks = [
    {
      subgoal_name: 'learn C major scale',
      completed: false,
      current: true,
    },
    {
      subgoal_name: 'learn D major scale',
      completed: false,
      current: false,
    },
  ]

  const [inputStateResources, setInputStateResources] = useState(resources)

  const [inputStateTasks, setInputStateTasks] = useState(tasks)

  const handleFormResources = (event) => {
    setInputStateResources({
      ...inputStateResources,
      [event.target.id]: event.target.value,
    })
    console.log(inputStateResources)
  }

  const handleFormTasks = (event) => {
    setInputStateTasks({
      ...inputStateTasks,
      [event.target.id]: event.target.value,
    })
    console.log(inputStateTasks)
  }

  function submitHandlerResources(event) {
    if (event.code === 'Enter') {
      dispatch(addResource(inputStateResources))
      console.log('submitHandler')
    }
  }

  function submitHandlerTasks(event) {
    if (event.code === 'Enter') {
      dispatch(addTask(inputStateTasks))
      console.log('submitHandlerTasks')
    }
  }

  return (
    <>
      <h1>Create SubGoal</h1>
      <form>
        <label htmlFor="resource_name">Resources for your learning:</label>
        <input type="text" onChange={handleFormResources}></input>
        <label htmlFor="url">Link to resource:</label>
        <input type="text" onChange={handleFormResources}></input>
        <button onClick={submitHandlerResources}>Add</button>
      </form>
      <form>
        <h2>Great work, now add your first tasks</h2>
        <input type="text" onChange={handleFormTasks}></input>
        <button onClick={submitHandlerTasks}>Add</button>
      </form>
    </>
  )
}
export default CreateSubGoal

{
  /*
 subgoal_id: 1,
      goal_id: 1,
      subgoal_name: 'learn C major scale',
      reward_id: 1,
      completed: false,
      current: true

{
      resource_id: 1,
      goal_id: 1, 
      subgoal_id: 1,
      resource_name: 'youtube',
      url: 'www.youtube.com'
    }, 

*/
}
