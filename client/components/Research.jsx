import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL, fetchGoals } from '../actions/goals'
import { useNavigate } from 'react-router-dom'

function Research() {
  const goals = useSelector((state) => state.goals)
  const goal = useSelector(state=>state.goal)
  const user = useSelector(state=>state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(fetchGoals(user.id))
    //needs ID
  }, [user])
  function completeHandler(e){
    e.preventDefault()
    //needs to update goal status to researched
    // only available after adding 3 sub goals
    // adds the fresh subgoals to the database
  }
  return (
    goals?.length !== 0 && (
      <>
        <h1>Research Time!</h1>
        <p>Start by googling  basics</p>
        <p>Find and write down sub goals for </p>
        <p>Create a sub goal to get started!</p>

        <div className="subGoalCreator">
          {/* <a href='' > */}
          <img src="/images/greyPencil.png"></img>
          <p>click to add subgoal</p>
          {/* </a> */}
        </div>
        <button onClick={completeHandler}>Complete Research</button>
      </>
    )
  )
}

// need to add planBuddy nav index

// need to add Buddy

// How will we create the next goal? Conditional? Look back to this once we have the further functionality

export default Research
