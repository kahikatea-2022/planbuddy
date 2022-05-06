//FUNCTIONS RELATED TO GOALS DB

const connection = require('./connection')

//GET individual goal data from goals by goal_id
function getGoalDataById(goal_id, db = connection) {
  return db('goals').where('goal_id', goal_id).select().first()
}

//GET user plans from database by user id
function getUserPlans(user_id, db = connection) {
  return db('goals').where('user_id', user_id).select()
}

//POST add a new goal to the database
function addNewGoal(goal, db = connection) {
  return db('goals').insert(goal)
}

module.exports = {
  getGoalDataById,
  getUserPlans,
  addNewGoal,
}
