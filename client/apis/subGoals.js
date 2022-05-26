import request from 'superagent'

const rootUrl = '/api/v1'

// ?get subgoals by goal id
export function getSubGoals(goalId) {
  return request
    .get(rootUrl + `/subGoals/getSubGoals/` + goalId)
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
    .then((res) => res.body.newSubgoalId[0]['subgoal_id'])
}
export function updateSubgoalById(subgoal, bool) {
  return request
    .patch(rootUrl + '/subGoals/updateSubgoalById/')
    .send({ subgoalId: subgoal.subgoalId, completed: bool })
    .then((res) => res.body)
}

//this is to edit the subgoal
export function editSubgoalById(subgoalId, newName) {
  return (
    request
      .patch(rootUrl + '/subGoals/updateSubgoalById/')
      //this is only sending through subgoalName
      .send({ subgoalId: subgoalId, subgoalName: newName })
      .then((res) => res.body)
  )
}
