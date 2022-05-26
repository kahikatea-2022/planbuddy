//FUNCTIONS RELATED TO sub_goals DB

const connection = require('./connection')

//GET sub_goals data by goal_id
function getSubGoals(goal_id, db = connection) {
  return db('sub_goals')
    .where('goal_id', goal_id)
    .select(
      'subgoal_id as subgoalId',
      'goal_id as goalId',
      'subgoal_name as subgoalName',
      'reward_id as rewardId',
      'completed',
      'current'
    )
}

function getSubGoalById(subgoal_id, db = connection) {
  return db('sub_goals')
    .where('subgoal_id', subgoal_id)
    .select(
      'subgoal_id as subgoalId',
      'goal_id as goalId',
      'subgoal_name as subgoalName',
      'reward_id as rewardId',
      'completed',
      'current'
    )
    .first()
}

function addNewSubGoal(newSubGoal, db = connection) {
  const data = {
    goal_id: newSubGoal.goalId,
    subgoal_name: newSubGoal.subgoalName,
    reward_id: newSubGoal.rewardId,
    completed: newSubGoal.completed,
    current: newSubGoal.current,
  }
  return db('sub_goals').insert(data, 'subgoal_id')
}

//PATCH update subgoal
function updateSubGoalById(newSubGoal, db = connection) {
  const data = {
    subgoal_id: newSubGoal.subgoalId,
    goal_id: newSubGoal.goalId,
    subgoal_name: newSubGoal.subgoalName,
    reward_id: newSubGoal.rewardId,
    completed: newSubGoal.completed,
    current: newSubGoal.current,
  }

  return db('sub_goals').where('subgoal_id', newSubGoal.subgoalId).update(data)
}

//DELETE
function deleteSubgoalById(subgoalId, db = connection) {
  return db('sub_goals').where('subgoal_id', subgoalId).del()
}

//DELETE whole plan data by goal id DANGER ZONE!!!!!
function deleteAllByGoalId(goalId, db = connection) {
  return db('sub_goals').where('goal_id', goalId).del()
}

module.exports = {
  getSubGoals,
  getSubGoalById,
  addNewSubGoal,
  updateSubGoalById,
  deleteSubgoalById,
  deleteAllByGoalId,
}
