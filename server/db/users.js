const connection = require('./connection')

//GET ALL USERS from the database
function getUsers(db = connection) {
  return db('user_profiles').select(
  )
}

//ADD USER to the database
function addUser(userData, db = connection) {
  return db('user_profiles').insert(userData)
}

module.exports = {
  getUsers,
  addUser,
}


//relates to add new user data refactoring
// const { auth0_Id, user_name, email, current_task } = userData
//   const user = { auth0_id: auth0_Id, user_name, email, current_task }