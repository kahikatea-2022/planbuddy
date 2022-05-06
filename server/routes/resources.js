const express = require('express')

//these are the variables to acces the DB functions by table name
const resources = require('../db/resources')

const router = express.Router()


// GET /api/v1/resources/
router.get('/', (req, res) => {
  let id = 1
  resources
    .getResourcesData(id)
    .then((data) => {
      res.json(data)
      return null
    })

    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// GET /api/v1/resources
router.get('/getResourcesBySubgoalId', (req, res) => {
  const id = req.body.subgoalId

  resources.getResourcesBySubGoalId(id)
  .then((data) => {
    res.json(data)
    return null
  })

  .catch((err) => {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong getting resources by subgoalId' })
  })
})


module.exports = router
