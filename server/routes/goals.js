const express = require('express')

//these are the variables to acces the DB functions by table name
const goals = require('../db/goals')

const router = express.Router()

// GET /api/v1/plans/
router.get('/', (req, res) => {
  let id = 1
  goals.getGoalDataById(id)
    .then((data) => {
      res.json(data)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong getting goal data by ID' })
    })
})

// POST /api/v1/plans/
router.post('/', (req, res) => {
  const goalData = req.body
  goals.addNewGoal(goalData)
  .then(() => {
    res.sendStatus(200)
    return null
  })
  .catch((err) => {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong adding goal to the database' })
  })
})

module.exports = router
