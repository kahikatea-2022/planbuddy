const emptyGoal = {}

export default function goals(state = emptyGoal, action) {
  switch (action.type) {
    case 'SET_GOALS':
      return action.goals
    case 'ADD_GOAL':
      return [...state, action.goal]
  }
}
