//reference resources from db
//reference tasks from db
import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL, fetchGoals } from '../actions/goals'
import { useNavigate } from 'react-router-dom'
import { addResource } from '../actions/resources'
import { addTask, setTasks } from '../actions/tasks'

//Steps:
//Create an add resources form
//create an add tasks form
//add the input to state

function CreateSubGoal() {
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const resources = [
  //   {
  //     resource_name: 'youtube',
  //     url: 'www.youtube.com',
  //   },
  //   {
  //     resource_name: 'udemy',
  //     url: 'www.udemy.com',
  //   },
  // ]

  // const tasks = [
  //   {
  //     subgoal_name: 'learn C major scale',
  //     completed: false,
  //     current: true,
  //   },
  //   {
  //     subgoal_name: 'learn D major scale',
  //     completed: false,
  //     current: false,
  //   },
  // ]

  const resources = useSelector((state) => state.resources)
  const tasks = useSelector((state) => state.tasks)
  console.log(resources)

  const [inputStateResources, setInputStateResources] = useState({
    resource_name: '',
    url: '',
  })

  const [inputStateTasks, setInputStateTasks] = useState({
    name: '',
    completed: false,
    current: false,
  })

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
  }

  function submitHandlerResources(event) {
    event.preventDefault()
    dispatch(addResource(inputStateResources))
  }

  function submitHandlerTasks(event) {
    event.preventDefault()
    dispatch(addTask(inputStateTasks))
  }

  // useEffect(() => {
  //   dispatch(setTasks())
  // }, [])
  // console.log('resourcestate', resources.resource_name)
  return (
    <>
      <h1>Create SubGoal</h1>
      <form>
        <label htmlFor="resource_name">Resources for your learning:</label>
        <input
          type="text"
          id="resource_name"
          onChange={handleFormResources}
          value={inputStateResources.resource_name}
        ></input>
        <label htmlFor="url">Link to resource:</label>
        <input
          type="text"
          id="url"
          onChange={handleFormResources}
          value={inputStateResources.url}
        ></input>
        <button onClick={submitHandlerResources}>Add</button>
      </form>
      {/* list to render the resources*/}
      {/* <ul>
        <li>{resources.resource_name}</li>
      </ul> */}
      <form>
        <h2>Great work, now add your first tasks</h2>
        <input
          type="text"
          id="name"
          value={inputStateTasks.name}
          onChange={handleFormTasks}
        ></input>
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
