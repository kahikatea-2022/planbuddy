import request from 'superagent'

const rootUrl = '/api/v1'

// ?get goals by user id or goal id
export function getGoals() {
  return Promise.resolve({
    user_name: 'Globox',
    goal_name: 'Befriend Rayman',
    why: 'THeir floating hands look so delicous',
    weekly_hours: '120',
  })

  // return request.get(rootUrl + '/goals').then((res) => {
  //   return res.body.users
  // })
}
