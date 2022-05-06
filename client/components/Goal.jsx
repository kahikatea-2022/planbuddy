import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL, fetchGoals } from '../actions/goals'
import { useNavigate } from 'react-router-dom'

function Goal() {
  // const exampleData = {
  //   goal_name: 'Piano',
  //   why: 'Play at friends wedding',
  //   weekly_hours: '20',
  // }

  const goals = useSelector((state) => state.goals)
  console.log(goals)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGoals())
  }, [])

  return (
    goals.length !== 0 && (
      <>
        <h1> Learning Plan </h1>
        <p> I want to learn {goals[0].goal_name}</p>
        <p> So that I can {goals[0].why}</p>
        <p>
          I will dedicate {goals[0].weekly_hours} hours per week to achieve this
          goal
        </p>
      </>
    )
  )
}

export default Goal
