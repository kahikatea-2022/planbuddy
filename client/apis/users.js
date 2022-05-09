import request from 'superagent'

const rootUrl = '/api/v1'

export function getUsers() {
  // What is this needed for? Passing the full list of users
  // could be a security vulnerability, particularly when put
  // into Users.jsx
  return request.get(rootUrl + '/users/getAllUsers').then((res) => {
    return res.body
    console.log(res.body)
  })
}

export function addUser(user) {
  return request.post(rootUrl + '/users/addNewUser').send(user)
}

export function getUserRoles(id) {
  return request.get(`${rootUrl}/users/${id}`).then((res) => {
    return res.body.roles
  })
}

export function addUserName(id, name) {
  return request
    .patch(`${rootUrl}/users/`)
    .send({ id, name })
    .then((res) => res.body)
}
