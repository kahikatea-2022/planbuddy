//FUNCTIONS RELATED TO RESOURCES DB

const connection = require('./connection')

//GET resources data by goal_id
function getResourcesData(goal_id, db = connection) {
  return db('resources').where('goal_id', goal_id).select()
}

function getResourcesBySubGoalId(subgoal_id, db = connection) {
  return db('resources').where('subgoal_id', subgoal_id).select()
}

module.exports = {
  getResourcesData,
  getResourcesBySubGoalId,
}
