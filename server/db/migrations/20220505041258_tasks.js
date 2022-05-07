exports.up = function (knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('task_id')
    table.integer('goal_id').references('goals.goal_id')
    table.integer('subgoal_id')
    table.string('task_name')
    table.string('time_spent')
    table.boolean('completed')
    table.boolean('current')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tasks')
}
