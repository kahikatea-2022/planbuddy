const emptyResources = {}

export default function resources(state = emptyResources, action) {
  switch (action.type) {
    case 'SET_RESOURCES':
      return action.resources
    case 'ADD_RESOURCE':
      return [...state, action.resource]
  }
}
