import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import goals from './goals'
import subGoals from './subGoals'
import resources from './resources'
import tasks from './tasks'

export default combineReducers({
  users,
  user,
  goals,
  subGoals,
  resources,
  tasks,
})
