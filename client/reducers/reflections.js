import { ADD_REFLECTION, SET_REFLECTIONS } from '../actions/reflections'
const initialState = [
  {
    reflection:
      'Omg so like, I just had taotally, omg for so just like totally that was the thing righttt!?!??',
    reflectionId: 1,
    taskId: 3,
  },
]
//TODO add reflections reducer
export default function reflections(state = initialState, action) {
  switch (action.type) {
    case SET_REFLECTIONS:
      return action.reflections
    case ADD_REFLECTION:
      return [...state, action.reflection]
    default:
      return state
  }
}
