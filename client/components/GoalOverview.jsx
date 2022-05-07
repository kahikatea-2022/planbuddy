import { format } from 'prettier'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL } from '../actions/goals'
import { useNavigate } from 'react-router-dom'
import Goal from './Goal'
// import SubGoal from './SubGoal'

function GoalOverview() {
  return (
    <>
      <Goal />

      <p>Click on a subgoal to get started/into</p>

      <div className="subGoalCreator">
        {/* <a href='' > */}
        <img src="/images/Pencil.png"></img>
        <p>*Learn the C Scale*</p>
        {/* </a> */}
      </div>

      <div className="subGoalCreator">
        {/* <a href='' > */}
        <img src="/images/greyPencil.png"></img>
        <p>click to add subgoal</p>
        {/* </a> */}
      </div>
    </>
  )
}

// link for new goal needs to be to the Research Component
// link for existing goal will be subGoal component
// use Css to make boxes side by side
// Add Nav bar
// edit button required (stretch)

export default GoalOverview
