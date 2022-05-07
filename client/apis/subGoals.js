import request from 'superagent'

const rootUrl = '/api/v1'

// ?get subgoals by goal id
export function getSubGoals(goalId) {
  return request
    .get(rootUrl + `/subgoals/getSubGoals/` + goalId)
    .then((res) => {
      if (res.body === null) return []
      return res.body
    })
}

export function getSubGoalById(id) {
  return request
    .get(rootUrl + '/subGoals/getSubGoalById/' + id)
    .then((res) => res.body)
}

export function addSubGoal(goal) {
  return request
    .post(rootUrl + '/subGoals/addNewSubgoal')
    .send(goal)
    .then((res) => res.body.newSubgoalId[0])
}
