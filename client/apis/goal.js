import request from 'superagent'

const rootUrl = '/api/v1'

export function getGoalById(id) {
  return request.get(`${rootUrl}/goals/${id}`).then((res) => res.body)
}
