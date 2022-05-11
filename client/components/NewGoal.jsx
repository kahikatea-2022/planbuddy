// import { format } from 'prettier'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal } from '../actions/goals'
import { useNavigate, useParams } from 'react-router-dom'
import { addNewGoal } from '../apis/goals'
import { useEffect } from 'react'
import PlanBuddy from './PlanBuddy'

function NewGoal({ first }) {
  const chatter =
    ' Let us define a new goal, when you are done hit the enter key!'
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userid } = useParams()
  const inputData = {
    userId: user?.id,
    goalName: '',
    why: '',
    weeklyHours: '',
    completed: false,
    researched: false,
  }
  console.log(inputData)
  const [formState, setFormState] = useState(1)
  const [goalData, setGoalData] = useState(inputData)
  const [name, setName] = useState('')
  const [fadeState, setFadeState] = useState('fade-in')
  const handleForm = (event) => {
    setGoalData({
      ...goalData,
      userId: user?.id,
      [event.target.id]: event.target.value,
    })
    console.log(goalData)
  }

  useEffect(() => {}, [user])
  function handleFormName(event) {
    setName(event.target.value)
  }
  function advanceForm(event) {
    if (fadeState === 'fade-out') {
      setFadeState('fade-in')
      setFormState((current) => current + 1)
    }
  }
  //because it's an event, it takes in event parameter (could name banana)
  function submitHandler(event) {
    if (fadeState === 'fade-out') {
      dispatch(addGoal(goalData))
      console.log('submitHandler')
      addNewGoal(goalData)
        .then((newId) => {
          const goalId = newId.newId[0]
          navigate('/goal/' + goalId)
        })
        .catch(console.error)
      // navigate('/goals')
    }
  }
  function fadeHandler(event) {
    if (event.code === 'Enter') {
      setFadeState('fade-out')
    }
  }

  return (
    user?.name && (
      <>
        <div className="blank-nav"></div>
        <div className="new-goal">
          {/* this only renders once after signing up */}
          

          {formState === 1 && (
            <>
              <label className={fadeState} htmlFor="goalName">
                Which skill are you wanting to learn?
              </label>
              <input
                className={`textbox-input ${fadeState}`}
                type="text"
                id="goalName"
                onChange={handleForm}
                onKeyUp={fadeHandler}
                onAnimationEnd={advanceForm}
                value={goalData.goalName}
                autoFocus
              ></input>
            </>
          )}

          {formState === 2 && (
            <>
              <label className={fadeState} htmlFor="why">
                Why would you like to learn this?
              </label>
              <input
                className={`textbox-input ${fadeState}`}
                type="text"
                id="why"
                onChange={handleForm}
                onKeyUp={fadeHandler}
                onAnimationEnd={advanceForm}
                value={goalData.why}
                autoFocus
              ></input>
            </>
          )}

          {formState === 3 && (
            <>
              <label className={fadeState} htmlFor="weeklyHours">
                How many hours per week will you put into this?
              </label>
              <input
                className={`textbox-input ${fadeState}`}
                type="text"
                id="weeklyHours"
                onChange={handleForm}
                value={goalData.weeklyHours}
                onKeyUp={fadeHandler}
                onAnimationEnd={submitHandler}
                autoFocus
              ></input>
            </>
          )}
        </div>
        <PlanBuddy id={5} message={chatter} />
      </>
    )
  )
}

export default NewGoal
