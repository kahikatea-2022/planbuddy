const express = require('express')

//these are the variables to acces the DB functions by table name
const db = require('../db/reflections')

const router = express.Router()

//GET /api/v1/reflections/
router.get('/getReflectionsByTaskId', (req, res) => {
  const id = req.body.taskId
  
  db.getReflectionsByTaskId(id)
  .then((data) => {
    res.json(data)
    return null
  })
  .catch((err) => {
    console.error(err)
    res
      .status(500)
      .json({ message: 'Something went wrong getting reflection by taskId' })
  })
})

module.exports = router