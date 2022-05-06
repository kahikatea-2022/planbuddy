const express = require('express')

//these are the variables to acces the DB functions by table name
const subGoals = require('../db/sub_goals')

const router = express.Router()


// GET /api/v1/subGoals
router.get('/getSubGoals', (req, res) => {
  let id = req.body.goalId

  subGoals.getSubGoals(id)
    .then((data) => {
      res.json(data)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// GET /api/v1/subGoals
router.get('/getSubGoalById', (req, res) => {
  let id = req.body.subgoalId

  subGoals.getSubGoalById(id)
  .then((data) => {
    res.json(data)
    return null
  })
  .catch((err) => {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong getting the sub goal by subGoal_id' })
  })
})


module.exports = router