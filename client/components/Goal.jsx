import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL, fetchGoals } from '../actions/goals'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchGoal } from '../actions/goal'

function Goal() {
  // const exampleData = {
  //   goal_name: 'Piano',
  //   why: 'Play at friends wedding',
  //   weekly_hours: '20',
  // }

  const { goalId } = useParams()
  // might change this to reflect index of goal in users goals array
  const goal = useSelector((state) => state.goal)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('useEffect')
    dispatch(fetchGoal(Number(goalId)))
  }, [])
  // console.log(goal)

  return goal?.goalId ? (
    <>
      <div className="blank-nav2"></div>
      <h1> Learning Plan </h1>
      <p> I want to learn {goal.goalName}</p>
      <p> {goal.why}</p>
      <p>
        I will dedicate {goal.weeklyHours} hours per week to achieve this goal
      </p>
    </>
  ) : (
    <p>Please Wait</p>
  )
}

export default Goal
