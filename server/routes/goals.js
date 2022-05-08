const express = require('express')

//these are the variables to acces the DB functions by table name
const db = require('../db/goals')

const router = express.Router()

// GET /api/v1/goals/
router.get('/getGoalById/:id', (req, res) => {
  // modified this to take id from URL as I wasnt able to send data for the get request, change back as needed xoxoxo
  // let id = req.body.goalId
  const id = Number(req.params.id)
  db.getGoalDataById(id)
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
router.get('/getUserGoals/:id', (req, res) => {
  //this is hardcoded and will be replaced by res.body (perhaps)
  let id = Number(req.params.id)
  db.getUserGoals(id)
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

// POST /api/v1/goals/
router.post('/addNewGoal', (req, res) => {
  const goalData = req.body
  db.addNewGoal(goalData)
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

//PATCH /api/v1/goals/
router.patch('/editGoal', (req, res) => {
  const data = req.body
  db.editGoal(data)
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
