import request from 'superagent'

const rootUrl = '/api/v1'

export function getGoalById(id) {
  return request
    .get(`${rootUrl}/goals/getGoalById/${id}`)
    .then((res) => res.body)
}
export function updateGoal(update) {
  console.log(22, update)
  return request
    .patch(`${rootUrl}/goals/editGoal/`)
    .send(update)
    .then((res) => res.body)
}
