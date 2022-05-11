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
  const [chatBubble, setChatBubble] = useState('Hi Friend <3')
  const [load, setLoad] = useState(true)
  const [fade, setFade] = useState('fade-in')
  const [chatBubbleVisible, setChatBubbleVisible] = useState(false)
  let standard = '/images/PlanBuddy.png'
  let open = '/images/PlanBuddy-mouthOpen.png'
  if (props.french) {
    standard = '/images/Buddy-Napoleon.png'
    open = '/images/Buddy-Napoleon-mouthOpen.png'
  }
  // this part of the code is to change buddys image when you mouse over them

  const [imgSource, setImgSource] = useState(standard)
  useEffect(() => {
    if (props.message && load) {
      setTimeout(() => {
        document.addEventListener('click', listenerHandle)
        setChatBubble(props.message)
      setImgSource(open)
      setChatBubbleVisible(true)
        console.log('hooo')
      }, 1000)
    } else if (props.id)
      getRandomQuote(props.id)
        .then((data) => {
          console.log(data.quote, 1337)
          console.log(props?.message)
          updateBubble(data.quote)
        })
        .catch((err) => {
          return null
        })
  }, [load])

  function updateBubble(quote) {
    setChatBubble(quote)
  }
  function listenerHandle(){
    // setChatBubbleVisible(false)
    setFade('fade-out')
  return document.removeEventListener('click', listenerHandle)
}
function fadeHandle(){
  if(fade === 'fade-out'){
    setChatBubbleVisible(false)
      setImgSource(standard)
      setLoad(false)
    console.log('hi')
  }
}
  function changeBuddyImage() {
    if (mascotHover) {
      setChatBubbleTimeout(
        setTimeout(() => {
          setChatBubbleVisible(true)
        }, 1000)
      )
      setImgSource(open)
    }
    if (!mascotHover) {
      clearTimeout(chatBubbleTimeout)
      setChatBubbleVisible(false)
      setImgSource(standard)
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
            <li
              className="text-hover"
              onClick={() => clickRedirect('/goals/' + user.id)}
            >
              All Goals
            </li>
            {user.currentTask && (
              <li
                className="text-hover"
                onClick={() =>
                  clickRedirect('/dailylearning/' + user.currentTask)
                }
              >
                Daily Learning
              </li>
            )}
            <li className="text-hover" onClick={() => logout()}>
              Sign Out
            </li>
          </ul>
        </div>
      )}

      {chatBubbleVisible && (
        <h1 onAnimationEnd={fadeHandle} className={`quote-bubble speechBubble tail ${load?fade:''}`}>{chatBubble}</h1>
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
