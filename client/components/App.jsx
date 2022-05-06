import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Nav from './Nav'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import Users from './Users'
import LandingPage from './LandingPage'
import NewGoal from './NewGoal'
import CreateSubGoal from './CreateSubGoal'
import { Routes, Route } from 'react-router-dom'
import Goal from './Goal'
import Research from './Research'

function App() {
  cacheUser(useAuth0)

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/newgoal" element={<NewGoal />} />
        <Route path="/createsubgoal" element={<CreateSubGoal />} />
        <Route path="/goal" element={<Goal />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/research" element={<Research />} />
        <Route path="/" element={<Users />} />
        <Route path="/" element={<PingRoutes />} />
        <Route path="/profile" element={<Registration />} />
      </Routes>
    </div>
  )
}

export default App
