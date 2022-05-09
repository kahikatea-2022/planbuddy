const connection = require('./connection')

//GET ALL USERS from the database
function getUsers(db = connection) {
  return db('user_profiles').select(
    'user_id as userId',
    'auth0_id as auth0Id',
    'user_name as userName',
    'email',
    'current_task as currentTask'
  )
}

//ADD USER to the database
function addUser(userData, db = connection) {
  const data = {
    auth0_id: userData.auth0Id,
    user_name: userData.userName,
    email: userData.email,
    current_task: userData.currentTask,
  }
  return db('user_profiles').insert(data)
}

//GET
function getCurrentTaskByUserId(userId, db = connection) {
  return db('user_profiles')
    .where('user_id', userId)
    .select('current_task as currentTask')
    .first()
}

//PATCH
function updateCurrentTaskByUserId(userData, db = connection) {
  // Could this be made more general to allow updating of any user columns?
  const data = {
    user_id: userData.userId,
    current_task: userData.currentTask,
  }
  return db('user_profiles').where('user_Id', userData.userId).update(data)
}

//DELETE
function deleteUserById(userData, db = connection) {
  return db('user_profiles').where('user_id', userData).del()
}

module.exports = {
  getUsers,
  addUser,
  getCurrentTaskByUserId,
  updateCurrentTaskByUserId,
  deleteUserById,
}

//relates to add new user data refactoring
// const { auth0_Id, user_name, email, current_task } = userData
//   const user = { auth0_id: auth0_Id, user_name, email, current_task }
