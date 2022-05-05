import { format } from 'prettier'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL } from '../actions/goals'
import { useNavigate } from 'react-router-dom'

function Goal() {
  const exampleData = [
    {
      goal_name: 'Piano',
      why: 'Play at friends wedding',
      weekly_hours: '20',
    },
  ]

  const goal = useSelector((state) => state.goal)
  console.log(goal)

  return (
    <>
      {exampleData.map((exampleData) => {
        return (
          <>
            <h1> Learning Plan </h1>
            <p> I want to learn {exampleData.goal_name}</p>
            <p> So that I can {exampleData.why}</p>
            <p>
              I will dedicate {exampleData.weekly_hours} hours per week to
              achieve this goal
            </p>
          </>
        )
      })}
    </>
  )
}

export default Goal
