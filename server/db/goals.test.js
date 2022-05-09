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

test('GET all goals of a user by id', () => {

  
  return db.getGoalDataById(1, testDb).then((goals) => {
    expect(goals.id).toBe(1)
    return null
  })
})

// test('GET all friends of a user by id', () => {
//   return db.getFriends(10001, testDb).then((friends) => {
//     expect(friends).toHaveLength(4)
//     expect(friends[3].id).toBe(10005)
//     return null
//   })
// })
