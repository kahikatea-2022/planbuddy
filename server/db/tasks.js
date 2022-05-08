//FUNCTIONS RELATED TO TASKS DB

const connection = require('./connection')

//GET tasks data by goal_id
function getTasks(goal_id, db = connection) {
  return db('tasks')
    .where('goal_id', goal_id)
    .select(
      'task_id as taskId',
      'goal_id as goalId',
      'subgoal_id as subgoalId',
      'task_name as taskName',
      'time_spent as timeSpent',
      'completed',
      'current'
    )
}
//GET
function getTasksBySubGoalId(subgoal_id, db = connection) {
  return db('tasks')
    .where('subgoal_id', subgoal_id)
    .select(
      'task_id as taskId',
      'goal_id as goalId',
      'subgoal_id as subgoalId',
      'task_name as taskName',
      'time_spent as timeSpent',
      'completed',
      'current'
    )
}
//GET
function getTaskById(tasks_id, db = connection) {
  return db('tasks')
    .where('task_id', tasks_id)
    .select(
      'task_id as taskId',
      'goal_id as goalId',
      'subgoal_id as subgoalId',
      'task_name as taskName',
      'time_spent as timeSpent',
      'completed',
      'current'
    )
    .first()
}
//POST
function addNewTask(task, db = connection) {
  const data = {
    goal_id: task.goalId,
    subgoal_id: task.subgoalId,
    task_name: task.taskName,
    time_spent: task.timeSpent,
    completed: task.completed,
    current: task.current,
  }
  return db('tasks').insert(data)
}

//PATCH
function updateTaskById(task, db = connection) {
  const data = {
    task_id: task.taskId,
    goal_id: task.goalId,
    subgoal_id: task.subgoalId,
    task_name: task.taskName,
    time_spent: task.timeSpent,
    completed: task.completed,
    current: task.current,
  }
  return db('tasks').where('task_id', task.taskId).update(data)
}

//DELETE
function deleteTaskById(taskId, db = connection) {
  return db('tasks').where('task_id', taskId).del()
}

module.exports = {
  getTasks,
  getTasksBySubGoalId,
  getTaskById,
  addNewTask,
  updateTaskById,
  deleteTaskById,
}
