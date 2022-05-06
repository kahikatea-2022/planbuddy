//FUNCTIONS RELATED TO sub_goals DB

const connection = require('./connection')

//GET sub_goals data by goal_id
function getSubGoals(goal_id, db = connection) {
  return db('sub_goals').where('goal_id', goal_id).select()
}

function getSubGoalById(subgoal_id, db = connection) {
  return db('sub_goals').where('subgoal_id', subgoal_id).select().first()
}

function addNewSubGoal(newSubGoal, db = connection) {
  return db('sub_goals').insert(newSubGoal)
}

module.exports = {
  getSubGoals,
  getSubGoalById,
  addNewSubGoal,
}
