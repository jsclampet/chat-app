const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5431,
  username: "postgres",
  password: "Clampet7408!",
  database: "zenchat",
});

module.exports = pool;
