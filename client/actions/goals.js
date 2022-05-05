const SET_GOALS = 'SET_GOALS'
const ADD_GOAL = 'ADD_GOAL'

export function setGoals(goals) {
  return {
    type: SET_GOALS,
    goals,
  }
}
export function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}

export { ADD_GOAL, SET_GOALS }
