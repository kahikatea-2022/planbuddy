const SET_GOAL = 'SET_GOAL'

export function setGoal(goal) {
  return {
    type: SET_GOAL,
    goal,
  }
}

export function fetchGoal() {
  return (dispatch) => {
    // insert wait indicator dispatch here
    return getGoal().then((data) => {
      dispatch(setGoal(data))
    })
  }
}

export { SET_GOAL }
