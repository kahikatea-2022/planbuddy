const emptyTask = {}

export default function goals(state = emptyTask, action) {
  switch (action.type) {
    case 'SET_TASKS':
      return action.tasks
    case 'ADD_TASK':
      return [...state, action.task]
  }
}
