const emptySubGoal = {}

export default function goals(state = emptySubGoal, action) {
  switch (action.type) {
    case 'SET_SUBGOALS':
      return action.subGoals
    case 'ADD_SUBGOAL':
      return [...state, action.subGoal]
  }
}
