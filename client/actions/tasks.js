import { getTask, getTasksBySubGoalId } from '../apis/tasks'

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
export function fetchTasks(id) {
  return (dispatch) => {
    // insert wait indicator dispatch here
    return getTasksBySubGoalId(id).then((data) => {
      dispatch(setTasks(data))
    })
  }
}
export function fetchTask(id) {
  return (dispatch) => {
    // insert wait indicator dispatch here
    return getTask(id).then((data) => {
      console.log(data)
      dispatch(setTask(data))
    })
  }
}

export { SET_TASKS, SET_TASK, ADD_TASK }
