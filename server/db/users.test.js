const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./users')

beforeAll(() => {
  return testDb.migrate.latest()
})

afterAll(() => {
  return testDb.destroy()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('addUser should add a new user to the databse and return the new id', () => {
  const user = {
    auth0Id: 'hello',
    userName: 'Jim',
    email: 'jim@jim.com',
    currentTask: 1
  }

  return db.addUser(user, testDb)
  .then((id) => {
    expect(id[0]).toBe(2)
    return null
  })
  .then(() => {
    return db.getUsers(testDb)
    .then((users) => {
      expect(users[1].userId).toBe(2)
      expect(users[1].userName).toBe('Jim')
      expect(users[1].auth0Id).toBe('hello')
      expect(users[1].email).toBe('jim@jim.com')
      expect(users[1].currentTask).toBe(1)
      return null
    })
  })
})