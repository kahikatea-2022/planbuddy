export default function goal(state = {}, action) {
  switch (action.type) {
    case 'SET_GOAL':
      return action.goal
    default:
      return state
  }
}
