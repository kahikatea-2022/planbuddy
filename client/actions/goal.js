import { getGoalById } from '../apis/goal'

const SET_GOAL = 'SET_GOAL'

export function setGoal(goal) {
  return {
    type: SET_GOAL,
    goal,
  }
}

export function fetchGoal(id) {
  return (dispatch) => {
    // insert wait indicator dispatch here
    return getGoalById(id).then((data) => {
      dispatch(setGoal(data))
    })
  }
}

export { SET_GOAL }
