const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "student",
  password: "test",
  port: 5000,
});

module.exports = pool;
