const SET_TASKS = 'SET_TASKS'
const ADD_TASK = 'ADD_TASK'

export function setTasks(tasks) {
  return {
    type: SET_TASKS,
    tasks,
  }
}
export function addTask(task) {
  return {
    type: ADD_TASK,
    task,
  }
}

export { SET_TASKS, ADD_TASK }
