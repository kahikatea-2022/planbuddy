/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_profiles').del()
  await knex('user_profiles').insert([
    {
      user_id: 1,
      auth0_id: 'auth0_id currently null',
      user_name: 'Timmy Piano',
      email: 'timmyp@gmail.com',
      current_task: 1
    }
  ]);
};
