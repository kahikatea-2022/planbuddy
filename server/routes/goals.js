const express = require('express')

//these are the variables to acces the DB functions by table name
const goals = require('../db/goals')

const router = express.Router()

// GET /api/v1/goals/
router.get('/getGoalById', (req, res) => {
  let id = req.body.goalId
  goals
    .getGoalDataById(id)
    .then((data) => {
      res.json(data)
      return null
    })
    .catch((err) => {
      console.error(err)
      res
        .status(500)
        .json({ message: 'Something went wrong getting goal data by ID' })
    })
})

//GET /api/v1/goals/
router.get('/getUserGoals', (req, res) => {
  //this is hardcoded and will be replaced by res.body (perhaps)
  let id = req.body.userId
  goals
    .getUserGoals(id)
    .then((data) => {
      res.json(data)
      return null
    })
    .catch((err) => {
      console.error(err)
      res
        .status(500)
        .json({ message: 'Something went wrong getting user goals' })
    })
})

// POST /api/v1/plans/
router.post('/addNewGoal', (req, res) => {
  const goalData = req.body
  goals
    .addNewGoal(goalData)
    .then((newId) => {
      res.status(200).json({ newId })
      return null
    })
    .catch((err) => {
      console.error(err)
      res
        .status(500)
        .json({ message: 'Something went wrong adding goal to the database' })
    })
})

//PATCH /api/v1/plans/
router.patch('/editGoal', (req, res) => {
  const data = req.body
  goals
    .editGoal(data)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong editing the goal' })
    })
})

module.exports = router
