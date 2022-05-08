//reference resources from db
//reference tasks from db
import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL, fetchGoals } from '../actions/goals'
import { useNavigate, useParams } from 'react-router-dom'
import { addResource, fetchResources } from '../actions/resources'
import { addTask, setTasks } from '../actions/tasks'
import { fetchSubGoal } from '../actions/subGoals'

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
  const {subgoalId} = useParams()
  const subgoal = useSelector(state=>state.subGoal)
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

  useEffect(()=>{
    dispatch(fetchSubGoal(Number(subgoalId)))
    dispatch(fetchResources(Number(subgoalId)))
  },[])
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
      <h1>{subgoal.subgoalName}</h1>
      <div>
        <p>Resources:</p>
        <ul>
          {resources.map(resource=>{
            return(
              <li key={resource.resourceName + resource.resourceId}><a>{resource.resource_name}</a></li>
            )
          })}
        </ul>
        <form>
          <label htmlFor="resource_name">Name of resource:</label>
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
      </div>
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
