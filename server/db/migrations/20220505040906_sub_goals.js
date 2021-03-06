exports.up = function (knex) {
  return knex.schema.createTable('sub_goals', (table) => {
    table.increments('subgoal_id')
    table.integer('goal_id').references('goals.goal_id')
    table.string('subgoal_name')
    table.integer('reward_id')
    table.boolean('completed')
    table.boolean('current')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('sub_goals')
}
