import request from 'superagent'

const rootUrl = '/api/v1'

// ?get subgoals by goal id
export function getTasks() {
  return Promise.resolve([
    { id: 1, name: 'catch their attention', completed: false, current: true },
    {
      id: 2,
      name: 'learn about their interests',
      completed: false,
      current: false,
    },
    {
      id: 3,
      name: 'have a conversation with them',
      completed: true,
      current: false,
    },
  ]).then((res) => res)

  // return request.get(rootUrl + '/tasks').then((res) => {
  //   return res.body.users
  // })
}
