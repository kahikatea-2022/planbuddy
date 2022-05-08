const express = require('express')

//these are the variables to acces the DB functions by table name
const goals = require('../db/goals')
const refelctions = require('../db/reflections')
const resources = require('../db/resources')
const subgoals = require('../db/sub_goals')
const tasks = require('../db/tasks')

const router = express.Router()

//!!DANGER ZONE!!
//DELETE /api/v1/plans
router.delete('/deletePlanByGoalId', (req, res) => {
  const id = req.body.goalId

console.log('route hit');
  
Promise.all([
  goals.deleteAllByGoalId(id),
  refelctions.deleteAllByGoalId(id),
  resources.deleteAllByGoalId(id),
  subgoals.deleteAllByGoalId(id),
  tasks.deleteAllByGoalId(id)
])
  .then(() => {
    res.status(200).json({ message: 'plan deleted successfully' })
  })
  .catch((err) => {
    console.error(err)
    res.status(500).json({ message: 'there was an error deleting the plan' })
  })
})

module.exports = router
