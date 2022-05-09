import React from 'react'
import { useNavigate } from 'react-router-dom'

export function GoalCard({goal}){
  const navigate = useNavigate()
  function clickHandler(e){
    navigate('/goal/' + goal.goalId)
  }
  return(
  <div onClick={clickHandler} className="subGoalCreator">
    <img className="pencilButtonImg" src="/images/Pencil.png"></img>
    <p className="pencilButtonText">{goal.goalName}</p>
  </div>
  )
}