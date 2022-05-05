import request from 'superagent'

const rootUrl = '/api/v1'

// ?get tasks by subgoal id
export function getTasks() {
  return Promise.resolve([
    { id: 1, name: 'be relational', completed: false, current: true },
    { id: 2, name: 'be globby', completed: false, current: false },
    { id: 3, name: 'be rational', completed: true, current: false },
  ]).then((res) => res)

  // return request.get(rootUrl + '/tasks').then((res) => {
  //   return res.body.users
  // })
}
