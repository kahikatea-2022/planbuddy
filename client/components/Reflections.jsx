import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { addGoal, ADD_GOAL, fetchGoals } from '../actions/goals'
import { useNavigate } from 'react-router-dom'
// import { addResource } from '../actions/resources'
// import { addTask, setTasks } from '../actions/tasks'

function Reflections() {
  return (
    <>
      <h1>Reflections</h1>
      <div className="subGoalCreator">
        {/* <a href='' > */}
        <img src="/images/Pencil.png"></img>
        <p>*Learn C Major Scale*</p>
        {/* </a> */}
      </div>
      <textarea rows="5" cols="50"></textarea>
      <button>Complete Reflection and Log out</button>
      <button>Complete Reflection and return to learning plan</button>
    </>
  )
}

export default Reflections

//to do ---
//Nav component
//Prompt text for reflection: What went well, what didn't go well, what do you need to work on?
//Buddy could say the above ^
