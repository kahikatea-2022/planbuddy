import { SET_GOAL } from '../actions/goal'

export default function goal(state = {}, action) {
  switch (action.type) {
    case SET_GOAL:
      return action.goal
    default:
      return state
  }
}
