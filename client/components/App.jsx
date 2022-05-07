import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Nav from './Nav'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import Users from './Users'
import LandingPage from './LandingPage'
import NewGoal from './NewGoal'
import { Routes, Route } from 'react-router-dom'
import Goal from './Goal'
import Research from './Research'
import { IfAuthenticated } from './Authenticated'

function App() {
  cacheUser(useAuth0)

  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="/register" element={<Registration />} />
        </Routes>
        {/* <IfAuthenticated> */}
        <Routes>
          {/* <Route path='/welcome/:type' element={}/> */}
          <Route path="/newgoal" element={<NewGoal />} />
          <Route path="/goal" element={<Goal />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/research" element={<Research />} />
          <Route path="/" element={<Users />} />
          {/* <Route path="/" element={<PingRoutes />} /> */}
        </Routes>
        {/* </IfAuthenticated> */}
    </div>
  )
}

export default App
