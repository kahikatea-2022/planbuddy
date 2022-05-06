const SET_SUBGOALS = 'SET_SUBGOALS'
const ADD_SUBGOAL = 'SET_SUBGOAL'

export function setGoals(subGoals) {
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

export { SET_SUBGOALS, ADD_SUBGOAL }
