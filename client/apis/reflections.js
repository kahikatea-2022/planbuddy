import request from 'superagent'

const rootUrl = '/api/v1'

// ?get resources by subgoal id
export function getReflectionsByTaskId(id) {
  return request
    .get(rootUrl + '/reflections/getReflectionsByTaskId/' + id)
    .then((res) => res.body)
}
export function addNewReflection(reflection) {
  return request
    .post(`${rootUrl}/reflections/addNewReflection/`)
    .send(reflection)
    .then((res) => res.body)
}
