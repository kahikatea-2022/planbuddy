const SET_RESOURCES = 'SET_RESOURCES'
const ADD_RESOURCE = 'ADD_RESOURCE'

export function setResources(resources) {
  return {
    type: SET_RESOURCES,
    resources,
  }
}
export function addResource(resource) {
  return {
    type: ADD_RESOURCE,
    resource,
  }
}

export { ADD_RESOURCE, SET_RESOURCES }
