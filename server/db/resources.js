//FUNCTIONS RELATED TO RESOURCES DB

const connection = require('./connection')

//GET resources data by goal_id
function getResourcesData(goal_id, db = connection) {
  return db('resources')
    .where('goal_id', goal_id)
    .select(
      'resource_id as resourceId',
      'goal_id as goalId',
      'subgoal_id as subgoalId',
      'resource_name as resourceName',
      'url'
    )
}

function getResourcesBySubGoalId(subgoal_id, db = connection) {
  return db('resources')
    .where('subgoal_id', subgoal_id)
    .select(
      'resource_id as resourceId',
      'goal_id as goalId',
      'subgoal_id as subgoalId',
      'resource_name as resourceName',
      'url'
    )
}

function addNewResource(newResource, db = connection) {
  const data = {
    // resource_id: newResource.resource_id,
    goal_id: newResource.goalId,
    subgoal_id: newResource.subgoalId,
    resource_name: newResource.resourceName,
    url: newResource.url,
  }
  return db('resources').insert(data, 'id')
}

//PATCH
function editResource(newResource, db = connection) {
  const data = {
    resource_id: newResource.resourceId,
    goal_id: newResource.goalId,
    subgoal_id: newResource.subgoalId,
    resource_name: newResource.resourceName,
    url: newResource.url,
  }
  return db('resources').where('resource_id', data.resource_id).update(data)
}

//DELETE
function deleteResourceById(resourceId, db = connection) {
  return db('resources').where('resource_id', resourceId).del()
}

//DELETE whole plan data by goal id DANGER ZONE!!!!!
function deleteAllByGoalId(goalId, db = connection) {
  return db('resources').where('goal_id', goalId).del()
}

module.exports = {
  getResourcesData,
  getResourcesBySubGoalId,
  addNewResource,
  deleteResourceById,
  editResource,
  deleteAllByGoalId,
}
