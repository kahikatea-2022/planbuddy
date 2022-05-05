import { format } from 'prettier'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL } from '../actions/goals'

function NewGoal() {
  const dispatch = useDispatch()

  const inputData = {
    user_name: '',
    goal_name: '',
    why: '',
    weekly_hours: '',
  }

  const [inputState, setInputState] = useState(inputData)

  const handleForm = (event) => {
    setInputState({ ...inputState, [event.target.id]: event.target.value })
    console.log(inputState)
  }

  //because it's an event, it takes in event parameter (could name banana)
  function submitHandler(event) {
    if (event.code === 'Enter') {
      dispatch(addGoal(inputState))
      console.log('submitHandler')
      //navigate()
    }
  }

  return (
    <>
      {/* this only renders once after signing up */}
      <label>Thanks for signing up!</label>

      {/* this only renders once after signing up */}
      <label htmlFor="user_name">
        So that we can customise your experience, what is your name?
      </label>
      <input
        type="text"
        id="user_name"
        onChange={handleForm}
        value={inputState.user_name}
      ></input>

      <label htmlFor="goal_name">What is your learning goal?</label>
      <input
        type="text"
        id="goal_name"
        onChange={handleForm}
        value={inputState.goal_name}
      ></input>

      <label htmlFor="why">Why would you like to learn this?</label>
      <input
        type="text"
        id="why"
        onChange={handleForm}
        value={inputState.why}
      ></input>

      <label htmlFor="weekly_hours">
        How many hours per week will you put into this?
      </label>
      <input
        type="text"
        id="weekly_hours"
        onChange={handleForm}
        value={inputState.weekly_hours}
        onKeyUp={submitHandler}
      ></input>
    </>
  )
}

export default NewGoal
