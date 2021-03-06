const express = require('express')

//these are the variables to acces the DB functions by table name
const db = require('../db/resources')

const router = express.Router()

// GET /api/v1/resources/

router.get('/getResourcesByGoalId/:id', (req, res) => {
  let id = req.params.id
  
  db.getResourcesData(id)
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
router.get('/getResourcesBySubgoalId/:id', (req, res) => {
  let id = req.params.id

  db.getResourcesBySubGoalId(id)
    .then((data) => {
      res.json(data)
      return null
    })

    .catch((err) => {
      console.error(err)
      res.status(500).json({
        message: 'Something went wrong getting resources by subgoalId',
      })
    })
})

//POST /api/v1/resources
router.post('/addNewResource', (req, res) => {
  const data = req.body

  db.addNewResource(data)
    .then((newResourceId) => {
      res.status(200).json({ newResourceId })
      return null
    })
    .catch((err) => {
      console.error(err)
      res
        .status(500)
        .json({
          message: 'Something went wrong getting resources by subgoalId',
        })
    })
})

//PATCH /api/v1/resources
router.patch('/editResource', (req, res) => {
  console.log('reouter hit')
  const data = req.body
  db.editResource(data)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      console.error(err)
      res
        .status(500)
        .json({ message: 'Something went wrong editing the resource' })
    })
})

//DELETE /api/v1/resources
router.delete('/deleteResourceById', (req, res) => {
  const resourceId = req.body.resourceId

  db.deleteResourceById(resourceId)
    .then(() => {
      res.status(200).json({ message: 'resource deleted successfully' })
    })
    .catch((err) => {
      console.error(err)
      res
        .status(500)
        .json({ message: 'there was an error deleting the resource' })
    })
})

module.exports = router
