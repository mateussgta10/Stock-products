
exports.up = function(knex) {
  return knex.schema.createTable('products', function (table) {
    table.increments();

    table.string('name').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    table.string('quantity').notNullable();

    table.string('company_id').notNullable();

    table.foreign('company_id').references('id').inTable('companies');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
