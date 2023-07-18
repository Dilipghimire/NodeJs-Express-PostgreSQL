const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "student",
  password: "Redmustang@91",
  port: 5000,
});

module.exports = pool;
