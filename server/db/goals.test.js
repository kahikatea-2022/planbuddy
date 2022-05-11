/* eslint-disable promise/no-nesting */
/* eslint-disable jest/expect-expect */
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

test('GET getUserGoals should an array of users', () => {
  return db.getUserGoals(1, testDb).then((goals) => {
    expect(goals).toHaveLength(1)
  })
})

test('POST addNewGoal should add a new goal to the database', () => {
  return db
    .addNewGoal(
      {
        goalId: 2,
        userId: 3,
        goalName: 'Learn to salsa dance',
        why: 'I want to dine at mexicali',
        weeklyHours: 13,
        dateCreated: 234516947,
        completed: 0,
        researched: 0,
      },
      testDb
    )
    .then((id) => {
      expect(id[0]).toBe(2)
      return null
    })
    .then(() => {
      // eslint-disable-next-line promise/no-nesting
      return db.getGoalDataById(2, testDb).then((user) => {
        expect(user.goalName).toBe('Learn to salsa dance')
        expect(user.why).toBe('I want to dine at mexicali')
        return null
      })
    })
})

// test('PATCH editGoal should update an existing goal', () => {
//   return db
//     .editGoal(
//       // 1,
//       {
//         goalId: 1,
//         userId: 1,
//         goalName: 'Learn to play EVIL piano organ',
//         why: 'I have turned to the darkside and am a vampire',
//         weeklyHours: 24,
//         dateCreated: 234516947,
//         completed: 0,
//         researched: 0,
//       },
//       testDb
//     )
//     .then((id) => {
//       expect(id).toBe(1)
//       return null
//     })
//     .then(() => {
//       // eslint-disable-next-line promise/no-nesting

//       return db.getGoalDataById(2, testDb).then((user) => {
//         console.log(user)
//         expect(user.goalName).toBe('Learn to salsa dance')
//         expect(user.why).toBe('I want to dine at mexicali')
//         return null
//       })
//     })
// })

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
