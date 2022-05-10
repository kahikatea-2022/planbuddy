import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL } from '../actions/goals'
import { useNavigate } from 'react-router-dom'
import Goal from './Goal'
import { getLogoutFn } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import { getRandomQuote } from '../apis/quotes'
import { getRandomIntInclusive } from '../utils'

// PlanBuddy needs to include the Nav functionality (sign in, sign out)

function PlanBuddy(props) {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const [mascotHover, setMascotHover] = useState(true)
  const [chatBubbleTimeout, setChatBubbleTimeout] = useState('')
  const [chatBubble, setChatBubble] = useState('loser')
  const [chatterActive, setChatterActive] = useState(true)
  const [chatBubbleClass, setChatBubbleClass] = useState('')
  const [chatterButtonText, setChatterButtonText] = useState('Disable Chatter')
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

  useEffect(()=>{
    if(props.id){
      console.log('I have ran')
      setTimeout(()=>{
        if(props.message){
          setChatBubble(props.message)
          setChatBubbleVisible(true)
          setImgSource('/images/PlanBuddy-mouthOpen.png')
          setTimeout(()=>{
            setChatBubbleVisible(false)
            setImgSource('/images/PlanBuddy.png')
            setTimeout(()=>{
              handleChatter(chatterActive)
            }, getRandomIntInclusive(8000, 15000))
            
          }, 3500)
        } else {
          handleChatter(chatterActive)
        }
      }, 2000)
    }
  }, [])
  // should display speech bubble ans set a timeout for removing it and running function again
  // intervals between chatter should be random from a set range
  // should stop chatter if user opts out
  function handleChatter(bool){
    if(!bool) return
    getRandomQuote(props.id)
        .then((data) => {
          console.log(data.quote, 2133327)
          updateBubble(data.quote)
          setChatBubbleVisible(true)
          setImgSource('/images/PlanBuddy-mouthOpen.png')
          setTimeout(()=>{
            setChatBubbleVisible(false)
            setImgSource('/images/PlanBuddy.png')
            setTimeout(()=>{
              handleChatter(chatterActive)
            }, getRandomIntInclusive(8000, 15000))
            
          }, 3500)
        })
        .catch((err) => {
          return null
        })
  }
  function updateBubble(quote) {
    setChatBubble(quote)
  }

  function changeBuddyImage() {
    if (mascotHover) {
      if(!chatterActive){setChatBubbleTimeout(
        setTimeout(() => {
          setChatBubbleVisible(true)
        }, 1000)
      )}
      setImgSource('/images/PlanBuddy-mouthOpen.png')
    }
    if (!mascotHover) {
      if(!chatterActive){
        clearTimeout(chatBubbleTimeout)
      setChatBubbleVisible(false)
    }
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
  function toggleChatter(enabled){
    setChatterActive(!chatterActive)
    if(chatterActive === false) setChatterButtonText('Disable Chatter')
    if(chatterActive === true) {
      setChatterButtonText('Enable Chatter')
      setTimeout(()=>{
          handleChatter(chatterActive)
        }, 2000)
      }
    }
  const logout = getLogoutFn(useAuth0)
  return (
    <>
      {click && (
        <div className="hamburgerMenu">
          <ul>
            <li onClick={() => toggleChatter()}>{chatterButtonText}</li>
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
