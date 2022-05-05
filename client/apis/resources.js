import request from 'superagent'

const rootUrl = '/api/v1'

// ?get resources by subgoal id
export function getTasks() {
  return Promise.resolve([
    {
      id: 1,
      name: "Rayman's Wiki Page",
      url: 'https://raymanpc.com/wiki/en/Rayman',
    },
    {
      id: 2,
      name: 'the Relational Paradox',
      url: 'https://www.scienceofpeople.com/the-relational-paradox/',
    },
  ]).then((res) => res)

  // return request.get(rootUrl + '/tasks').then((res) => {
  //   return res.body.users
  // })
}
