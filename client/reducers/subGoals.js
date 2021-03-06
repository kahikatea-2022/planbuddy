export default function subGoals(state = [], action) {
  switch (action.type) {
    case 'SET_SUBGOALS':
      return action.subGoals
    case 'ADD_SUBGOAL':
      return [...state, action.subGoal]
    default:
      return state
  }
}
