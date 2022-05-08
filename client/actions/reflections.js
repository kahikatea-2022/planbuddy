import { getReflectionsByTaskId } from '../apis/reflections'

const SET_REFLECTIONS = 'SET_REFLECTIONS'
const SET_REFLECTION = 'SET_REFLECTION'
const ADD_REFLECTION = 'ADD_REFLECTION'

// TODO add reflections actions
export function setReflections(reflections) {
  return {
    type: SET_REFLECTIONS,
    reflections,
  }
}
export function setReflection(reflection) {
  return {
    type: SET_REFLECTIONS,
    reflection,
  }
}
export function addReflection(reflection) {
  return {
    type: ADD_REFLECTION,
    reflection,
  }
}
export function fetchReflections(taskId) {
  return (dispatch) => {
    return getReflectionsByTaskId(taskId).then((data) => {
      console.log(data)
      dispatch(setReflections(data))
      return null
    })
  }
}

export { SET_REFLECTION, SET_REFLECTIONS, ADD_REFLECTION }
