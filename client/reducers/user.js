import { SET_USER, CLEAR_USER, UPDATE_USER } from '../actions/user'

const emptyUser = {
  id: null,
  username: '',
  token: '',
}

export default function user(state = emptyUser, action) {
  switch (action.type) {
    case SET_USER:
      return action.user

    case CLEAR_USER:
      return emptyUser
    case UPDATE_USER:
      console.log(action)
      return { ...state, ...action.update }

    default:
      return state
  }
}
