const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./goals')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('GET getGoalDataById should return an array of goal data by GoalId', () => {
  return db.getGoalDataById(1, testDb).then((goals) => {
    expect(goals.goalId).toBe(1)
    expect(typeof goals.userId).toBe('number')
    expect(typeof goals.goalName).toBe('string')
    expect(typeof goals.why).toBe('string')
    expect(typeof goals.weeklyHours).toBe('number')
    expect(typeof goals.dateCreated).toBe('number')
    expect(typeof goals.completed).toBe('number')
    expect(typeof goals.researched).toBe('number')
    return null
  })
})

// {
//   goalId: 1,
//   userId: 1,
//   goalName: 'Learn piano',
//   why: 'impress my friends',
//   weeklyHours: 20,
//   dateCreated: 778686947,
//   completed: 0,
//   researched: 0
// }
