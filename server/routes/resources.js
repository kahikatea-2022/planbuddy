const express = require('express')
const jwtAuthz = require('express-jwt-authz')
const { getUserRoles, checkJwt } = require('../auth0')

//these are the variables to acces the DB functions by table name
const resources = require('../db/resources')

const router = express.Router()

// middleware for checking permissions (authorization)
const checkAdmin = jwtAuthz(['read:my_private_route'], {
  customScopeKey: 'permissions',
})

// GET /api/v1/plans/
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

module.export = router
