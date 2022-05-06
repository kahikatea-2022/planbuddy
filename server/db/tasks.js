//FUNCTIONS RELATED TO TASKS DB

const connection = require('./connection')

//GET tasks data by goal_id
function getTasks(goal_id, db = connection) {
  return db('tasks').where('goal_id', goal_id).select()
}

function getTasksBySubGoalId(subgoal_id, db = connection) {
  return db('tasks').where('subgoal_id', subgoal_id).select()
}
module.exports = {
  getTasks,
  getTasksBySubGoalId,
}
