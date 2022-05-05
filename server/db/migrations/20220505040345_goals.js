exports.up = function (knex) {
  return knex.schema.createTable('goals', (table) => {
    table.increments('id')
    table.string('goal_name')
    table.string('why')
    table.integer('weekly_hours')
    table.integer('user_id').references('user_profiles.id')
    table.date('date_created')
    table.boolean('completed')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('goals')
}
