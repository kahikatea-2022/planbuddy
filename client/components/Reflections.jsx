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
      reflection: reflection,
    }
    return addNewReflection(newReflection)
  }
  function logoutAndComplete(e) {
    e.preventDefault()
    handleReflectionAdd()
      .then((res) => {
        logout()
      })
      .catch(console.error)
  }

  function toGoalsAndComplete(e) {
    e.preventDefault()
    handleReflectionAdd()
      .then((res) => {
        navigate('/goal/' + task.goalId)
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
        className="reflections-text"
      ></textarea>
      <button onClick={logoutAndComplete}>
        Complete Reflection and Log out
      </button>
      <button onClick={toGoalsAndComplete}>
        Complete Reflection and return to learning plan
      </button>
      <PlanBuddy id={3} />
    </>
  )
}

export default Reflections

//to do ---
//Nav component
//Prompt text for reflection: What went well, what didn't go well, what do you need to work on?
//Buddy could say the above ^
