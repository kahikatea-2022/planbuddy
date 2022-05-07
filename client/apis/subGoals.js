import request from 'superagent'

const rootUrl = '/api/v1'

// ?get subgoals by goal id
export function getSubGoals(goalId) {
  return request.get(rootUrl + `/subgoals/getSubGoals` + goalId).then((res) => {
    return res.body
  })
}
