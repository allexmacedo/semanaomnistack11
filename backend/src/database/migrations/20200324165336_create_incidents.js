
// metodo up é responsável pela criação da tabela.
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();

        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
    })
};

//método down, se houver algum problema é possível dar um drop table
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
