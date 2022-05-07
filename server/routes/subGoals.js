const express = require('express')

//these are the variables to acces the DB functions by table name
const db = require('../db/sub_goals')

const router = express.Router()

// GET /api/v1/subGoals
router.get('/getSubGoals/:id', (req, res) => {
  let id = Number(req.params.id)
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

// POST /api/v1/subGoals
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

//PATCH /api/v1/subGoals
router.patch('/upateSubgoalById', (req, res) => {
  const data = req.body

  db.updateSubGoalById(data)
    .then(() => {
      res.status(200).json({ message: 'your subgoal was successfully updated' })
      return null
    })
    .catch((err) => {
      console.error(err)
      res
        .status(500)
        .json({ message: 'Something went wrong updating the subgoal' })
    })
})

module.exports = router
