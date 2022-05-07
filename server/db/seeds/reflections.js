/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reflections').del()
  await knex('reflections').insert([
    {
      reflection_id: 1,
      goal_id: 1, 
      task_id: 1, 
      reflection: 'reflection for reflection_id 1'
    },
    {
      reflection_id: 2,
      goal_id: 1, 
      task_id: 2, 
      reflection: 'reflection for reflection_id 2'
    }
  ]);
};
