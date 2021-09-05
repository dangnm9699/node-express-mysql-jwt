exports.up = function (knex) {
  return knex.schema.createTable("movies", function (table) {
    table.uuid("id").primary().notNullable().defaultTo(knex.raw("(UUID())"));
    table.string("tconst", 20).notNullable().unique();
    table.string("name", 50).notNullable();
    table.integer("duration").unsigned();
    table.date("released_date");
    table.string("description", 2000).notNullable().defaultTo("");
    table.boolean("activated").notNullable().defaultTo(true);
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("movies");
};
