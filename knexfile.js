const { db } = require("./config/config");

module.exports = {
  development: {
    client: db.client,
    connection: {
      host: db.host,
      port: db.port,
      user: db.user,
      password: db.password,
      database: db.database,
    },
    migrations: {
      directory: `${__dirname}/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/database/seeds`,
    },
  },
};
