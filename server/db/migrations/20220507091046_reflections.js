/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('reflections', (table) => {
    table.increments('reflection_id')
    table.integer("goal_id").references('goals.goal_id')
    table.integer('task_id')
    table.string('reflection')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('reflections')
};
