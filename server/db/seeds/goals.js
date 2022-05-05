/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('goals').del()
  await knex('goals').insert([
    {
      id: 1, 
      goal_name: 'Learn piano',
      why: 'impress my friends',
      weekly_hours: 20,
      user_id: 1,
      date_created: 778686947,
      completed: false
    }
  ]);
};
