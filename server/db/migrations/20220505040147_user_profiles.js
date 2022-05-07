exports.up = function (knex) {
  return knex.schema.createTable('user_profiles', (table) => {
    table.increments('user_id')
    table.string('auth0_id')
    table.string('user_name')
    table.string('email')
    table.integer('current_task')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_profiles')
}
