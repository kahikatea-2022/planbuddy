export default function tasks(state = [], action) {
  switch (action.type) {
    case 'SET_TASKS':
      return action.tasks
    case 'ADD_TASK':
      return [...state, action.task]
    default:
      return state
  }
}
