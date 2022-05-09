//FUNCTIONS RELATED TO GOALS DB

const connection = require('./connection')

//GET individual goal data from goals by goal_id
function getGoalDataById(goal_id, db = connection) {
  return db('goals')
    .where('goal_id', goal_id)
    .select(
      'goal_id as goalId',
      'user_id as userId',
      'goal_name as goalName',
      'why',
      'weekly_hours as weeklyHours',
      'date_created as dateCreated',
      'completed',
      'researched'
    )
    .first()
}

//GET user goals from database by user id
function getUserGoals(user_id, db = connection) {
  return db('goals')
    .where('user_id', user_id)
    .select(
      'goal_id as goalId',
      'user_id as userId',
      'goal_name as goalName',
      'why',
      'weekly_hours as weeklyHours',
      'date_created as dateCreated',
      'completed',
      'researched'
    )
}

//POST add a new goal to the database
function addNewGoal(goal, db = connection) {
  const data = {
    user_id: goal.userId,
    goal_name: goal.goalName,
    why: goal.why,
    weekly_hours: goal.weeklyHours,
    date_created: goal.dateCreated,
    completed: goal.completed,
  }

  return db('goals').insert(data)
}
//PATCH edit an existing goal
function editGoal(goalData, db = connection) {
  const data = {
    goal_id: goalData.goalId,
    user_id: goalData.userId,
    goal_name: goalData.goalName,
    why: goalData.why,
    weekly_hours: goalData.weeklyHours,
    date_created: goalData.dateCreated,
    completed: goalData.completed,
    researched: goalData.researched,
  }
  return db('goals').where('goal_id', data.goal_id).update(data)
}

//DELETE
function deleteGoalById(goalId, db = connection) {
  return db('goals').where('goal_id', goalId).del()
}

//DELETE whole pland data by goal id DANGER ZONE!!!!!
function deletePlanByGoalId(goalId, db = connection) {
  console.log(goalId);
  return db('goals')
    .where('goal_id', goalId)
    .join('tasks', 'tasks.goal_id', 'goals.goal_id')
    .del()
  // Jared & Sophia already raised with Zak that we don't think this will work
}

module.exports = {
  getGoalDataById,
  getUserGoals,
  addNewGoal,
  editGoal,
  deleteGoalById,
  deletePlanByGoalId
}
