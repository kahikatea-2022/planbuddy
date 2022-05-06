import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL, fetchGoals } from '../actions/goals'
import { useNavigate } from 'react-router-dom'

function Research() {
  const goals = useSelector((state) => state.goals)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGoals())
  }, [])

  return (
    goals.length !== 0 && (
      <>
        <h1>Research Time!</h1>
        <p>Start by googling {goals[0].goal_name} basics</p>
        <p>Find and write down sub goals for {goals[0].goal_name}</p>
        <p>Create a sub goal to get started!</p>

        <div className="subGoalCreator">
          {/* <a href='' > */}
          <img src="/images/greyPencil.png"></img>
          <p>click to add subgoal</p>
          {/* </a> */}
        </div>
      </>
    )
  )
}

// need to add planBuddy nav index

// need to add Buddy

// How will we create the next goal? Conditional? Look back to this once we have the further functionality

export default Research
