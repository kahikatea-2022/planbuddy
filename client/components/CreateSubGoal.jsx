//reference resources from db
//reference tasks from db
import { format } from 'prettier'
import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL, fetchGoals } from '../actions/goals'
import { useNavigate, useParams } from 'react-router-dom'
import { addResource, fetchResources } from '../actions/resources'
import { addTask, fetchTasks, setTasks } from '../actions/tasks'
import { fetchSubGoal } from '../actions/subGoals'
import { addNewResource } from '../apis/resources'
import { addNewTask, updateTaskCompletion } from '../apis/tasks'
import { editSubgoalById, updateSubgoalById } from '../apis/subGoals'
import { getUsers, updateCurrentTask } from '../apis/users'
import { ResourcesList } from './ResourcesList'
import { getGoalsByUserId } from '../apis/goals'
import PlanBuddy from './PlanBuddy'
import { TaskList } from './TaskList'
import { updateUser } from '../actions/user'

//Steps:
//Create an add resources form
//create an add tasks form
//add the input to state

function CreateSubGoal({ first, schugl }) {
  const chatter =
    'In the left box add resources that will help you learn. In the right box you will break down your goal further into small, actionable steps.By the way, you can change the name of your subgoal by clicking on it.When you are done click on your first task to begin'
  const dispatch = useDispatch()
  const navigate = useNavigate()
  if (schugl === 'unga bungas') navigate('/')
  const { subgoalId } = useParams()
  const user = useSelector((state) => state.user)
  const subgoal = useSelector((state) => state.subGoal)
  const resources = useSelector((state) => state.resources)
  const tasks = useSelector((state) => state.tasks)
  // console.log(resources)
  const [checkboxState, setCheckboxState] = useState(false)
  const [checked, setChecked] = useState(false)
  const [nameInput, setNameInput] = useState('')
  const [complete, setComplete] = useState(false)

  const subgoalNameInput = useRef(null)

  const defaultResource = {
    resourceName: '',
    url: '',
  }

  const [inputStateResources, setInputStateResources] =
    useState(defaultResource)

  const defaultTask = {
    taskName: '',
    completed: false,
    current: false,
    goalId: subgoal.goalId,
    subgoalId: subgoal.subgoalId,
    timeSpent: 0,
  }

  const [inputStateTasks, setInputStateTasks] = useState(defaultTask)

  useEffect(() => {
    dispatch(fetchSubGoal(Number(subgoalId)))
    dispatch(fetchResources(Number(subgoalId)))
    dispatch(fetchTasks(Number(subgoalId)))
  }, [])
  useEffect(() => {
    if (tasks === undefined) return
    checkCompletion(tasks)
  }, [tasks])
  useEffect(() => {
    setNameInput(subgoal.subgoalName)
  }, [subgoal])
  // Validate ownership, needs slight rework to accout for inital empty data
  // useEffect(()=>{
  //   getGoalsByUserId(user.id).then(res=>{
  //     console.log(1, res)
  //     if(res === null) return
  //     if(res.find(el=> el.goalId === subgoal.goalId)) return
  //     navigate('/goals/' + user.id)
  //   }).catch(err=>console.error('Something went wrong'))
  // }, [subgoal])
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
        setInputStateResources(defaultResource)
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
        setInputStateTasks(defaultTask)
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
    navigate('/dailylearning/' + taskId)
  }
  function dropFocus(event) {
    if (event.code === 'Enter') subgoalNameInput.current.blur()
  }
  function saveInput(event) {
    console.log(event.target.value)
    editSubgoalById(subgoal.subgoalId, nameInput)
    return
  }

  function checkCompletion(tasks) {
    const notComplete = tasks.find((el) => el.completed == 0)
    if (notComplete) return setComplete(false)
    return setComplete(true)
  }
  function nameFormHandler(e) {
    setNameInput(e.target.value)
  }
  function selectHandler(event) {
    event.target.select()
  }

  //input have a default value of subgoal name,
  //when you press enter, the name of the subgoal needs to be updated in the database via patch route
  //updateSubgoalById
  // create new function
  // ff

  return (
    <>
      <div className="blank-nav2"></div>
      <input
        className="subgoal-name"
        value={nameInput}
        onChange={nameFormHandler}
        onFocus={selectHandler}
        ref={subgoalNameInput}
        // defaultValue={subgoal.subgoalName}
        placeholder="subgoal name"
        type={'text'}
        onBlur={saveInput}
        onKeyUp={dropFocus}
      ></input>

      {/* <h1>{subgoal.subgoalName}</h1> */}

      {/* should render based on whether this is first goal or not */}

      <div className="subgoal-content">
        {/* should render based on whether this is first goal or not */}
        {/* //? div with classname speechBubble */}
        <div className="speechBubble">
          <p>{first ? 'Add resources here:' : 'Resources:'}</p>
          <ul>{<ResourcesList user={user} resources={resources} />}</ul>
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
              value={inputStateResources.resourceName}
            ></input>
            <label htmlFor="url"></label>
          </form>
          <button onClick={submitHandlerResources}>Add Resource</button>
        </div>
        <div className="speechBubble">
          <p>{first ? 'Add tasks here:' : 'Tasks:'}</p>
          <ul>{<TaskList tasks={tasks} check={checkCompletion} />}</ul>
          <form>
            {/* this needs to change based on whether subgoal has been created */}
            {/* speechbubble div */}
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
        </div>
      </div>
      {complete && !first && (
        <button onClick={completeHandler}>Complete Subgoal</button>
      )}

      <PlanBuddy id={6} message={chatter} />
    </>
  )
}
export default CreateSubGoal
