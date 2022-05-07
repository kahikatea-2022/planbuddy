import request from 'superagent'

const rootUrl = '/api/v1'

// ?get goals by user id or goal id
export function getGoals() {
  return Promise.resolve({
    user_name: 'Globox',
    goal_name: 'Befriend Rayman',
    why: 'Their floating hands look so delicous',
    weekly_hours: '120',
  }).then((res) => res)

  // return request.get(rootUrl + '/goals').then((res) => {
  //   return res.body.users
  // })
}

// URL will need checking
export function getGoalsByUserId(id) {
  return request.get(`${rootUrl}/user/${id}`).then((res) => res.body)
}
export function addNewGoal(goal) {
  return request
    .post(`${rootUrl}/goals/`)
    .send(goal)
    .then((res) => res.body)
}

// {
//   "user_id": "1",
//   "goal_name": "",
//   "why": "impress my friends",
//   "weekly_hours": "20",
//   "date_created": 778686947,
//   "completed": false
// }
