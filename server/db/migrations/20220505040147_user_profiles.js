exports.up = function (knex) {
  return knex.schema.createTable('user_profiles', (table) => {
    table.increments('user_id')
    table.string('auth0_id')
    table.string('user_name')
    table.string('email')
    table.integer('current_task')
    // NB: This should probably not live here from the perspective of
    // database architecture, since it should be foreign-keyed to 
    // the tasks table, which probably doesn't exist when this table
    // is created. I think the ideal setup would be a separate
    // current_task table that sets up a 1:1 relationship between
    // a task id and a user id, but after both of those things exist.
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_profiles')
}
