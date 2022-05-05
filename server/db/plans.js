const connection = require('./connection')

//GET ALL USERS from the database
function getPlans(db = connection) {
  return db('goals')
  .join('sub_goals', 'goals.goal_id', 'sub_goals.goal_id')
  .join('tasks', 'tasks.goal_id', 'goals.goal_id')
  .join('resources', 'goals.goal_id', 'resources.goal_id')
  .select()
}


module.exports = {
  getPlans,
}