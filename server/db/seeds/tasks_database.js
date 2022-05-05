/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks_database').del()
  await knex('tasks_database').insert([
    {
      id: 1,
      plan_id: 1,
      subgoal_id: 1,
      task_name: 'place holder name from tasks database',
      time_spent: 'null',
      completed: false,
      current: true
    }
  ]);
};
