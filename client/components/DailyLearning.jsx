import { format } from 'prettier'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL } from '../actions/goals'
import { useNavigate } from 'react-router-dom'
import { addSubGoal } from '../apis/subGoals'
import PlanBuddy from './PlanBuddy'
function DailyLearning() {
  return (
    <>
      <div className="DailyLearning">
        <div className="subGoalCreator">
          <img className="pencilButtonImg" src="/images/Pencil.png"></img>
          <p className="pencilButtonText">**subgoal name**</p>
        </div>
        <h1> Today's Task: </h1>
        <label>
          <input type="checkbox" />
          **Sit down and play some guitar **
        </label>
        <PlanBuddy />
      </div>
    </>
  )
}

// need the logic to redirect upon ticking the textbox

export default DailyLearning
