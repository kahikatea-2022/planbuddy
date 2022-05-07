const express = require('express')

//these are the variables to acces the DB functions by table name
const db = require('../db/sub_goals')

const router = express.Router()

// GET /api/v1/subGoals
router.get('/getSubGoals:id', (req, res) => {
  let id = Number(req.params.goalId)

  db.getSubGoals(id)
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
router.get('/getSubGoalById/:id', (req, res) => {
  let id = Number(req.params.subgoalId)

  db.getSubGoalById(id)
    .then((data) => {
      res.json(data)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({
        message: 'Something went wrong getting the sub goal by subGoal_id',
      })
    })
})

router.post('/addNewSubgoal', (req, res) => {
  const newSubgoal = req.body

  db.addNewSubGoal(newSubgoal)
    .then((newSubgoalId) => {
      res.status(200).json({ newSubgoalId })
    })
    .catch((err) => {
      console.error(err)
      res
        .status(500)
        .json({ message: 'Something went wrong creating new subgoal' })
    })
})

module.exports = router
