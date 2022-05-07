import request from 'superagent'

const rootUrl = '/api/v1'

// ?get tasks by subgoal id
export function getTask(id) {
  return request
    .get(rootUrl + '/tasks/getTaskById/' + id)
    .then((res) => res.body)
}
export function getTasksBySubGoalId(id) {
  return request
    .get(rootUrl + '/tasks/getTasksBySubGoalId/' + id)
    .then((res) => res.body)
}
