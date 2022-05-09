import { format } from 'prettier'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL } from '../actions/goals'
import { useNavigate } from 'react-router-dom'
import Goal from './Goal'

// PlanBuddy needs to include the Nav functionality (sign in, sign out)

function PlanBuddy() {
  const [mascotHover, setMascotHover] = useState(false)
  // this part of the code is to change buddys image when you mouse over them
  const [imgSource, setImgSource] = useState('/images/PlanBuddy.png')

  function changeBuddyImage() {
    if (mascotHover) setImgSource('/images/PlanBuddy-mouthOpen.png')
    if (!mascotHover) setImgSource('/images/PlanBuddy.png')
  }

  // this part of code is to render the menu when you click on buddy
  const [click, setClick] = useState(false)

  function toggleBuddyMenu() {
    console.log('hello')
    setClick(!click)
  }

  return (
    <>
      {click && (
        <div className="hamburgerMenu">
          <ul>
            <li>
              <a href="http://localhost:3000/goaloverview"> Goals Overview </a>
            </li>
            <li>
              <a href="http://localhost:3000/welcome"> Daily Learning </a>
            </li>
            <li>
              <a href="http://localhost:3000/welcome"> Sign Out </a>
            </li>
          </ul>
        </div>
      )}
      <div>
        <img
          onClick={toggleBuddyMenu}
          onMouseOver={() => {
            setMascotHover(false)
            changeBuddyImage()
          }}
          onMouseLeave={() => {
            setMascotHover(true)
            changeBuddyImage()
          }}
          className="Buddy"
          src={imgSource}
        ></img>
      </div>
    </>
  )
}

// onhover we want Buddys image to change

// define the source of the image to planbuddy state
// have a planbuddy state which is initialised to /images/planbuddy.png
// mouseover function to set the planbuddy state to /images/planbuddy2.png
//another function onMouseLeave(?) changes back to the original

// helpful suggestions rendered depending on current component

// Welcome.jsx =  Buddy is saying all the words displayed. Perhaps put in a speech bubble?
// NewGoal =  Buddy is saying all the words - perhaps speech bubble and to the right?
// GoalsOverview = if you hover on Buddy the following appears "Did you want to contine a current goal, or create a new goal?"

export default PlanBuddy
