import { format } from 'prettier'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL } from '../actions/goals'
import { useNavigate } from 'react-router-dom'

function VeteranView() {
  return (
    <>
      <button className="speechBubble tail">
        {' '}
        Continue with *current goal*{' '}
      </button>
      <button className="speechBubble tail">
        {' '}
        I'm learning something else today{' '}
      </button>
    </>
  )
}

// Todo - add logic for *current goal*
//  - add routes on the buttons
//  - add nav

export default VeteranView
