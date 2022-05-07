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

function addNewTask(task, db = connection) {
  const data = {
    goal_id: task.goalId,
    subgoal_id: task.subGoalId,
    task_name: task.taskName,
    time_spent: task.timeSpent,
    completed: task.completed,
    current: task.current,
  }
  return db('tasks').insert(data)
}
module.exports = {
  getTasks,
  getTasksBySubGoalId,
  getTaskById,
  addNewTask,
}
