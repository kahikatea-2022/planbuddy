import { format } from 'prettier'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL } from '../actions/goals'
import { useNavigate } from 'react-router-dom'
import Goal from './Goal'

function PlanBuddy() {
  return (
    <>
      <div className="hamburgerMenu"></div>

      <img className="Buddy" src="/images/PlanBuddy.png"></img>
    </>
  )
}

// helpful suggestions rendered depending on current component

// if you click on buddy, a hamburger menu will appear with the following links: GoalsOverview/DailyLearning/

// Welcome.jsx =  Buddy is saying all the words displayed. Perhaps put in a speech bubble?
// NewGoal =  Buddy is saying all the words - perhaps speech bubble and to the right?
// GoalsOverview = if you hover on Buddy the following appears "Did you want to contine a current goal, or create a new goal?"

export default PlanBuddy
