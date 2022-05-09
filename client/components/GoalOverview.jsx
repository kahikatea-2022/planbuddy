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
// import SubGoal from './SubGoal'

function GoalOverview() {
  const { goalId } = useParams()
  const goal = useSelector((state) => state.goal)
  const subGoals = useSelector((state) => state.subGoals)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    console.log('useEffect')
    dispatch(fetchGoal(Number(goalId)))
    dispatch(fetchSubGoals(Number(goalId)))
  }, [])
  function subgoalHandler() {
    // needs to be changed back to check if true for proper implementation
    // adds new subgoal and redirects to new subgoal
    if(goal.researched === 1){
      const newSubgoal = {
        goalId: goal.goalId,
        subgoalName: 'Please enter a name for your subgoal',
        rewardId: null,
        completed: false,
        current: false,
      }
      addSubGoal(newSubgoal)
        .then((res) => {
          navigate('/subgoal/' + res + "/new")
        })
        .catch(console.error)
    } else {
      navigate('/research/' + goal.goalId)
    }
  }
  return (
    <>
      <Goal />
      <div className="flex">
        {subGoals?.length !== 0 &&
          subGoals.map((subGoal) => {
            return (
              <div
                key={subGoal.subgoalId}
                onClick={() => navigate('/subgoal/' + subGoal.subgoalId)}
                className="subGoalCreator"
              >
                <img src="/images/Pencil.png"></img>
                <p>{subGoal.subgoalName}</p>
              </div>
            )
          })}
        <div onClick={subgoalHandler} className="subGoalCreator">
          {/* <a href={goal.researched?`/subgoal/${}`} > */}
          <img className="pencilButtonImg" src="/images/greyPencil.png"></img>
          <p className="pencilButtonText">Add subgoal</p>
          {/* </a> */}
          <PlanBuddy />
        </div>
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

// {subGoals.map(subGoal=>{
//   return(
//     <div key={subGoal.subgoalId} className="subGoalCreator">
//     {/* <a href='' > */}
//     <img src="/images/Pencil.png"></img>
//     <p>{subGoal.subgoalName}</p>
//     {/* </a> */}
//   </div>
//   )
// })}

// {/* <div className="subGoalCreator">
// {/* <a href='' > */}
// <img src="/images/greyPencil.png"></img>
// <p>click to add subgoal</p>
// {/* </a> */}
// </div> */}
