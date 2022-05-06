const express = require('express')
const path = require('path')

const usersRoutes = require('./routes/users')
const plansRoutes = require('./routes/plans')
const goalsRoutes = require('./routes/goals')
const resourcesRoutes = require('./routes/resources')
const subGoalsRoutes = require('./routes/subGoals')
const tasksRoutes = require('./routes/tasks')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/plans', plansRoutes)
server.use('/api/v1/goals', goalsRoutes)
server.use('/api/v1/resources', resourcesRoutes)
server.use('/api/v1/subGoals', subGoalsRoutes)
server.use('/api/v1/tasks', tasksRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
