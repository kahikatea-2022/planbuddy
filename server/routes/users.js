const express = require('express')

const db = require('../db/users')
const router = express.Router()

// GET /api/v1/users/
router.get('/', (req, res) => {
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

module.exports = router
