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
  ])
}
