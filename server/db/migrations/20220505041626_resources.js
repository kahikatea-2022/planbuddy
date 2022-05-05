exports.up = function (knex) {
  return knex.schema.createTable('resources', (table) => {
    table.increments('resource_id')
    table.integer("goal_id").references('goals.goal_id')
    table.integer('subgoal_id').references('sub_goals.id')
    table.string('resource_name')
    table.string('url')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('resources')
}
