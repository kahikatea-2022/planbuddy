import request from 'superagent'

const rootUrl = '/api/v1'

export function getUsers() {
  return request.get(rootUrl + '/users').then((res) => {
    return res.body.users
  })
}

export function addUser(user) {
  return request.post(rootUrl + '/users').send(user)
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
