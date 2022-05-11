import { format } from 'prettier'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoal, ADD_GOAL, fetchGoals } from '../actions/goals'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchGoal } from '../actions/goal'
import { updateGoal } from '../apis/goal'
import { addSubGoal } from '../apis/subGoals'
import PlanBuddy from './PlanBuddy'

function Research() {
  const chatter =
    'Here you want to split your goal into 3 smaller goals, this will make your goal easier to approach and learn! Divide et imperium!'
  const navigate = useNavigate()
  const goals = useSelector((state) => state.goals)
  const goal = useSelector((state) => state.goal)
  const user = useSelector((state) => state.user)
  const [subgoals, setSubgoals] = useState({
    input1: '',
    input2: '',
    input3: '',
  })
  const { goalId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGoal(Number(goalId)))
    //needs ID
  }, [user])

  function handleForm(event) {
    setSubgoals({ ...subgoals, [event.target.id]: event.target.value })
    console.log(subgoals)
  }
  function completeHandler(e) {
    e.preventDefault()
    const entries = Object.values(subgoals).filter((el) => el !== '')
    if (entries.length >= 3) completeResearch(Number(goalId), entries)
    //needs to update goal status to researched
    // only available after adding 3 sub goals
    // adds the fresh subgoals to the database
  }
  function completeResearch(id, entries) {
    const updateData = { goalId: id, researched: true }
    updateGoal(updateData)
      .then(async (res) => {
        const redir = await addSubGoal({
          goalId: id,
          subgoalName: entries[0],
          completed: false,
          current: false,
        })
        await addSubGoal({
          goalId: id,
          subgoalName: entries[1],
          completed: false,
          current: false,
        })
        await addSubGoal({
          goalId: id,
          subgoalName: entries[2],
          completed: false,
          current: false,
        })
        navigate('/subgoal/' + redir + '/new')
      })
      .catch(console.error)
  }
  return (
    <>
      <div className="blank-nav3"></div>
      <h1 className="h1-research">Research Time!</h1>
      <p>Start by googling {goal.goalName} basics</p>
      <p>Find and write down 3 sub goals for {goal.goalName}... </p>
      <p>Once done press Continue!</p>
      <label htmlFor="input1">
        Subgoal 1:
        <input
          className="textbox-input"
          onChange={handleForm}
          id="input1"
          name="input1"
          type={'text'}
        />
        x
      </label>
      <label htmlFor="input2">
        Subgoal 2:
        <input
          className="textbox-input"
          onChange={handleForm}
          id="input2"
          name="input2"
          type={'text'}
        />
        x
      </label>
      <label htmlFor="input3">
        Subgoal 3:
        <input
          className="textbox-input"
          onChange={handleForm}
          id="input3"
          name="input3"
          type={'text'}
        />
        x
      </label>

      {/* <div  className="subGoalCreator">
          <img src="/images/greyPencil.png"></img>
          <p>click to add subgoal</p>
        </div> */}
      <button onClick={completeHandler}>Continue</button>

      <PlanBuddy message={chatter} />
    </>
  )
}

// need to add planBuddy nav index

// need to add Buddy

// How will we create the next goal? Conditional? Look back to this once we have the further functionality

export default Research
