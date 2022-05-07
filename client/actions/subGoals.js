import { getSubGoalById, getSubGoals } from '../apis/subGoals'

const SET_SUBGOALS = 'SET_SUBGOALS'
const SET_SUBGOAL = 'SET_SUBGOAL'
const ADD_SUBGOAL = 'ADD_SUBGOAL'

export function setSubGoals(subGoals) {
  return {
    type: SET_SUBGOALS,
    subGoals,
  }
}
export function addGoal(subGoal) {
  return {
    type: ADD_SUBGOAL,
    subGoal,
  }
}
export function setSubGoal(subgoal) {
  return {
    type: SET_SUBGOAL,
    subgoal,
  }
}

export function fetchSubGoals(goalId) {
  return (dispatch) => {
    return getSubGoals(goalId).then((data) => {
      dispatch(setSubGoals(data))
    })
  }
}
export function fetchSubGoal(subGoalId) {
  return (dispatch) => {
    return getSubGoalById(subGoalId).then((data) => {
      dispatch(setSubGoal(data))
    })
  }
}
export { SET_SUBGOALS, ADD_SUBGOAL, SET_SUBGOAL }
