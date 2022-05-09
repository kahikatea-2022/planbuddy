/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('quotes').del()
  await knex('quotes').insert([
    {
      quote_id: 1,
      subject_id: 1,
      quote: "It's all about the journey, so keep going!",
    },

    {
      quote_id: 2,
      subject_id: 2,
      quote: 'A goal without a plan is just a wish!',
    },

    {
      quote_id: 3,
      subject_id: 2,
      quote:
        'There are dreamers and there are planners, the planners are the ones that make dreams come true!',
    },

    {
      quote_id: 4,
      subject_id: 2,
      quote: 'Failing to prepare is preparing to fail!',
    },

    {
      quote_id: 5,
      subject_id: 2,
      quote: 'An hour of planning can save you ten hours of doing!',
    },
  ])
}
