//FUNCTIONS RELATED TO GOALS DB

const connection = require('./connection')

//GET individual goal data from goals by goal_id
function getGoalData(goal_id, db = connection) {
  return db('goals')
  .where('goal_id', goal_id)
  .select()
}

//GET user plans from database by user id
function getUserPlans(user_id, db = connection) {
  return db('goals')
  .where('user_id', user_id)
  .select()
}

module.exports = {
  getGoalData,
  getUserPlans
}