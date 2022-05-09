exports.up = function (knex) {
  return knex.schema.createTable('goals', (table) => {
    table.increments('goal_id')
    // NB: Typically, the primary key of a table is called "id". The underscore
    // should only be required when referring to this field from _other_ tables.
    table.integer('user_id').references('user_profiles.user_id')
    // For example, this could be ('user_id').references('user_profiles.id')
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
