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
import { addNewTask, updateTaskCompletion } from '../apis/tasks'
import { updateSubgoalById } from '../apis/subGoals'
import { updateCurrentTask } from '../apis/users'
import { ResourcesList } from './ResourcesList'
import { getGoalsByUserId } from '../apis/goals'
import PlanBuddy from './PlanBuddy'


//Steps:
//Create an add resources form
//create an add tasks form
//add the input to state

function CreateSubGoal({first, schugl}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  if(schugl === "unga bungas") navigate('/')
  const {subgoalId} = useParams()
  const user = useSelector(state=>state.user)
  const subgoal = useSelector(state=>state.subGoal)
  const resources = useSelector((state) => state.resources)
  const tasks = useSelector((state) => state.tasks)
  // console.log(resources)
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
    timeSpent: 0,
  })

  useEffect(() => {
    dispatch(fetchSubGoal(Number(subgoalId)))
    dispatch(fetchResources(Number(subgoalId)))
    dispatch(fetchTasks(Number(subgoalId)))
  },[])
  useEffect(()=>{
    getGoalsByUserId(user.id).then(res=>{
      console.log(1, res)
      if(res === null) return
      if(res.find(el=> el.goalId === subgoal.goalId)) return
      navigate('/goals/' + user.id)
    }).catch(err=>console.error('Something went wrong'))
  }, [subgoal])
  const handleFormResources = (event) => {
    setInputStateResources({
      ...inputStateResources,
      [event.target.id]: event.target.value,
    })
    // console.log(inputStateResources)
  }

  const handleFormTasks = (event) => {
    setInputStateTasks({
      ...inputStateTasks,
      [event.target.id]: event.target.value,
    })
  }

  function submitHandlerResources(event) {
    event.preventDefault()
    const newResource = {
      ...inputStateResources,
      goalId: subgoal.goalId,
      subgoalId: subgoal.subgoalId,
    }
    addNewResource(newResource)
      .then((res) => {
        const newId = res.newResourceId[0]
        dispatch(addResource({ ...newResource, resourceId: newId }))
      })
      .catch(console.error)
  }

  function submitHandlerTasks(event) {
    event.preventDefault()
    const newTask = {
      ...inputStateTasks,
      goalId: subgoal.goalId,
      subgoalId: subgoal.subgoalId,
    }
    addNewTask(newTask)
      .then((res) => {
        const newId = res.newTaskId[0]
        dispatch(addTask({ ...newTask, taskId: newId }))
      })
      .catch(console.error)
  }
  function checkboxHandler(task) {
    setCheckboxState(!checkboxState)
    // console.log(!checkboxState)
    updateTaskCompletion(task, !checkboxState)
  }
  function completeHandler(e) {
    e.preventDefault()
    updateSubgoalById(subgoal, true)
      .then((res) => {
        navigate('/goal/' + subgoal.goalId)
      })
      .catch(console.error)
  }
  function goToTaskHandler(taskId) {
    updateCurrentTask(user.id, taskId)
  }
  return (
    <>
      <div className="blank-nav2"></div>
      <h1>{subgoal.subgoalName}</h1>
      <div className="subgoal-content">
        {/* should render based on whether this is first goal or not */}
        <p>{first?"Add resources here:":"Resources:"}</p>
        <ul>
          {<ResourcesList resources={resources}/>}
        </ul>

        <form>
          <label htmlFor="resourceName"> </label>
          <input
            className="textbox-input"
            placeholder="Resource Link"
            type="text"
            id="url"
            onChange={handleFormResources}
            value={inputStateResources.url}
          ></input>
          <input
            className="textbox-input"
            placeholder="Resource Name"
            type="text"
            id="resourceName"
            onChange={handleFormResources}
            value={inputStateResources.resource_name}
          ></input>
          <label htmlFor="url"></label>
        </form>

        <button onClick={submitHandlerResources}>Add Resource</button>
        {/* list to render the resources*/}
        {/* <ul>
        <li>{resources.resource_name}</li>
      </ul> */}
      <form>
        {/* this needs to change based on whether subgoal has been created */}
        <h2>{first?"Great work, now add your first tasks":"Tasks:"}</h2>
        <ul>
          {tasks.map(task=>{
            return(
              <li key={task.taskName + task.taskId}>
                <input onChange={()=>checkboxHandler(task)} type={'checkbox'} defaultChecked={task.completed}/><span onClick={()=>goToTaskHandler(task.taskId)}>{task.taskName}</span>
              </li>
            )
          })}
        </ul>
        <input
          className="textbox-input"
          placeholder="New Task"
          type="text"
          id="taskName"
          value={inputStateTasks.name}
          onChange={handleFormTasks}
        ></input>
        <button onClick={submitHandlerTasks}>Add New Task</button>
      </form>
      <button onClick={completeHandler}>Complete Subgoal</button>

      <PlanBuddy />
    </div>
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
