import request from 'superagent'

const rootUrl = '/api/v1'

// ?get resources by subgoal id
export function getResourcesBySubGoalId(id) {
  return request
    .get(rootUrl + '/resources/getResourcesBySubGoalId/' + id)
    .then((res) => res.body)
}
