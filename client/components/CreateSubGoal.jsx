//reference resources from db
//reference tasks from db
import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL, fetchGoals } from '../actions/goals'
import { useNavigate, useParams } from 'react-router-dom'
import { addResource, fetchResources } from '../actions/resources'
import { addTask, fetchTasks, setTasks } from '../actions/tasks'
import { fetchSubGoal } from '../actions/subGoals'
import { addNewResource } from '../apis/resources'
import { addNewTask } from '../apis/tasks'

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
  const [checkboxState, setCheckboxState] = useState(false)
  const [inputStateResources, setInputStateResources] = useState({
    resourceName: '',
    url: '',
  })

  const [inputStateTasks, setInputStateTasks] = useState({
    taskName: '',
    completed: false,
    current: false,
    goalId: subgoal.goalId,
    subgoalId: subgoal.subgoalId,
    timeSpent: 0
  })

  useEffect(()=>{
    dispatch(fetchSubGoal(Number(subgoalId)))
    dispatch(fetchResources(Number(subgoalId)))
    dispatch(fetchTasks(Number(subgoalId)))
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
    const newResource = {...inputStateResources, goalId: subgoal.goalId, subgoalId: subgoal.subgoalId}
    addNewResource(newResource).then(res=>{
      const newId = res.newResourceId[0]
      dispatch(addResource({...newResource, resourceId: newId}))

    }).catch(console.error)
  }

  function submitHandlerTasks(event) {
    event.preventDefault()
    const newTask = {...inputStateTasks, goalId: subgoal.goalId, subgoalId: subgoal.subgoalId}
    addNewTask(newTask).then(res=>{
      const newId = res.newTaskId[0]
      dispatch(addTask({...newTask, taskId: newId}))
    }).catch(console.error)
    
  }
  function checkboxHandler(){
    setCheckboxState(!checkboxState)
    console.log(!checkboxState)
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
              <li key={resource.resourceName + resource.resourceId}><a href={resource.url}>{resource.resourceName}</a></li>
            )
          })}
        </ul>
        <form>
          <label htmlFor="resourceName">Name of resource:</label>
          <input
            type="text"
            id="resourceName"
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
        <ul>
          {tasks.map(task=>{
            return(
              <li key={task.taskName + task.taskId}>
                <input onChange={checkboxHandler} type={'checkbox'}/>{task.taskName}
              </li>
            )
          })}
        </ul>
        <input
          type="text"
          id="taskName"
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
