import { format } from 'prettier'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal } from '../actions/goals'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Goal from './Goal'
import { fetchGoal } from '../actions/goal'
import { fetchSubGoals } from '../actions/subGoals'
import { addSubGoal } from '../apis/subGoals'

function GoalsOverview() {
  return (
    <>
      <h1>Your learning goals</h1>
    </>
  )
}

export default GoalsOverview

//display Buddy Component

//create Yellow pencil icon
//create a grey pencil icon
//need to access the goals name
