//FUNCTIONS RELATED TO REFLECTIONS DB
const connection = require('./connection')

// get reflections by taskId
function getReflectionsByTaskId(id, db = connection) {
  return db('reflections')
    .where('task_id', id)
    .select(
      'reflection_id as reflectionId',
      'goal_id as goalId',
      'task_id as taskId',
      'reflection'
    )
}

function getReflectionById(id, db = connection) {
  return db('reflections')
    .where('reflection_id', id)
    .select(
      'reflection_id as reflectionId',
      'goal_id as goalId',
      'task_id as taskId',
      'reflection'
    )
    .first()
}

function addNewReflection(reflectionData, db = connection) {
  const data = {
    goal_id: reflectionData.goalId,
    task_id: reflectionData.taskId,
    reflection: reflectionData.reflection,
  }

  return db('reflections').insert(data, 'id')
}

//PATCH edit reflection by reflectionId
function editReflection(reflectionData, db = connection) {
  const data = {
    reflection_id: reflectionData.reflectionId,
    goal_id: reflectionData.goalId,
    task_id: reflectionData.taskId,
    reflection: reflectionData.reflection,
  }
  return db('reflections')
    .where('reflection_id', data.reflection_id)
    .update(data)
}

//DELETE
function deleteReflectionById(reflectionId, db = connection) {
  return db('reflections').where('reflection_id', reflectionId).del()
}

//DELETE whole plan data by goal id DANGER ZONE!!!!!
function deleteAllByGoalId(goalId, db = connection) {
  return db('reflections').where('goal_id', goalId).del()
}

module.exports = {
  getReflectionsByTaskId,
  getReflectionById,
  addNewReflection,
  deleteReflectionById,
  deleteAllByGoalId,
  editReflection,
}
