import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL } from '../actions/goals'
import { useNavigate } from 'react-router-dom'
import Goal from './Goal'
import { getLogoutFn } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import { getRandomQuote } from '../apis/quotes'

// PlanBuddy needs to include the Nav functionality (sign in, sign out)

function PlanBuddy(props) {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const [mascotHover, setMascotHover] = useState(true)
  const [chatBubbleTimeout, setChatBubbleTimeout] = useState('')
  const [chatBubble, setChatBubble] = useState('loser')
  const [chatBubbleVisible, setChatBubbleVisible] = useState(false)
  // this part of the code is to change buddys image when you mouse over them
  const [imgSource, setImgSource] = useState('/images/PlanBuddy.png')

  useEffect(() => {
    if (props.id)
      getRandomQuote(props.id)
        .then((data) => {
          console.log(data.quote, 1337)
          updateBubble(data.quote)
        })
        .catch((err) => {
          return null
        })
  }, [])

  function updateBubble(quote) {
    setChatBubble(quote)
  }

  function changeBuddyImage() {
    if (mascotHover) {
      setChatBubbleTimeout(
        setTimeout(() => {
          setChatBubbleVisible(true)
        }, 1000)
      )
      setImgSource('/images/PlanBuddy-mouthOpen.png')
    }
    if (!mascotHover) {
      clearTimeout(chatBubbleTimeout)
      setChatBubbleVisible(false)
      setImgSource('/images/PlanBuddy.png')
    }
  }

  // this part of code is to render the menu when you click on buddy
  const [click, setClick] = useState(false)

  function toggleBuddyMenu() {
    console.log('hello')
    setClick(!click)
  }
  function clickRedirect(url) {
    navigate(url)
  }

  const logout = getLogoutFn(useAuth0)
  return (
    <>
      {click && (
        <div className="hamburgerMenu">
          <ul>
            <li onClick={() => clickRedirect('/goals/' + user.id)}>
              Goals Overview
            </li>
            {user.currentTask && (
              <li
                onClick={() =>
                  clickRedirect('/dailylearning/' + user.currentTask)
                }
              >
                Daily Learning
              </li>
            )}
            <li onClick={() => logout()}>Sign Out</li>
          </ul>
        </div>
      )}

      {chatBubbleVisible && (
        <h1 className="quote-bubble speechBubble tail">{chatBubble}</h1>
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
