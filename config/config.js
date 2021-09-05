require("dotenv").config();

const config = {
  app: {
    port: process.env.PORT || 5000,
  },
  db: {
    client: process.env.DB_CLIENT || "mysql",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "3306",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "node-express-mysql-jwt",
  },
};

module.exports = config;
