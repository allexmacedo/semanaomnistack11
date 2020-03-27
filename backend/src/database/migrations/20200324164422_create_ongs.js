
// metodo up é responsável pela criação da tabela.
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
};

//método down, se houver algum problema é possível dar um drop table
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
