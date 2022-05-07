// import { format } from 'prettier'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal} from '../actions/goals'
import { useNavigate, useParams } from 'react-router-dom'
import { addNewGoal } from '../apis/goals'

function NewGoal() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {userid} = useParams()
  const inputData = {
    user_id: Number(userid),
    goal_name: '',
    why: '',
    weekly_hours: '',
  }
  const [formState, setFormState] = useState(0)
  const [goalData, setGoalData] = useState(inputData)
  const [name, setName] = useState('')
  const user = useSelector(state=>state.user)
  const handleForm = (event) => {
    setGoalData({ ...goalData, [event.target.id]: event.target.value })
    console.log(goalData)
  }
  function handleFormName(event){
    setName(event.target.value)
  }
  function advanceForm(event){
    if (event.code === 'Enter') {
      setFormState(current=>current+1)
    }
  }
  //because it's an event, it takes in event parameter (could name banana)
  function submitHandler(event) {
    if (event.code === 'Enter') {
      dispatch(addGoal(goalData))
      console.log('submitHandler')
      addNewGoal(goalData)
      // navigate('/goals')
    }
  }

  return user?.name && (
    <>
      {/* this only renders once after signing up */}
      <label>Thanks for signing up {user?.name}!</label>

      {/* this only renders once after signing up */}
      {formState === 0 &&
      <>
      <label htmlFor="user_name">
        So that we can customise your experience, what is your name?
      </label>
      <input
        type="text"
        id="user_name"
        onChange={handleFormName}
        onKeyUp={advanceForm}
        value={name}
      ></input>
      </>}

    {formState === 1 &&
    <>
    <label htmlFor="goal_name">What is your learning goal?</label>
      <input
        type="text"
        id="goal_name"
        onChange={handleForm}
        onKeyUp={advanceForm}
        value={goalData.goal_name}
      ></input>
      </>}

      {formState === 2 &&
        <>
        <label htmlFor="why">Why would you like to learn this?</label>
      <input
        type="text"
        id="why"
        onChange={handleForm}
        onKeyUp={advanceForm}
        value={goalData.why}
      ></input>
      </>}

      {formState === 3 &&
        <>
        <label htmlFor="weekly_hours">
        How many hours per week will you put into this?
      </label>
      <input
        type="text"
        id="weekly_hours"
        onChange={handleForm}
        value={goalData.weekly_hours}
        onKeyUp={submitHandler}
      ></input>
      </>}
    </>
  )
}

export default NewGoal
