const express = require('express')

const db = require('../db/users')
const router = express.Router()

// GET /api/v1/users/
router.get('/getAllUsers', (req, res) => {
  db.getUsers()
    .then((users) => {
      res.json(users)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// GET /api/v1/users/
router.get('/getCurrentTaskByUserId', (req, res) => {
  const id = req.body.userId 

  db.getCurrentTaskByUserId(id)
  .then((currentTaskId) => {
    res.json(currentTaskId)
  })
  .catch((err) => {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong getting getting current task by user id' })
  })
})

// POST /api/v1/users
// add new user to database and return new user ID
router.post('/addNewUser', (req, res) => {
  const newUser = req.body

  db.addUser(newUser)
  .then((newId) => {
    res.status(200).json({ newId })
  })
  .catch((err) => {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong adding user to database' })
  })
})

//PATCH /api/v1/users
router.patch('/updateCurrentTaskByUserId', (req, res) => {
  const data = req.body

  db.updateCurrentTaskByUserId(data)
  .then(() => {
    res.status(200).json({ message: 'your update was successful'})
  })
  .catch((err) => {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong updating the current task by user id' })
  })
})

module.exports = router
