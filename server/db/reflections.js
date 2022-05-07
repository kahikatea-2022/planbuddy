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



module.exports = {
  getReflectionsByTaskId,
}