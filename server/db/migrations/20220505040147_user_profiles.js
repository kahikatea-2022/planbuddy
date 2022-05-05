exports.up = function (knex) {
  return knex.schema.createTable('user_profiles', (table) => {
    table.increments('id')
    table.string('auth0_id')
    table.string('name')
    table.string('email')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_profiles')
}
