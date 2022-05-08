import request from 'superagent'

const rootUrl = '/api/v1'

// ?get resources by subgoal id
export function getResourcesBySubGoalId(id) {
  return request
    .get(rootUrl + '/resources/getResourcesBySubgoalId/' + id)
    .then((res) => res.body)
}
export function addNewResource(resource) {
  return request
    .post(`${rootUrl}/resources/addNewResource`)
    .send(resource)
    .then((res) => res.body)
}
