import { useAuth0 } from '@auth0/auth0-react'
import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux'
// import { addGoal, ADD_GOAL, fetchGoals } from '../actions/goals'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchGoal } from '../actions/goal'
import { fetchSubGoal } from '../actions/subGoals'
import { fetchTask } from '../actions/tasks'
import { addNewReflection } from '../apis/reflections'
import { getLogoutFn } from '../auth0-utils'
import PlanBuddy from './PlanBuddy'
// import { addResource } from '../actions/resources'
// import { addTask, setTasks } from '../actions/tasks'

function Reflections() {
  const chatter =
    'Phewf what a day, how did we do? Start by writing down your thoughts from the session, then reflect on what went well, what could have gone better, and what you will do differently next time. This might seem tedious, but take it from me, writing reflections is super helpful for your learning. \n   - PlanBuddy 2022'
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const task = useSelector((state) => state.task)
  const subgoal = useSelector((state) => state.subgoal)
  const goal = useSelector((state) => state.goal)
  const user = useSelector((state) => state.user)
  const { taskId } = useParams()
  const logout = getLogoutFn(useAuth0)

  const [reflection, setReflection] = useState('')

  useEffect(() => {
    dispatch(fetchTask(Number(taskId)))
  }, [])

  useEffect(() => {
    dispatch(fetchSubGoal(task.subgoalId))
  }, [task])

  function inputHandler(e) {
    setReflection(e.target.value)
    console.log(reflection)
  }

  function handleReflectionAdd() {
    const newReflection = {
      goalId: task.goalId,
      taskId: task.taskId,
      reflection: reflection.trim(),
    }
    return addNewReflection(newReflection)
  }
  function logoutAndComplete(e) {
    e.preventDefault()
    if (reflection.trim() === '') return logout()
    handleReflectionAdd()
      .then((res) => {
        logout()
      })
      .catch(console.error)
  }

  function toSubgoalAndComplete(e) {
    e.preventDefault()
    if (reflection.trim() === '') return navigate('/subgoal/' + task.subgoalId)
    handleReflectionAdd()
      .then((res) => {
        navigate('/subgoal/' + task.subgoalId)
      })
      .catch(console.error)
  }
  return (
    <>
      <h1>Reflections</h1>
      <div className="subGoalCreator">
        {/* <a href='' > */}
        <img className="pencilButtonImg" src="/images/Pencil.png"></img>
        <p className="pencilButtonText">{task.taskName}</p>
        {/* </a> */}
      </div>
      <textarea
        onChange={inputHandler}
        value={reflection}
        rows="5"
        cols="50"
        className="reflections-text reflections-textbox-noborder"
        autoFocus
      ></textarea>
      <button onClick={toSubgoalAndComplete}>
        Complete Reflection and Return to Subgoal
      </button>
      <button onClick={logoutAndComplete}>
        Complete Reflection and Sign Out
      </button>

      <PlanBuddy id={7} message={chatter} />
    </>
  )
}

export default Reflections

//to do ---
//Nav component
//Prompt text for reflection: What went well, what didn't go well, what do you need to work on?
//Buddy could say the above ^
