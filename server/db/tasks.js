//FUNCTIONS RELATED TO TASKS DB

const connection = require('./connection')

//GET tasks data by goal_id
function getTasks(goal_id, db = connection) {
  return db('tasks').where('goal_id', goal_id).select()
}

function getTasksBySubGoalId(subgoal_id, db = connection) {
  return db('tasks').where('subgoal_id', subgoal_id).select()
}

function getTaskById(tasks_id, db = connection) {
  return db('tasks').where('task_id', tasks_id).select().first()
}
module.exports = {
  getTasks,
  getTasksBySubGoalId,
  getTaskById,
}
