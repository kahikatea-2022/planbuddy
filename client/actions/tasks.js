const SET_TASKS = 'SET_TASKS'
const SET_TASK = 'SET_TASK'
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
export function setTask(task) {
  return {
    type: SET_TASK,
    task,
  }
}

export { SET_TASKS, SET_TASK, ADD_TASK }
