import { format } from 'prettier'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL } from '../actions/goals'
import { useNavigate } from 'react-router-dom'
import Goal from './Goal'

function PlanBuddy() {
  return (
    <>
      <div className="hamburgerMenu">
        <ul>
          <li>
            <a href="http://localhost:3000/goaloverview"> Goals Overview </a>
          </li>
          <li>
            <a href="http://localhost:3000/welcome"> Daily Learning </a>
          </li>
        </ul>
      </div>

      <img className="Buddy" src="/images/PlanBuddy.png"></img>
    </>
  )
}

// need menu to appear only onclick of buddy

// helpful suggestions rendered depending on current component

// if you click on buddy, a hamburger menu will appear with the following links: GoalsOverview/DailyLearning/

// Welcome.jsx =  Buddy is saying all the words displayed. Perhaps put in a speech bubble?
// NewGoal =  Buddy is saying all the words - perhaps speech bubble and to the right?
// GoalsOverview = if you hover on Buddy the following appears "Did you want to contine a current goal, or create a new goal?"

export default PlanBuddy
