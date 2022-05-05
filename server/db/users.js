const connection = require('./connection')

//GET ALL USERS from the database
function getUsers(db = connection) {
  return db('user_profiles').select(
  )
}

//ADD USER to the database
function addUser(userData, db = connection) {
  const { auth0Id, name, email } = userData
  const user = { auth0_id: auth0Id, name, email }
  return db('user_profiles').insert(user)
}

module.exports = {
  getUsers,
  addUser,
}
