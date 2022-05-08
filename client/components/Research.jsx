import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL, fetchGoals } from '../actions/goals'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchGoal } from '../actions/goal'

function Research() {
  const goals = useSelector((state) => state.goals)
  const goal = useSelector(state=>state.goal)
  const user = useSelector(state=>state.user)
  const [subgoals, setSubgoals] = useState([])
  const {goalId} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(fetchGoal(Number(goalId)))
    //needs ID
  }, [user])
  function completeHandler(e){
    e.preventDefault()
    //needs to update goal status to researched
    // only available after adding 3 sub goals
    // adds the fresh subgoals to the database
    function subgoalAdd(e){
      e.preventDefault()
    }
  }
  return (
    
      <>
        <h1>Research Time!</h1>
        <p>Start by googling {goal.goalName} basics</p>
        <p>Find and write down 3 sub goals for {goal.goalName} </p>
        <p>Create a sub goal to get started!</p>

        <div onClick={subgoalAdd} className="subGoalCreator">
          <img src="/images/greyPencil.png"></img>
          <p>click to add subgoal</p>
        </div>
        <button onClick={completeHandler}>Complete Research</button>
      </>
    )
  
}

// need to add planBuddy nav index

// need to add Buddy

// How will we create the next goal? Conditional? Look back to this once we have the further functionality

export default Research
