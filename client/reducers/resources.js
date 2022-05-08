const initialState = [
  // {
  //   resource_name: 'youtube',
  //   url: 'www.youtube.com',
  // },
  // {
  //   resource_name: 'udemy',
  //   url: 'www.udemy.com',
  // },
]

export default function resources(state = initialState, action) {
  switch (action.type) {
    case 'SET_RESOURCES':
      return action.resources
    case 'ADD_RESOURCE':
      return [...state, action.resource]
    default:
      return state
  }
}
