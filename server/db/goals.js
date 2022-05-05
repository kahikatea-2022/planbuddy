//FUNCTIONS RELATED TO GOALS DB

const connection = require('./connection')

//GET users plans by goal id
function getPlans(db = connection) {
  return db('goals')
  .join()
  .select()
}

//GET individual goal data from goals by goal_id

module.exports = {
  getPlans,
}