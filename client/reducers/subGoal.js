import { SET_SUBGOAL } from '../actions/subGoals'

export default function subGoal(state = {}, action) {
  switch (action.type) {
    case SET_SUBGOAL:
      return action.subgoal
    default:
      return state
  }
}
