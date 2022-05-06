import request from 'superagent'

const rootUrl = '/api/v1'

// ?get subgoals by goal id
export function getSubGoals(goal_id) {
  // return Promise.resolve([
  //   { id: 1, name: 'catch their attention', completed: false, current: true },
  //   {
  //     id: 2,
  //     name: 'learn about their interests',
  //     completed: false,
  //     current: false,
  //   },
  //   {
  //     id: 3,
  //     name: 'have a conversation with them',
  //     completed: true,
  //     current: false,
  //   },
  // ]).then((res) => res)

  // check URL when routes are ready
  return request.get(rootUrl + `/subgoal/` + goal_id).then((res) => {
    return res.body
  })
}
