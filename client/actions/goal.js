import { getGoalsByUserId } from '../apis/goals'

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
    return getGoalsByUserId(id).then((data) => {
      dispatch(setGoal(data))
    })
  }
}

export { SET_GOAL }
