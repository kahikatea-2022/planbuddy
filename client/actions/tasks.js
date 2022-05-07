const SET_TASKS = 'SET_TASKS'
const SET_TASK = 'SET_TASK'
const ADD_TASK = 'ADD_TASK'

export function setGoals(tasks) {
  return {
    type: SET_TASKS,
    tasks,
  }
}
export function addGoal(task) {
  return {
    type: ADD_TASK,
    task,
  }
}

export { SET_TASKS, SET_TASK, ADD_TASK }
