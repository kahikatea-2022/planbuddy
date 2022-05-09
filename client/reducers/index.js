import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import goals from './goals'
import goal from './goal'
import subGoals from './subGoals'
import subGoal from './subGoal'
import reflections from './reflections'
import resources from './resources'
import tasks from './tasks'
import task from './task'

export default combineReducers({
  users,
  user,
  goals,
  goal,
  subGoals,
  subGoal,
  reflections,
  resources,
  tasks,
  task,
})
