const express = require('express')

//these are the variables to acces the DB functions by table name
const goals = require('../db/goals')

const router = express.Router()

// GET /api/v1/plans/
router.get('/', (req, res) => {
  goals
    .getGoalData(1)
    .then((data) => {
      userPlan.goalData = data
    })
    .then(() => {
      res.json(userPlan)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
