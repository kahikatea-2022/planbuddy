/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {
      task_id: 1,
      goal_id: 1,
      subgoal_id: 1,
      task_name: 'place holder name from tasks database',
      time_spent: 'null',
      completed: false,
      current: true
    },
    {
      task_id: 2,
      goal_id: 1,
      subgoal_id: 2,
      task_name: 'place holder name 2 from tasks database',
      time_spent: 'null',
      completed: false,
      current: true
    }
  ]);
};
