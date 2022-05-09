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
import VeteranView from './VeteranView'
import { Routes, Route } from 'react-router-dom'
import Goal from './Goal'
import Research from './Research'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Welcome from './Welcome'
import GoalOverview from './GoalOverview'
import PlanBuddy from './PlanBuddy'
import DailyLearning from './DailyLearning'
import Reflections from './Reflections'

function App() {
  cacheUser(useAuth0)

  return (
    <div className="app">
      {/* <Nav /> */}
      <IfNotAuthenticated>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/welcome/:type" element={<Welcome />} />
          <Route path="/newgoal" element={<NewGoal />} />
          <Route path="/veteranview" element={<VeteranView />} />
          <Route path="/goal/:goalId" element={<GoalOverview />} />
          <Route path="/subgoal/:subgoalId" element={<CreateSubGoal />} />
          <Route path="/research/:goalId" element={<Research />} />
          <Route path="/dailylearning/:taskid" element={<DailyLearning />} />
          <Route path="/reflection/:taskId" element={<Reflections />} />
          {/* <Route path="/" element={<PingRoutes />} /> */}
        </Routes>
      </IfAuthenticated>
    </div>
  )
}

export default App
