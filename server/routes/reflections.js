const express = require('express')

//these are the variables to acces the DB functions by table name
const db = require('../db/reflections')

const router = express.Router()

//GET /api/v1/reflections
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

//GET /api/v1/reflections
router.get('/getReflectionById', (req, res) => {
  const id = req.body.reflectionId

  db.getReflectionById(id)
  .then((data) => {
    res.json(data)
    return null
  })
  .catch((err) => {
    console.error(err)
    res
      .status(500)
      .json({ message: 'Something went wrong getting reflection by ID' })
  })
})

//POST /api/v1/reflections
router.post('/addNewReflection', (req, res) => {
  const data = req.body

  db.addNewReflection(data)
  .then((newReflectionId) => {
    res.status(200).json({ newReflectionId })
  })
  .catch((err) => {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong creating new subgoal' })
  })
})

//DELETE /api/v1/reflections
router.delete('/deleteReflectionById', (req, res) => {
  const reflectionId = req.body.reflectionId

  db.deleteReflectionById(reflectionId)
  .then(() => {
    res.status(200).json({ message: 'reflection deleted successfully' })
  })
  .catch((err) => {
    console.error(err)
    res.status(500).json({ message: 'there was an error deleting the reflection' })
  })
})

module.exports = router