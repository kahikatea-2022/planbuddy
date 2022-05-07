// import { format } from 'prettier'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal} from '../actions/goals'
import { useNavigate, useParams } from 'react-router-dom'
import { addNewGoal } from '../apis/goals'

function NewGoal() {
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {userid} = useParams()
  const inputData = {
    userId: user?.id,
    goalName: '',
    why: '',
    weeklyHours: '',
    completed: false,
    researched: false
  }
  console.log(inputData)
  const [formState, setFormState] = useState(1)
  const [goalData, setGoalData] = useState(inputData)
  const [name, setName] = useState('')
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
      addNewGoal(goalData).then(newId=>{
       const goalId = newId.newId[0]
       navigate('/goal/' + goalId)
      }).catch(console.error)
      // navigate('/goals')
    }
  }

  return user?.name && (
    <>
      {/* this only renders once after signing up */}
      <label>Thanks for signing up {user?.name}!</label>

    {formState === 1 &&
    <>
    <label htmlFor="goalName">What skill are you trying to learn?</label>
      <input
        type="text"
        id="goalName"
        onChange={handleForm}
        onKeyUp={advanceForm}
        value={goalData.goalName}
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
        <label htmlFor="weeklyHours">
        How many hours per week will you put into this?
      </label>
      <input
        type="text"
        id="weeklyHours"
        onChange={handleForm}
        value={goalData.weeklyHours}
        onKeyUp={submitHandler}
      ></input>
      </>}
    </>
  )
}

export default NewGoal
