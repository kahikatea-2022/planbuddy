//FUNCTIONS RELATED TO TASKS DB

const connection = require('./connection')

//GET tasks data by goal_id
function getTasks(tasks_id, db = connection) {
  return db('goals').where('goal_id', tasks_id).select
}

module.exports = {
  getTasks,
}
