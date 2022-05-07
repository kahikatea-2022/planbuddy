exports.up = function (knex) {
  return knex.schema.createTable('goals', (table) => {
    table.increments('goal_id')
    table.integer('user_id').references('user_profiles.user_id')
    table.string('goal_name')
    table.string('why')
    table.integer('weekly_hours')
    table.date('date_created')
    table.boolean('completed')
    table.boolean('researched')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('goals')
}
