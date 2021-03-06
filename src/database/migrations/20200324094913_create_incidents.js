
exports.up = function (knex) {
    return knex.schema.createTable('incidents', function (table) {
        // ID auto incrementado
        table.increments()

        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()

        // chave estrangeira
        table.string('ong_id').notNullable()

        // referencia da chave estrangeira com a chave primaria da tabela ongs
        table.foreign('ong_id').references('id').inTable('ongs')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('incidents')
};
