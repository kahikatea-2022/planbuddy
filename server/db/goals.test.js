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
    console.log(goals)
    expect(goals.goalId).toBe(1)
    // expect(goals.userId).toBeInstanceOf(typeof 22);
    // expect(goals.goalName).toBe()
    // expect(goals.why).toBe()
    // expect(goals.weeklyHours).toBe()
    // expect(goals.dateCreated).toBe()
    // expect(goals.completed).toBe()
    // expect(goals.researched).toBe()
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
