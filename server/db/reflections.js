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
}

function addNewReflection(reflectionData, db = connection) {
  const data = {
    goal_id: reflectionData.goalId,
    task_id: reflectionData.taskId,
    reflection: reflectionData.reflection
  }

  return db('reflections')
  .insert(data)
}


module.exports = {
  getReflectionsByTaskId,
  getReflectionById,
  addNewReflection
}