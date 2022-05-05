exports.up = function (knex) {
  return knex.schema.createTable('tasks_database', (table) => {
    table.increments('id')
    table.integer('plan_id')
    table.integer('subgoal_id').references('sub_goals.id')
    table.string('name')
    table.string('time_spent')
    table.boolean('completed')
    table.boolean('current')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tasks_database')
}
