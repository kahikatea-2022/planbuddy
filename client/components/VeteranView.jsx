import { format } from 'prettier'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL } from '../actions/goals'
import { useNavigate } from 'react-router-dom'
import PlanBuddy from './PlanBuddy'

function VeteranView() {
  return (
    <>
      <div className="veteran-view">
        <button className="speechBubble tail">
          Continue with *current goal*
        </button>
        <button className="speechBubble tail">
          Learn something else today
        </button>
      </div>
      <PlanBuddy />
    </>
  )
}

// Todo - add logic for *current goal*
//  - add routes on the buttons
//  - add nav

export default VeteranView
