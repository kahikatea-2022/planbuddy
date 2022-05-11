import { format } from 'prettier'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, fetchGoals } from '../actions/goals'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Goal from './Goal'
import { fetchGoal } from '../actions/goal'
import { fetchSubGoals } from '../actions/subGoals'
import { addSubGoal } from '../apis/subGoals'
import PlanBuddy from './PlanBuddy'
import { GoalCard } from './GoalCard'

function GoalsOverview({ noId }) {
  
  const chatter = "'I am the worlds worst goalie, I help you score goals'"
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userId } = useParams()
  const user = useSelector((state) => state.user)
  const goals = useSelector((state) => state.goals)
  // useEffect(()=>{
  //   if(!user.id) return
  //   if(noId)navigate("./" + user.id)
  // }, [user])
  useEffect(() => {
    dispatch(fetchGoals(Number(userId)))
  }, [])

  function clickHandler() {
    navigate('/newGoal/')
  }
  return (
    <>
      <div className="blank-nav"></div>
      <h1>Your learning goals</h1>

      <div key={'gregs kitchen'} className="pencilButtons">
        {goals?.map((goal) => (
          <GoalCard key={goal.goalId} goal={goal} />
        ))}

        <div onClick={clickHandler} className="subGoalCreator">
          <img className="pencilButtonImg" src="/images/greyPencil.png"></img>
          <p className="pencilButtonText">Add Goal</p>
        </div>
      </div>
      <PlanBuddy id={4} message = {chatter} />
    </>
  )
}

export default GoalsOverview

//display Buddy Component

//need to access the goals name

//NOTE - When we have 5 + add goal images, we need to change the css
//so that it doesn't go off the page.
