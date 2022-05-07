import { getSubGoals } from '../apis/subGoals'

const SET_SUBGOALS = 'SET_SUBGOALS'
const ADD_SUBGOAL = 'SET_SUBGOAL'

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

export function fetchSubGoals(goalId) {
  return (dispatch) => {
    return getSubGoals(goalId).then((data) => {
      dispatch(setSubGoals(data))
    })
  }
}

export { SET_SUBGOALS, ADD_SUBGOAL }
