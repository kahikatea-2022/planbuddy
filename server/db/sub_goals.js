//FUNCTIONS RELATED TO sub_goals DB

const connection = require('./connection')

//GET sub_goals data by goal_id
function getSubGoals(goal_id, db = connection) {
  return db('goals').where('goal_id', goal_id).select()
}

module.exports = {
  getSubGoals,
}
