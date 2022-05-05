/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').del()
  await knex('resources').insert([
    {
      resource_id: 1,
      goal_id: 1, 
      subgoal_id: 1,
      resource_name: 'youtube',
      url: 'www.youtube.com'
    }, 
    {
      resource_id: 2,
      goal_id: 1, 
      subgoal_id: 2,
      resource_name: 'piano.com',
      url: 'www.piano.com'
    }
  ]);
};
