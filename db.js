const { db } = require("./config/config");

const knex = require("knex")({
  client: db.client,
  connection: {
    host: db.host,
    port: db.port,
    user: db.user,
    password: db.password,
    database: db.database,
  },
});

const { attachPaginate } = require("knex-paginate");

attachPaginate();

module.exports = knex;
