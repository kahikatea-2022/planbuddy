const express = require('express')

//these are the variables to acces the DB functions by table name

const db = require('../db/tasks')

const router = express.Router()

// GET /api/v1/plans/
router.get('/getTasksByGoalId', (req, res) => {
  let id = req.body.goalId

  db.getTasks(id)
    .then((data) => {
      res.json(data)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//GET /api/v1/tasks
router.get('/getTasksbySubgoalId/:id', (req, res) => {
  const id = Number(req.params.id)

  db.getTasksBySubGoalId(id)
    .then((data) => {
      res.json(data)
      return null
    })
    .catch((err) => {
      console.error(err)
      res
        .status(500)
        .json({ message: 'Something went wrong getting tasks by subgoalId' })
    })
})

//GET /api/v1/tasks
// get task by task ID
router.get('/getTaskById', (req, res) => {
  const id = req.body.taskId

  db.getTaskById(id)
    .then((data) => {
      res.json(data)
      return null
    })
    .catch((err) => {
      console.error(err)
      res
        .status(500)
        .json({ message: 'Something went wrong getting task by taskId' })
    })
})

router.post('/addNewTask', (req, res) => {
  const newTask = req.body

  db.addNewTask(newTask)
    .then((newTaskId) => {
      res.status(200).json({ newTaskId })
    })
    .catch((err) => {
      console.error(err)
      res
        .status(500)
        .json({ message: 'Something went wrong creating new task' })
    })
})

router.patch('/updateTaskById/', (req, res) => {
  const update = req.body
  db.updateTaskById(update)
    .then((response) => {
      res.status(200).json({ response })
      console.log(update)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong updating task' })
    })
})
module.exports = router
