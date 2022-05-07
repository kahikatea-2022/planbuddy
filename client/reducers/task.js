import { SET_TASK } from '../actions/tasks'

export default function task(state = {}, action) {
  switch (action.type) {
    case SET_TASK:
      return action.task
    default:
      return state
  }
}
