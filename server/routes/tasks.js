const express = require('express')

//these are the variables to acces the DB functions by table name

const tasks = require('../db/tasks')

const router = express.Router()


// GET /api/v1/plans/
router.get('/', (req, res) => {
  let id = 1

  tasks.getTasks(id)
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
router.get('/getTasksbySubgoalId', (req,res) => {
  const id = req.body.subgoalId

  tasks.getTasksBySubGoalId(id)
  .then((data) => {
    res.json(data)
    return null
  })
  .catch((err) => {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong getting tasks by subgoalId' })
  })
})

//GET /api/v1/tasks
// get task by task ID
router.get('/getTaskById', (req, res) => {
  const id = req.body.taskId

  tasks.getTaskById(id)
  .then((data) => {
    res.json(data)
    return null
  })
  .catch((err) => {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong getting task by taskId' })
  })
})

module.exports = router