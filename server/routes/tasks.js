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

module.exports = router