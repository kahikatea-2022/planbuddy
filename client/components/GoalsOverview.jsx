import { format } from 'prettier'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal } from '../actions/goals'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Goal from './Goal'
import { fetchGoal } from '../actions/goal'
import { fetchSubGoals } from '../actions/subGoals'
import { addSubGoal } from '../apis/subGoals'
import PlanBuddy from './PlanBuddy'

function GoalsOverview() {
  return (
    <>
      <h1>Your learning goals</h1>

      <div className="pencilButtons">
        <div className="subGoalCreator">
          <img className="pencilButtonImg" src="/images/Pencil.png"></img>
          <p className="pencilButtonText">**Goal name**</p>
        </div>
        <div className="subGoalCreator">
          <img className="pencilButtonImg" src="/images/greyPencil.png"></img>
          <p className="pencilButtonText">Add Goal</p>
        </div>
      </div>
      <PlanBuddy />
    </>
  )
}

export default GoalsOverview

//display Buddy Component

//need to access the goals name

//NOTE - When we have 5 + add goal images, we need to change the css
//so that it doesn't go off the page.
